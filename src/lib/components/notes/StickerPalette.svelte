<script>
    import { createEventDispatcher } from "svelte";

    export let stickers = [];
    export let draggingSrc = null;
    export let maxHeight = 0;

    const dispatch = createEventDispatcher();

    function handleMouseDown(event, src) {
        event.preventDefault();
        const img = event.currentTarget.querySelector("img");
        const rect = img.getBoundingClientRect();
        dispatch("dragstart", { src, clientX: event.clientX, clientY: event.clientY, imgWidth: rect.width, imgHeight: rect.height, offsetX: event.clientX - rect.left, offsetY: event.clientY - rect.top });
    }
</script>

<aside class="palette">
    <p class="palette-title">add stickers!</p>
    <div class="palette-grid">
        {#each stickers as src}
            <button
                type="button"
                class="palette-button"
                on:mousedown={(e) => handleMouseDown(e, src)}
            >
                <img {src} alt="sticker option" class="palette-image" class:dragging={draggingSrc === src} style={maxHeight ? `height: ${maxHeight}px; width: auto; max-width: none` : ''} loading="lazy" draggable="false" />
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
        font-family: "KyleHandwriting", ui-serif, system-ui;
        font-size: 2rem;
        color: #000;
        text-align: center;
    }

    .palette-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
    }

    .palette-button {
        border-radius: 0;
        border: none;
        padding: 0;
        background: transparent;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .palette-image {
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
</style>
