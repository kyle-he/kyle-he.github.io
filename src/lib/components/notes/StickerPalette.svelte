<script>
    import { createEventDispatcher } from "svelte";
    import { base } from "$app/paths";

    export let stickers = [];
    export let draggingSrc = null;
    export let maxHeight = 0;
    /** @type {null | 'out' | 'in'} */
    export let phase = null;

    const dispatch = createEventDispatcher();

    let reloadSpinning = false;

    function handleMouseDown(event, src) {
        event.preventDefault();
        const img = event.currentTarget.querySelector("img");
        const rect = img.getBoundingClientRect();
        dispatch("dragstart", { src, clientX: event.clientX, clientY: event.clientY, imgWidth: rect.width, imgHeight: rect.height, offsetX: event.clientX - rect.left, offsetY: event.clientY - rect.top });
    }

    function spinReloadIcon() {
        reloadSpinning = false;
        requestAnimationFrame(() => {
            reloadSpinning = true;
        });
    }
</script>

<aside class="palette flex flex-col gap-3">
    <p class="palette-title mb-[0.4rem] flex w-full items-center justify-between gap-[0.35rem] text-[1.8rem] text-black [font-family:'KyleHandwriting','Comic_Sans_MS','Comic_Sans',ui-serif,system-ui]">
        <span class="palette-title-text flex-1 text-left">add stickers!</span>
        <button
            type="button"
            class="reload-button inline-flex items-center justify-center rounded border-0 bg-transparent p-[0.2rem] [-webkit-tap-highlight-color:transparent] enabled:cursor-pointer"
            class:spinning={reloadSpinning}
            on:click={() => {
                spinReloadIcon();
                dispatch("reload");
            }}
            on:animationend={() => (reloadSpinning = false)}
            title="Reload"
        >
            <span class="reload-tilt inline-block [transform-origin:50%_50%] transition-transform duration-150 ease-in-out">
                <span class="reload-spin inline-block [transform-origin:50%_50%]">
                    <img src="{base}/images/reload.png" alt="Reload" class="reload-icon block h-5 w-5" />
                </span>
            </span>
        </button>
    </p>
    <div
        class="palette-grid grid grid-cols-[repeat(auto-fit,minmax(56px,1fr))] items-center gap-2"
        class:palette-out={phase === 'out'}
        class:palette-in={phase === 'in'}
        on:animationend
    >
        {#each stickers as src}
                <button
                    type="button"
                    class="palette-button flex w-full items-center justify-center border-0 bg-transparent p-0 [touch-action:none] enabled:cursor-pointer"
                    on:pointerdown={(e) => handleMouseDown(e, src)}
                >
                    <img
                        {src}
                        alt="sticker option"
                        class="palette-image block h-auto w-full max-w-full transition-[filter,transform] duration-[130ms]"
                        class:dragging={draggingSrc === src}
                        style={maxHeight ? `max-height: ${maxHeight}px; height: auto;` : ''}
                        loading="lazy"
                    draggable="false"
                />
            </button>
        {/each}
    </div>
</aside>

<style>
    .reload-button:hover .reload-tilt {
        transform: rotate(-18deg);
    }

    .reload-button:active .reload-tilt {
        transform: rotate(-18deg) scale(0.95);
    }

    .reload-button.spinning .reload-spin {
        animation: reloadSpin 520ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    @keyframes reloadSpin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    @media (prefers-reduced-motion: reduce) {
        .reload-tilt {
            transition: none;
        }
        .reload-button.spinning .reload-spin {
            animation: none;
        }
    }

    .palette-grid.palette-out {
        animation: paletteFadeDown 0.26s ease both;
    }

    .palette-grid.palette-in {
        animation: paletteFadeUp 0.26s ease both;
    }

    .palette-image.dragging {
        transition: none;
        filter: none !important;
        transform: none !important;
    }

    .palette-button:hover .palette-image:not(.dragging) {
        filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));
    }

    .palette-button:active .palette-image:not(.dragging) {
        filter: drop-shadow(0 6px 6px rgba(0, 0, 0, 0.5));
        transform: translateY(1px) scale(0.985);
    }

    @keyframes paletteFadeDown {
        from { opacity: 1; transform: translateY(0); }
        to   { opacity: 0; transform: translateY(10px); }
    }

    @keyframes paletteFadeUp {
        from { opacity: 0; transform: translateY(-10px); }
        to   { opacity: 1; transform: translateY(0); }
    }
</style>
