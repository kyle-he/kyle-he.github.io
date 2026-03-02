<script>
    import Metadata from "$lib/components/Metadata.svelte";
    import PolaroidCard from "$lib/components/notes/PolaroidCard.svelte";
    import StickerPalette from "$lib/components/notes/StickerPalette.svelte";
    import { onMount, onDestroy } from "svelte";

    /**
     * @typedef {Object} StickerInstance
     * @property {number} id
     * @property {string} src
     * @property {number} x
     * @property {number} y
     * @property {number} width
     * @property {number} height
     * @property {number} rotation
     */

    /**
     * @typedef {Object} Note
     * @property {number} id
     * @property {string} createdAt
     * @property {string} text
     * @property {StickerInstance[]} stickers
     * @property {number} deckRotation
     * @property {number} deckOffsetX
     * @property {number} deckOffsetY
     */

    const stickerPalette = [
        "/images/stickers/cat_doodle.png",
        "/images/stickers/happy_heart.png",
        "/images/stickers/sunglasses.png",
        "/images/stickers/drunk_dog.png"
    ];

    let nextStickerId = 1;
    let nextNoteId = 1;

    const todayString = new Date().toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    });

    const MAX_SIZE_PCT = 80;

    function clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }

    function rotatePoint(px, py, angleDeg) {
        const rad = (angleDeg * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        return { x: px * cos - py * sin, y: px * sin + py * cos };
    }

    function getAnchorLocal(handle, halfW, halfH) {
        switch (handle) {
            case "br": return [-halfW, -halfH];
            case "bl": return [halfW, -halfH];
            case "tr": return [-halfW, halfH];
            case "tl": return [halfW, halfH];
            case "r":  return [-halfW, 0];
            case "l":  return [halfW, 0];
            case "b":  return [0, -halfH];
            case "t":  return [0, halfH];
            default:   return [0, 0];
        }
    }

    function stickerStyle(s) {
        const x = s.width < 0 ? s.x + s.width : s.x;
        const y = s.height < 0 ? s.y + s.height : s.y;
        return `left:${x}%;top:${y}%;width:${Math.abs(s.width)}%;height:${Math.abs(s.height)}%;transform:rotate(${s.rotation||0}deg)`;
    }

    function stickerImgScale(s) {
        const sx = s.width < 0 ? -1 : 1;
        const sy = s.height < 0 ? -1 : 1;
        return sx === 1 && sy === 1 ? '' : `transform:scale(${sx},${sy})`;
    }

    function randomBackgroundUrl() {
        const seed =
            Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
        return `https://picsum.photos/600/600?random=${seed}`;
    }

    function createEmptyNote() {
        return {
            id: 0,
            createdAt: todayString,
            text: "",
            stickers: [],
            deckRotation: 0,
            deckOffsetX: 0,
            deckOffsetY: 0,
            backgroundUrl: randomBackgroundUrl()
        };
    }

    /** @type {Note} */
    let currentNote = createEmptyNote();
    let lastValidText = currentNote.text;

    /** @type {Note[]} */
    let publishedNotes = [];

    /** @type {number | null} */
    let selectedStickerId = null;
    /** @type {number | null} */
    let hoveredStickerId = null;

    let frameEl;
    let isDragging = false;
    let dragStickerId = null;
    let dragStartClientX = 0;
    let dragStartClientY = 0;
    let dragStartStickerX = 0;
    let dragStartStickerY = 0;

    let isResizing = false;
    let resizeStickerId = null;
    /** @type {"tl" | "tr" | "bl" | "br" | "l" | "r" | "t" | "b" | null} */
    let resizeHandle = null;
    let resizeStartX = 0;
    let resizeStartY = 0;
    let resizeStartW = 0;
    let resizeStartH = 0;
    let resizeStartClientX = 0;
    let resizeStartClientY = 0;
    let resizeFrameRect;
    let resizeStartRotation = 0;

    let isRotating = false;
    let rotateStickerId = null;
    let rotateStartAngle = 0;
    let rotateStickerStartRotation = 0;
    let rotateCenterClientX = 0;
    let rotateCenterClientY = 0;

    let paletteDrag = null;
    let canvasHeight = 0;
    let resizeObserver;
    $: stickerSpawnHeight = canvasHeight * 0.24;

    const HANDLE_BASE_ANGLE = { t: 90, b: 90, l: 0, r: 0, tl: 45, br: 45, tr: 135, bl: 135 };
    const cursorCache = new Map();

    function makeSvgCursor(innerSvg, hotX = 16, hotY = 16) {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">${innerSvg}</svg>`;
        return `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${hotX} ${hotY}, pointer`;
    }

    function getResizeCursor(handle, rotation) {
        const angle = Math.round(((HANDLE_BASE_ANGLE[handle] || 0) + (rotation || 0)) % 360 + 360) % 360;
        const key = `r${angle}`;
        if (!cursorCache.has(key)) {
            const d = "M8,16 L24,16 M8,16 L12,12 M8,16 L12,20 M24,16 L20,12 M24,16 L20,20";
            const inner = `<g transform="rotate(${angle} 16 16)" fill="none" stroke-linecap="round" stroke-linejoin="round">` +
                `<path d="${d}" stroke="white" stroke-width="4"/><path d="${d}" stroke="#222" stroke-width="1.5"/></g>`;
            cursorCache.set(key, makeSvgCursor(inner));
        }
        return cursorCache.get(key);
    }

    function getRotateCursor(rotation) {
        const angle = Math.round(((rotation || 0) % 360 + 360) % 360);
        const key = `rot${angle}`;
        if (!cursorCache.has(key)) {
            const d = "M10,17 A7,7 0 0,1 22,17 M13.1,14.5 L10,17 L10.8,13.1 M18.9,14.5 L22,17 L21.2,13.1";
            const inner = `<g transform="rotate(${angle} 16 16)" fill="none" stroke-linecap="round" stroke-linejoin="round">` +
                `<path d="${d}" stroke="white" stroke-width="4"/><path d="${d}" stroke="#222" stroke-width="1.5"/></g>`;
            cursorCache.set(key, makeSvgCursor(inner));
        }
        return cursorCache.get(key);
    }

    function setBodyCursor(cursor) {
        document.body.style.setProperty('--sticker-cursor', cursor);
        if (!document.body.classList.contains('cursor-lock')) {
            document.body.classList.add('cursor-lock');
        }
    }

    function clearBodyCursor() {
        document.body.classList.remove('cursor-lock');
        document.body.style.removeProperty('--sticker-cursor');
    }

    function addSticker(src) {
        if (!frameEl) return;
        const img = new Image();
        img.onload = () => {
            const rect = frameEl.getBoundingClientRect();
            const targetH = 24;
            const aspect = img.naturalWidth / img.naturalHeight;
            const targetW = targetH * aspect * (rect.height / rect.width);
            const newSticker = {
                id: nextStickerId++,
                src,
                x: 50 - targetW / 2,
                y: 50 - targetH / 2,
                width: targetW,
                height: targetH,
                rotation: 0
            };
            currentNote = {
                ...currentNote,
                stickers: [...currentNote.stickers, newSticker]
            };
            selectedStickerId = newSticker.id;
        };
        img.src = src;
    }

    function handlePaletteDragStart(event) {
        const { src, clientX, clientY, imgWidth, imgHeight, offsetX, offsetY } = event.detail;
        const img = new Image();
        img.src = src;
        const nw = img.complete ? img.naturalWidth : 100;
        const nh = img.complete ? img.naturalHeight : 100;
        paletteDrag = { src, x: clientX, y: clientY, startX: clientX, startY: clientY, naturalWidth: nw, naturalHeight: nh, imgWidth, imgHeight, offsetX, offsetY };
    }

    function findStickerIndex(id) {
        return currentNote.stickers.findIndex((s) => s.id === id);
    }

    function updateSticker(index, patch) {
        const stickersCopy = currentNote.stickers.slice();
        stickersCopy[index] = { ...stickersCopy[index], ...patch };
        currentNote = { ...currentNote, stickers: stickersCopy };
    }

    function handleStickerMouseDown(event, id) {
        event.stopPropagation();
        if (!frameEl) return;
        const index = findStickerIndex(id);
        if (index === -1) return;

        selectedStickerId = id;
        isResizing = false;
        resizeStickerId = null;
        isRotating = false;
        rotateStickerId = null;
        isDragging = true;
        dragStickerId = id;
        dragStartClientX = event.clientX;
        dragStartClientY = event.clientY;
        dragStartStickerX = currentNote.stickers[index].x;
        dragStartStickerY = currentNote.stickers[index].y;
        setBodyCursor('grabbing');
    }

    function handleFrameMouseDown() {
        selectedStickerId = null;
    }

    function handleWindowMouseMove(event) {
        if (paletteDrag) {
            paletteDrag = { ...paletteDrag, x: event.clientX, y: event.clientY };
            return;
        }

        if (!frameEl) return;

        if (isRotating && rotateStickerId != null) {
            const index = findStickerIndex(rotateStickerId);
            if (index === -1) return;
            const dx = event.clientX - rotateCenterClientX;
            const dy = event.clientY - rotateCenterClientY;
            const currentAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
            let newRotation = rotateStickerStartRotation + (currentAngle - rotateStartAngle);
            if (event.shiftKey) newRotation = Math.round(newRotation / 15) * 15;
            updateSticker(index, { rotation: newRotation });
            setBodyCursor(getRotateCursor(newRotation));
            return;
        }

        if (isDragging && dragStickerId != null) {
            const rect = frameEl.getBoundingClientRect();
            const deltaXPct = ((event.clientX - dragStartClientX) / rect.width) * 100;
            const deltaYPct = ((event.clientY - dragStartClientY) / rect.height) * 100;
            const index = findStickerIndex(dragStickerId);
            if (index === -1) return;
            const s = currentNote.stickers[index];
            updateSticker(index, {
                x: clamp(dragStartStickerX + deltaXPct, -0.5 * s.width, 100 - 0.5 * s.width),
                y: clamp(dragStartStickerY + deltaYPct, -0.5 * s.height, 100 - 0.5 * s.height)
            });
            return;
        }

        if (isResizing && resizeStickerId != null && resizeHandle && resizeFrameRect) {
            const index = findStickerIndex(resizeStickerId);
            if (index === -1) return;

            const fw = resizeFrameRect.width;
            const fh = resizeFrameRect.height;
            const rot = resizeStartRotation;
            const local = rotatePoint(
                event.clientX - resizeStartClientX,
                event.clientY - resizeStartClientY,
                -rot
            );

            const spw = (resizeStartW / 100) * fw;
            const sph = (resizeStartH / 100) * fh;
            const spx = (resizeStartX / 100) * fw;
            const spy = (resizeStartY / 100) * fh;

            const maxW = (MAX_SIZE_PCT / 100) * fw;
            const maxH = (MAX_SIZE_PCT / 100) * fh;
            const signW = Math.sign(spw) || 1;
            const signH = Math.sign(sph) || 1;

            let npw = spw, nph = sph;
            const h = resizeHandle;
            if (h === "br" || h === "tr" || h === "r") npw = clamp(spw + local.x * signW, -maxW, maxW);
            if (h === "bl" || h === "tl" || h === "l") npw = clamp(spw - local.x * signW, -maxW, maxW);
            if (h === "br" || h === "bl" || h === "b") nph = clamp(sph + local.y * signH, -maxH, maxH);
            if (h === "tl" || h === "tr" || h === "t") nph = clamp(sph - local.y * signH, -maxH, maxH);

            const scx = spx + spw / 2;
            const scy = spy + sph / 2;
            const [aLx, aLy] = getAnchorLocal(h, Math.abs(spw) / 2, Math.abs(sph) / 2);
            const aW = rotatePoint(aLx, aLy, rot);
            const [naLx, naLy] = getAnchorLocal(h, Math.abs(npw) / 2, Math.abs(nph) / 2);
            const naW = rotatePoint(naLx, naLy, rot);

            const ncx = scx + aW.x - naW.x;
            const ncy = scy + aW.y - naW.y;

            updateSticker(index, {
                x: ((ncx - npw / 2) / fw) * 100,
                y: ((ncy - nph / 2) / fh) * 100,
                width: (npw / fw) * 100,
                height: (nph / fh) * 100
            });
        }
    }

    function handleWindowMouseUp(event) {
        if (paletteDrag) {
            const moved = Math.hypot(paletteDrag.x - paletteDrag.startX, paletteDrag.y - paletteDrag.startY) > 5;
            if (!moved) {
                addSticker(paletteDrag.src);
                paletteDrag = null;
                return;
            }
            const rect = frameEl?.getBoundingClientRect();
            if (rect && paletteDrag.x >= rect.left && paletteDrag.x <= rect.right && paletteDrag.y >= rect.top && paletteDrag.y <= rect.bottom) {
                const aspect = paletteDrag.naturalWidth / paletteDrag.naturalHeight;
                const targetH = 24;
                const targetW = targetH * aspect * (rect.height / rect.width);
                const grabFracX = paletteDrag.offsetX / paletteDrag.imgWidth;
                const grabFracY = paletteDrag.offsetY / paletteDrag.imgHeight;
                const xPct = ((paletteDrag.x - rect.left) / rect.width) * 100 - targetW * grabFracX;
                const yPct = ((paletteDrag.y - rect.top) / rect.height) * 100 - targetH * grabFracY;
                const newSticker = {
                    id: nextStickerId++,
                    src: paletteDrag.src,
                    x: clamp(xPct, -0.5 * targetW, 100 - 0.5 * targetW),
                    y: clamp(yPct, -0.5 * targetH, 100 - 0.5 * targetH),
                    width: targetW,
                    height: targetH,
                    rotation: 0
                };
                currentNote = { ...currentNote, stickers: [...currentNote.stickers, newSticker] };
                selectedStickerId = newSticker.id;
            }
            paletteDrag = null;
            return;
        }
        if (!isDragging && !isResizing && !isRotating) return;
        isDragging = false;
        dragStickerId = null;
        isResizing = false;
        resizeStickerId = null;
        resizeHandle = null;
        resizeFrameRect = undefined;
        isRotating = false;
        rotateStickerId = null;
        clearBodyCursor();
    }

    function handleResizeMouseDown(event, id, handle) {
        event.stopPropagation();
        event.preventDefault();
        if (!frameEl) return;
        const index = findStickerIndex(id);
        if (index === -1) return;

        selectedStickerId = id;
        isDragging = false;
        dragStickerId = null;

        const sticker = currentNote.stickers[index];
        resizeFrameRect = frameEl.getBoundingClientRect();
        resizeStartX = sticker.x;
        resizeStartY = sticker.y;
        resizeStartW = sticker.width;
        resizeStartH = sticker.height;
        resizeStartClientX = event.clientX;
        resizeStartClientY = event.clientY;
        resizeStartRotation = sticker.rotation || 0;
        resizeHandle = handle;
        isResizing = true;
        resizeStickerId = id;
        setBodyCursor(getResizeCursor(handle, sticker.rotation || 0));
    }

    function handleRotateMouseDown(event, id) {
        event.stopPropagation();
        event.preventDefault();
        if (!frameEl) return;
        const index = findStickerIndex(id);
        if (index === -1) return;

        selectedStickerId = id;
        isDragging = false;
        isResizing = false;

        const sticker = currentNote.stickers[index];
        const rect = frameEl.getBoundingClientRect();
        rotateCenterClientX = rect.left + ((sticker.x + sticker.width / 2) / 100) * rect.width;
        rotateCenterClientY = rect.top + ((sticker.y + sticker.height / 2) / 100) * rect.height;
        const dx = event.clientX - rotateCenterClientX;
        const dy = event.clientY - rotateCenterClientY;
        rotateStartAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
        rotateStickerStartRotation = sticker.rotation || 0;
        isRotating = true;
        rotateStickerId = id;
        setBodyCursor(getRotateCursor(sticker.rotation || 0));
    }

    function deleteSticker(id) {
        currentNote = {
            ...currentNote,
            stickers: currentNote.stickers.filter((s) => s.id !== id)
        };
        if (selectedStickerId === id) selectedStickerId = null;
    }

    function handleKeydown(event) {
        if (selectedStickerId == null) return;
        if (event.key === "Backspace" || event.key === "Delete") {
            event.preventDefault();
            deleteSticker(selectedStickerId);
        }
    }

    function handleTextInput(event) {
        const el = event.target;
        const value = el.value;
        currentNote = { ...currentNote, text: value };

        const style = getComputedStyle(el);
        const lineHeight = parseFloat(style.lineHeight || "0");
        const maxLines = 3;
        const lines = lineHeight ? Math.round(el.scrollHeight / lineHeight) : 1;

        if (lines > maxLines) {
            currentNote = { ...currentNote, text: lastValidText };
            el.value = lastValidText;
            return;
        }

        lastValidText = value;
    }

    function canPublish() {
        return currentNote.text.trim().length > 0 || currentNote.stickers.length > 0;
    }

    function publishNote() {
        if (!canPublish()) return;
        const noteToAdd = {
            ...currentNote,
            id: nextNoteId++,
            createdAt: todayString,
            stickers: currentNote.stickers.map((s) => ({ ...s })),
            deckRotation: Math.random() * 30 - 15,
            deckOffsetX: Math.random() * 40 - 20,
            deckOffsetY: Math.random() * 20 - 10
        };
        publishedNotes = [noteToAdd, ...publishedNotes];
        currentNote = createEmptyNote();
        selectedStickerId = null;
    }

    const RESIZE_HANDLES = ["tl", "tr", "bl", "br", "l", "r", "t", "b"];
    const ROTATE_CORNERS = ["tl", "tr", "bl", "br"];
    const ROTATE_CORNER_BASE = { tl: 135, tr: 225, bl: 45, br: 315 };

    onMount(() => {
        if (typeof window === "undefined") return;
        window.addEventListener("mousemove", handleWindowMouseMove);
        window.addEventListener("mouseup", handleWindowMouseUp);
        window.addEventListener("keydown", handleKeydown);
        if (frameEl) {
            canvasHeight = frameEl.clientHeight;
            resizeObserver = new ResizeObserver(() => { canvasHeight = frameEl.clientHeight; });
            resizeObserver.observe(frameEl);
        }
    });

    onDestroy(() => {
        if (typeof window === "undefined") return;
        window.removeEventListener("mousemove", handleWindowMouseMove);
        window.removeEventListener("mouseup", handleWindowMouseUp);
        window.removeEventListener("keydown", handleKeydown);
        resizeObserver?.disconnect();
    });
</script>

<Metadata
    meta={{
        title: "Kyle He - Notes",
        description: "notes",
    }}
/>

<main class="mt-8 space-y-10">
    <section class="note-layout">
        <div role="presentation" on:mousedown={handleFrameMouseDown}>
            <PolaroidCard
                date={currentNote.createdAt}
                backgroundUrl={currentNote.backgroundUrl}
                bind:innerEl={frameEl}
                shadow
            >
                <svelte:fragment slot="canvas">
                    {#each currentNote.stickers as sticker}
                        <div
                            class="sticker-wrapper {sticker.id === selectedStickerId ? 'selected' : sticker.id === hoveredStickerId ? 'hovered' : ''} {sticker.id === selectedStickerId && (isResizing || isRotating) ? 'interacting' : ''}"
                            style={stickerStyle(sticker)}
                            role="presentation"
                            on:mousedown={(event) => handleStickerMouseDown(event, sticker.id)}
                            on:mouseenter={() => hoveredStickerId = sticker.id}
                            on:mouseleave={() => { if (hoveredStickerId === sticker.id) hoveredStickerId = null; }}
                        >
                            <img
                                src={sticker.src}
                                alt="sticker"
                                class="sticker-img"
                                style={stickerImgScale(sticker)}
                                draggable="false"
                                aria-hidden="true"
                            />

                            {#if sticker.id === selectedStickerId}
                                {#each ROTATE_CORNERS as corner}
                                    <div
                                        class="sticker-rotate-corner sticker-rotate-corner-{corner}"
                                        style="cursor: {getRotateCursor((sticker.rotation || 0) + ROTATE_CORNER_BASE[corner])}"
                                        role="presentation"
                                        on:mousedown={(event) => handleRotateMouseDown(event, sticker.id)}
                                    ></div>
                                {/each}

                                {#each RESIZE_HANDLES as handle}
                                    <div
                                        class="sticker-handle sticker-handle-{handle}"
                                        style="cursor: {getResizeCursor(handle, sticker.rotation)}"
                                        role="presentation"
                                        on:mousedown={(event) => handleResizeMouseDown(event, sticker.id, handle)}
                                    ></div>
                                {/each}

                                <div class="sticker-rotate-line"></div>
                                <div
                                    class="sticker-rotate-handle"
                                    style="cursor: {getRotateCursor(sticker.rotation)}"
                                    role="presentation"
                                    on:mousedown={(event) => handleRotateMouseDown(event, sticker.id)}
                                ></div>
                            {/if}
                        </div>
                    {/each}
                </svelte:fragment>

                <svelte:fragment slot="footer">
                    <textarea
                        class="note-text font-serif"
                        rows="3"
                        placeholder="leave a note"
                        value={currentNote.text}
                        on:input={handleTextInput}
                    ></textarea>
                </svelte:fragment>
            </PolaroidCard>
        </div>

        <StickerPalette stickers={stickerPalette} maxHeight={stickerSpawnHeight} draggingSrc={paletteDrag && Math.hypot(paletteDrag.x - paletteDrag.startX, paletteDrag.y - paletteDrag.startY) > 5 ? paletteDrag.src : null} on:dragstart={handlePaletteDragStart} />
    </section>

    <div class="publish-row">
        <button
            type="button"
            class="publish-button font-serif"
            on:click={publishNote}
            disabled={!canPublish()}
        >
            publish
        </button>
    </div>

    <section class="deck">
        {#if publishedNotes.length === 0}
            <p class="font-serif text-sm text-neutral-500">no notes yet – make one!</p>
        {:else}
            <div class="deck-grid">
                {#each publishedNotes as note (note.id)}
                    <article
                        class="deck-card"
                        style={`transform: translate(${note.deckOffsetX}px, ${note.deckOffsetY}px) rotate(${note.deckRotation}deg);`}
                    >
                        <PolaroidCard date={note.createdAt} backgroundUrl={note.backgroundUrl} mini>
                            <svelte:fragment slot="canvas">
                                {#each note.stickers as sticker}
                                    <div
                                        class="deck-sticker"
                                        style={stickerStyle(sticker)}
                                    >
                                        <img
                                            src={sticker.src}
                                            alt="sticker"
                                            class="deck-sticker-img"
                                            style={stickerImgScale(sticker)}
                                            draggable="false"
                                        />
                                    </div>
                                {/each}
                            </svelte:fragment>

                            <svelte:fragment slot="footer">
                                {#if note.text.trim().length}
                                    <p class="deck-text">{note.text}</p>
                                {/if}
                            </svelte:fragment>
                        </PolaroidCard>
                    </article>
                {/each}
            </div>
        {/if}
    </section>
</main>

{#if paletteDrag && Math.hypot(paletteDrag.x - paletteDrag.startX, paletteDrag.y - paletteDrag.startY) > 5}
    <img
        src={paletteDrag.src}
        alt=""
        class="palette-drag-ghost"
        style="left: {paletteDrag.x - paletteDrag.offsetX}px; top: {paletteDrag.y - paletteDrag.offsetY}px; width: {paletteDrag.imgWidth}px; height: {paletteDrag.imgHeight}px;"
        draggable="false"
    />
{/if}

<style>
    .note-layout {
        display: grid;
        grid-template-columns: minmax(0, 1.6fr) minmax(0, 0.8fr);
        gap: 1.5rem;
        align-items: flex-start;
    }

    @media (max-width: 768px) {
        .note-layout {
            grid-template-columns: minmax(0, 1fr);
        }
    }

    .note-text {
        width: 100%;
        resize: none;
        border: none;
        outline: none;
        background: transparent;
        font-family: "KyleHandwriting", ui-serif, system-ui;
        font-size: 4.4cqi;
        line-height: 1.1;
        overflow: hidden;
    }

    .note-text::placeholder {
        color: #b0aca1;
    }

    /* --- sticker interaction layer --- */

    .sticker-wrapper {
        position: absolute;
        cursor: grab;
        user-select: none;
        transition: box-shadow 120ms ease;
        transform-origin: center;
        z-index: 0;
    }

    .sticker-wrapper.hovered,
    .sticker-wrapper.selected {
        box-shadow: 0 0 0 1px #000;
    }

    .sticker-wrapper.interacting {
        box-shadow: none;
    }

    .sticker-wrapper.interacting .sticker-handle,
    .sticker-wrapper.interacting .sticker-rotate-line,
    .sticker-wrapper.interacting .sticker-rotate-handle {
        visibility: hidden;
    }

    .sticker-img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: fill;
        pointer-events: none;
    }

    .sticker-handle {
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 999px;
        background: transparent;
        border: none;
    }

    .sticker-handle::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 7px;
        height: 7px;
        border-radius: 2px;
        background: #fff;
        border: 1px solid #000;
        transform: translate(-50%, -50%);
    }

    .sticker-handle-tl { top: 0; left: 0; transform: translate(-50%, -50%); }
    .sticker-handle-tr { top: 0; right: 0; transform: translate(50%, -50%); }
    .sticker-handle-bl { bottom: 0; left: 0; transform: translate(-50%, 50%); }
    .sticker-handle-br { bottom: 0; right: 0; transform: translate(50%, 50%); }

    .sticker-handle-l { top: 50%; left: 0; width: 26px; height: 14px; transform: translate(-50%, -50%); }
    .sticker-handle-r { top: 50%; right: 0; width: 26px; height: 14px; transform: translate(50%, -50%); }
    .sticker-handle-t { top: 0; left: 50%; width: 26px; height: 14px; transform: translate(-50%, -50%); }
    .sticker-handle-b { bottom: 0; left: 50%; width: 26px; height: 14px; transform: translate(-50%, 50%); }

    .sticker-rotate-line {
        position: absolute;
        left: 50%;
        bottom: 100%;
        width: 1px;
        height: 16px;
        background: #000;
        transform: translateX(-50%);
        pointer-events: none;
    }

    .sticker-rotate-handle {
        position: absolute;
        left: 50%;
        bottom: 100%;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
        border: 1px solid #000;
        transform: translate(-50%, -16px);
    }

    .sticker-rotate-handle:hover {
        background: #e8e4db;
    }

    .sticker-rotate-corner {
        position: absolute;
        width: 28px;
        height: 28px;
        background: transparent;
    }
    .sticker-rotate-corner-tl { top: -20px; left: -20px; border-bottom-right-radius: 100%; }
    .sticker-rotate-corner-tr { top: -20px; right: -20px; border-bottom-left-radius: 100%; }
    .sticker-rotate-corner-bl { bottom: -20px; left: -20px; border-top-right-radius: 100%; }
    .sticker-rotate-corner-br { bottom: -20px; right: -20px; border-top-left-radius: 100%; }

    /* --- publish button --- */

    .publish-row {
        display: flex;
        justify-content: center;
    }

    .publish-button {
        min-width: 160px;
        padding: 0.6rem 1.4rem;
        border-radius: 999px;
        border: 2px solid #222;
        background: #fdf4dc;
        font-size: 0.95rem;
        text-transform: lowercase;
        box-shadow: 3px 3px 0 #222;
        cursor: pointer;
        transition: transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease, opacity 120ms ease;
    }

    .publish-button:hover:enabled {
        transform: translateY(-1px);
        box-shadow: 4px 4px 0 #222;
        background-color: #ffeec0;
    }

    .publish-button:disabled {
        opacity: 0.5;
        cursor: default;
        box-shadow: 1px 1px 0 #222;
    }

    /* --- deck --- */

    .deck {
        padding-top: 0.5rem;
        border-top: 1px dashed #d5d0c4;
    }

    .deck-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 0.75rem;
    }

    .deck-card {
        width: 150px;
        aspect-ratio: 657 / 794;
        cursor: pointer;
        transition: transform 160ms ease, box-shadow 160ms ease, z-index 160ms ease;
    }

    .deck-card:hover {
        transform: translate(0, 0) rotate(0deg) scale(1.05);
        box-shadow: 4px 4px 0 #222;
        z-index: 10;
    }

    .deck-sticker {
        position: absolute;
        user-select: none;
        transform-origin: center;
    }

    .deck-sticker-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .deck-text {
        font-family: "KyleHandwriting", ui-serif, system-ui;
        font-size: 4.4cqi;
        line-height: 1.1;
        max-height: 8.3cqi;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        line-clamp: 3;
    }

    :global(.palette-drag-ghost) {
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        filter: drop-shadow(0 6px 6px rgba(0, 0, 0, 0.5));
    }

    :global(body.cursor-lock) {
        cursor: var(--sticker-cursor, default) !important;
    }
    :global(body.cursor-lock *) {
        cursor: inherit !important;
    }
</style>
