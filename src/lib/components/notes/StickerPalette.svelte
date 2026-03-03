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

<aside class="palette">
    <p class="palette-title">
        <span class="palette-title-text">add stickers!</span>
        <button
            type="button"
            class="reload-button"
            class:spinning={reloadSpinning}
            on:click={() => {
                spinReloadIcon();
                dispatch("reload");
            }}
            on:animationend={() => (reloadSpinning = false)}
            title="Reload"
        >
            <span class="reload-tilt">
                <span class="reload-spin">
                    <img src="{base}/images/reload.png" alt="Reload" class="reload-icon" />
                </span>
            </span>
        </button>
    </p>
    <div
        class="palette-grid"
        class:palette-out={phase === 'out'}
        class:palette-in={phase === 'in'}
        on:animationend
    >
        {#each stickers as src}
            <button
                type="button"
                class="palette-button"
                on:mousedown={(e) => handleMouseDown(e, src)}
            >
                <img
                    {src}
                    alt="sticker option"
                    class="palette-image"
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
    .palette {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .palette-title {
        margin: 0 0 0.4rem 0;
        font-family: "KyleHandwriting", "Comic Sans MS", "Comic Sans", ui-serif, system-ui;
        font-size: 1.8rem;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.35rem;
        width: 100%;
    }

    .palette-title-text {
        flex: 1;
        text-align: left;
    }

    .reload-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        border: none;
        background: transparent;
        cursor: pointer;
        border-radius: 4px;
        -webkit-tap-highlight-color: transparent;
    }

    .reload-tilt {
        display: inline-block;
        transform-origin: 50% 50%;
        transition: transform 160ms ease;
    }

    .reload-spin {
        display: inline-block;
        transform-origin: 50% 50%;
    }

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

    .reload-icon {
        width: 1.25rem;
        height: 1.25rem;
        display: block;
    }

    @media (prefers-reduced-motion: reduce) {
        .reload-tilt {
            transition: none;
        }
        .reload-button.spinning .reload-spin {
            animation: none;
        }
    }

    .palette-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(56px, 1fr));
        gap: 0.5rem;
        align-items: center;
    }

    .palette-grid.palette-out {
        animation: paletteFadeDown 0.26s ease both;
    }

    .palette-grid.palette-in {
        animation: paletteFadeUp 0.26s ease both;
    }

    .palette-button {
        border-radius: 0;
        border: none;
        padding: 0;
        background: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .palette-image {
        width: 100%;
        height: auto;
        max-width: 100%;
        display: block;
        transition: filter 130ms ease, transform 130ms ease;
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
