from __future__ import annotations

import os
from functools import lru_cache
from pathlib import Path
from io import BytesIO
import modal

APP_NAME = "local-bg-remove-and-crop"

image = (
    modal.Image.debian_slim()
    .pip_install(
        "pillow",
        "numpy",
        "torch",
        "torchvision",
        "transformers",
        "requests",
    )
)

app = modal.App(APP_NAME)


def tight_crop_rgba_with_padding(im_rgba, pad: int = 10):
    """
    Crop to bounding box of non-transparent pixels (alpha > 0),
    then expand bbox by `pad` pixels in each direction (clamped to image bounds).
    """
    from PIL import Image

    if im_rgba.mode != "RGBA":
        im_rgba = im_rgba.convert("RGBA")

    alpha = im_rgba.split()[-1]
    bbox = alpha.getbbox()  # None if fully transparent

    if bbox is None:
        # Fully transparent: return small transparent square with padding
        return Image.new("RGBA", (1 + 2 * pad, 1 + 2 * pad), (0, 0, 0, 0))

    left, top, right, bottom = bbox
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(im_rgba.width, right + pad)
    bottom = min(im_rgba.height, bottom + pad)

    return im_rgba.crop((left, top, right, bottom))


@app.function(image=image, cpu=2, timeout=60 * 10)
def process_one(
    rel_path: str,
    src: bytes,
    pad: int = 10,
    method: str = "auto",
    remove_bg_api_key: str = "",
) -> tuple[str, bytes]:
    """
    Process one image byte payload and return PNG bytes with the output path.
    """
    from PIL import Image

    method = method.lower()
    if method not in {"auto", "bria", "removebg"}:
        raise ValueError(f"Invalid method: {method}")

    if method == "auto":
        method = "removebg" if remove_bg_api_key else "bria"

    if method == "removebg":
        out_bytes = remove_background_removebg(src, remove_bg_api_key)
    else:
        out_bytes = remove_background_bria(src)

    # Background removal -> bytes of a PNG with alpha
    im = Image.open(BytesIO(out_bytes)).convert("RGBA")
    im = tight_crop_rgba_with_padding(im, pad=pad)

    rel_png = str(Path(rel_path).with_suffix(".png"))
    out_buf = BytesIO()
    im.save(out_buf, format="PNG")

    return rel_png, out_buf.getvalue()


def remove_background_removebg(src: bytes, api_key: str) -> bytes:
    import requests

    if not api_key:
        raise RuntimeError(
            "remove.bg method selected but REMOVE_BG_API_KEY was not provided."
        )

    resp = requests.post(
        "https://api.remove.bg/v1.0/removebg",
        headers={"X-Api-Key": api_key},
        files={"image_file": ("image", src)},
        data={"size": "auto", "format": "png"},
        timeout=120,
    )
    if resp.status_code != 200:
        raise RuntimeError(f"remove.bg failed ({resp.status_code}): {resp.text}")
    return resp.content


@lru_cache(maxsize=1)
def _bria_model():
    import torch
    from transformers import AutoModelForImageSegmentation

    model = AutoModelForImageSegmentation.from_pretrained("briaai/RMBG-1.4")
    model.eval()
    return model, torch


def remove_background_bria(src: bytes) -> bytes:
    import numpy as np
    from PIL import Image
    from torchvision import transforms

    model, torch = _bria_model()

    im = Image.open(BytesIO(src)).convert("RGB")
    w, h = im.size

    transform = transforms.Compose(
        [
            transforms.Resize((1024, 1024)),
            transforms.ToTensor(),
            transforms.Normalize([0.5, 0.5, 0.5], [1.0, 1.0, 1.0]),
        ]
    )
    x = transform(im).unsqueeze(0)

    with torch.no_grad():
        pred = model(x)[-1].sigmoid().cpu()[0, 0]

    pred_np = (pred.numpy() * 255.0).clip(0, 255).astype(np.uint8)
    mask = Image.fromarray(pred_np, mode="L").resize((w, h), Image.LANCZOS)

    out = im.convert("RGBA")
    out.putalpha(mask)

    buf = BytesIO()
    out.save(buf, format="PNG")
    return buf.getvalue()


@app.local_entrypoint()
def main(
    input_dir: str = "./scripts/in_images",
    output_dir: str = "./scripts/out_images",
    pad: int = 10,
    method: str = "auto",
):
    """
    Local entrypoint: reads local files, processes remotely on Modal,
    then writes output PNGs to output_dir preserving subfolders.
    """
    input_root = Path(input_dir).resolve()
    output_root = Path(output_dir).resolve()
    if not input_root.is_dir():
        raise RuntimeError(f"Input directory does not exist: {input_root}")
    output_root.mkdir(parents=True, exist_ok=True)

    exts = {".png", ".jpg", ".jpeg", ".webp", ".bmp", ".tif", ".tiff"}

    rel_paths: list[str] = []
    for root, _, files in os.walk(input_root):
        for fn in files:
            if Path(fn).suffix.lower() in exts:
                abs_path = os.path.join(root, fn)
                rel_paths.append(os.path.relpath(abs_path, input_root))

    if not rel_paths:
        print(f"No images found under {input_dir}")
        return

    # Fan out in parallel and write files locally as results return.
    remove_bg_api_key = os.environ.get("REMOVE_BG_API_KEY", "")
    jobs = (
        (rel_path, (input_root / rel_path).read_bytes())
        for rel_path in rel_paths
    )
    for rel_png, png_bytes in process_one.starmap(
        jobs,
        kwargs={
            "pad": pad,
            "method": method,
            "remove_bg_api_key": remove_bg_api_key,
        },
    ):
        out_path = output_root / rel_png
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_bytes(png_bytes)
        print("Wrote:", out_path)

    print(f"Method used: {method} (auto picks removebg when API key is set)")
    print(f"Done. Output written to local folder: {output_dir}")
