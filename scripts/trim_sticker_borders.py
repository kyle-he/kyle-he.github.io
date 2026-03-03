#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path
from PIL import Image


STICKER_DIR = Path("static/images/stickers")
PADDING_PX = 10


def trim_and_pad_png(path: Path, padding: int) -> bool:
    with Image.open(path) as img:
        rgba = img.convert("RGBA")
        alpha = rgba.getchannel("A")
        bbox = alpha.getbbox()

        if bbox is None:
            return False

        cropped = rgba.crop(bbox)
        out = Image.new("RGBA", (cropped.width + padding * 2, cropped.height + padding * 2), (0, 0, 0, 0))
        out.paste(cropped, (padding, padding))
        out.save(path, optimize=True)
        return True


def main() -> None:
    if not STICKER_DIR.exists():
        raise SystemExit(f"Directory not found: {STICKER_DIR}")

    pngs = sorted(STICKER_DIR.glob("*.png"))
    if not pngs:
        print(f"No PNG files found in {STICKER_DIR}")
        return

    changed = 0
    for png in pngs:
        if trim_and_pad_png(png, PADDING_PX):
            changed += 1
            print(f"Updated: {png}")
        else:
            print(f"Skipped (fully transparent): {png}")

    print(f"Done. Processed {len(pngs)} file(s), updated {changed}.")


if __name__ == "__main__":
    main()
