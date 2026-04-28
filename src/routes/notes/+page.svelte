<script>
    import Metadata from "$lib/components/Metadata.svelte";
    import PolaroidCard from "$lib/components/notes/PolaroidCard.svelte";
    import StickerPalette from "$lib/components/notes/StickerPalette.svelte";
    import { onMount, onDestroy } from "svelte";
    import { afterNavigate } from "$app/navigation";
    import { fetchNotes, saveNote } from "$lib/services/notes.js";
    import { base } from "$app/paths";
    import { createWebHaptics } from "web-haptics/svelte";

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
     * @property {string} id
     * @property {string} createdAt
     * @property {string} text
     * @property {1 | 2 | 3} textSizeLines
     * @property {StickerInstance[]} stickers
     * @property {number} deckRotation
     * @property {number} deckOffsetX
     * @property {number} deckOffsetY
     */

    const stickerPaletteSources = [
        `${base}/images/stickers/banana.png`,
        `${base}/images/stickers/cactus.png`,
        `${base}/images/stickers/cactus2.png`,
        `${base}/images/stickers/cat_doodle.png`,
        `${base}/images/stickers/coquette.png`,
        `${base}/images/stickers/dog.png`,
        `${base}/images/stickers/drunk_dog.png`,
        `${base}/images/stickers/happy_dog.png`,
        `${base}/images/stickers/happy_heart.png`,
        `${base}/images/stickers/mushroom.png`,
        `${base}/images/stickers/musical_note.png`,
        `${base}/images/stickers/snowman.png`,
        `${base}/images/stickers/sunglasses.png`
    ];

    function shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function randomPalette() {
        return shuffleArray(stickerPaletteSources).slice(0, 9);
    }

    let stickerPalette = randomPalette();
    /** @type {null | 'out' | 'in'} */
    let palettePhase = null;
    let pendingPalette = null;

    let nextStickerId = 1;
    let loadingNotes = true;
    let loadingMore = false;
    let hasMore = false;
    let lastDoc = null;
    const PAGE_SIZE = 8;

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
        const seed = Math.floor(Math.random() * 10_000_000);
        return `https://picsum.photos/seed/${seed}/600/600.jpg`;
    }

    function createEmptyNote() {
        return {
            id: 0,
            createdAt: todayString,
            text: "",
            textSizeLines: 1,
            stickers: [],
            deckRotation: 0,
            deckOffsetX: 0,
            deckOffsetY: 0,
            backgroundUrl: randomBackgroundUrl()
        };
    }

    let showBuilder = false;
    /** @type {null | 'out' | 'in'} */
    let publishPhase = null;
    /** @type {Note | null} */
    let pendingPublish = null;

    /** @type {Note} */
    let currentNote = createEmptyNote();
    let lastValidText = currentNote.text;
    let lastValidTextSizeLines = currentNote.textSizeLines;

    /** @type {Note[]} */
    let publishedNotes = [];

    /** @type {number | null} */
    let selectedStickerId = null;
    /** @type {number | null} */
    let hoveredStickerId = null;

    let frameEl;
    let noteTextEl;
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
    let resizePrevWidthPx = 0;
    let resizePrevHeightPx = 0;
    let resizeAccumulatedDeltaPx = 0;
    let resizeHapticStep = 0;

    let isRotating = false;
    let rotateStickerId = null;
    let rotateStartAngle = 0;
    let rotateStickerStartRotation = 0;
    let rotateCenterClientX = 0;
    let rotateCenterClientY = 0;
    let rotateCornerBase = 0;

    let paletteDrag = null;
    let canvasHeight = 0;
    let resizeObserver;
    let isCoarsePointer = false;
    $: stickerSpawnHeight = canvasHeight * 0.24;

    const HANDLE_BASE_ANGLE = { t: 90, b: 90, l: 0, r: 0, tl: 45, br: 45, tr: 135, bl: 135 };
    const RESIZE_HAPTIC_TICK_PX = 18;
    const cursorCache = new Map();
    const { trigger: triggerHaptic, destroy: destroyHaptics, isSupported: isHapticsSupported } = createWebHaptics();

    function fireHaptic(input = "selection", options = undefined) {
        if (!isHapticsSupported || typeof window === "undefined") return;
        triggerHaptic(input, options).catch(() => {});
    }

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

    const ROTATE_CORNER_SVG = "M22.4789 9.45728L25.9935 12.9942L22.4789 16.5283V14.1032C18.126 14.1502 14.6071 17.6737 14.5675 22.0283H17.05L13.513 25.543L9.97889 22.0283H12.5674C12.6071 16.5691 17.0214 12.1503 22.4789 12.1031L22.4789 9.45728Z";

    function getRotateCursor(rotation) {
        const angle = Math.round(((rotation || 0) % 360 + 360) % 360);
        const key = `rot${angle}`;
        if (!cursorCache.has(key)) {
            const rad = -angle * Math.PI / 180;
            const s = Math.sin(rad);
            const c = Math.cos(rad);
            const dx = (c - s).toFixed(2);
            const dy = (s + c).toFixed(2);
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">` +
                `<defs><filter id="shadow" y="-40%" x="-40%" width="180%" height="180%" color-interpolation-filters="sRGB">` +
                `<feDropShadow dx="${dx}" dy="${dy}" stdDeviation="1.2" flood-opacity=".5"/></filter></defs>` +
                `<g transform="rotate(${angle} 16 16)" filter="url(#shadow)">` +
                `<path d="${ROTATE_CORNER_SVG}" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>` +
                `<path d="${ROTATE_CORNER_SVG}" fill="#222"/>` +
                `</g></svg>`;
            cursorCache.set(key, `url("data:image/svg+xml,${encodeURIComponent(svg)}") 16 16, pointer`);
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

    function addSticker(src, paletteImgWidth, paletteImgHeight) {
        if (!frameEl) return;
        const rect = frameEl.getBoundingClientRect();

        if (paletteImgWidth && paletteImgHeight) {
            const targetW = (paletteImgWidth / rect.width) * 100;
            const targetH = (paletteImgHeight / rect.height) * 100;
            const newSticker = {
                id: nextStickerId++,
                src,
                x: 50 - targetW / 2,
                y: 50 - targetH / 2,
                width: targetW,
                height: targetH,
                rotation: 0
            };
            currentNote = { ...currentNote, stickers: [...currentNote.stickers, newSticker] };
            selectedStickerId = newSticker.id;
        } else {
            const img = new Image();
            img.onload = () => {
                const r = frameEl.getBoundingClientRect();
                const targetH = 24;
                const aspect = img.naturalWidth / img.naturalHeight;
                const targetW = targetH * aspect * (r.height / r.width);
                const newSticker = {
                    id: nextStickerId++,
                    src,
                    x: 50 - targetW / 2,
                    y: 50 - targetH / 2,
                    width: targetW,
                    height: targetH,
                    rotation: 0
                };
                currentNote = { ...currentNote, stickers: [...currentNote.stickers, newSticker] };
                selectedStickerId = newSticker.id;
            };
            img.src = src;
        }
    }

    function handlePaletteDragStart(event) {
        // Ensure any in-progress sticker interactions are cleaned up before starting a palette drag
        resetStickerInteractionState();

        const { src, clientX, clientY, imgWidth, imgHeight, offsetX, offsetY } = event.detail;
        const img = new Image();
        img.src = src;
        const nw = img.complete ? img.naturalWidth : 100;
        const nh = img.complete ? img.naturalHeight : 100;
        paletteDrag = {
            src,
            x: clientX,
            y: clientY,
            startX: clientX,
            startY: clientY,
            naturalWidth: nw,
            naturalHeight: nh,
            imgWidth,
            imgHeight,
            offsetX,
            offsetY
        };
    }

    function findStickerIndex(id) {
        return currentNote.stickers.findIndex((s) => s.id === id);
    }

    function updateSticker(index, patch) {
        const stickersCopy = currentNote.stickers.slice();
        stickersCopy[index] = { ...stickersCopy[index], ...patch };
        currentNote = { ...currentNote, stickers: stickersCopy };
    }

    function detectCoarsePointer(event) {
        isCoarsePointer = event.pointerType !== 'mouse';
    }

    function handleStickerPointerDown(event, id) {
        event.stopPropagation();
        detectCoarsePointer(event);
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
        if (!isCoarsePointer) setBodyCursor('grabbing');
        fireHaptic("selection");
    }

    function handleFramePointerDown(event) {
        detectCoarsePointer(event);
        selectedStickerId = null;
    }

    function handleWindowPointerMove(event) {
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
            if (!isCoarsePointer) setBodyCursor(getRotateCursor(newRotation + rotateCornerBase));
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
            // When a dimension crosses zero the anchor must flip to the other side
            const xFlipped = (Math.sign(spw) || 1) !== (Math.sign(npw) || 1);
            const yFlipped = (Math.sign(sph) || 1) !== (Math.sign(nph) || 1);
            const affectsX = h !== 't' && h !== 'b';
            const affectsY = h !== 'l' && h !== 'r';
            const naW = rotatePoint(
                (affectsX && xFlipped) ? -naLx : naLx,
                (affectsY && yFlipped) ? -naLy : naLy,
                rot
            );

            const ncx = scx + aW.x - naW.x;
            const ncy = scy + aW.y - naW.y;

            updateSticker(index, {
                x: ((ncx - npw / 2) / fw) * 100,
                y: ((ncy - nph / 2) / fh) * 100,
                width: (npw / fw) * 100,
                height: (nph / fh) * 100
            });
            if (isCoarsePointer) {
                const currentWidthPx = Math.abs(npw);
                const currentHeightPx = Math.abs(nph);
                const deltaPx =
                    Math.abs(currentWidthPx - resizePrevWidthPx) +
                    Math.abs(currentHeightPx - resizePrevHeightPx);
                resizeAccumulatedDeltaPx += deltaPx;
                resizePrevWidthPx = currentWidthPx;
                resizePrevHeightPx = currentHeightPx;

                const nextStep = Math.floor(resizeAccumulatedDeltaPx / RESIZE_HAPTIC_TICK_PX);
                if (nextStep > resizeHapticStep) {
                    fireHaptic("selection");
                    resizeHapticStep = nextStep;
                }
            }
        }
    }

    function handleWindowPointerUp(event) {
        if (paletteDrag) {
            const moved =
                Math.hypot(
                    paletteDrag.x - paletteDrag.startX,
                    paletteDrag.y - paletteDrag.startY
                ) > 5;

            if (!moved) {
                addSticker(paletteDrag.src, paletteDrag.imgWidth, paletteDrag.imgHeight);
                fireHaptic("light");
            } else {
                const rect = frameEl?.getBoundingClientRect();
                if (
                    rect &&
                    paletteDrag.x >= rect.left &&
                    paletteDrag.x <= rect.right &&
                    paletteDrag.y >= rect.top &&
                    paletteDrag.y <= rect.bottom
                ) {
                    const targetW = (paletteDrag.imgWidth / rect.width) * 100;
                    const targetH = (paletteDrag.imgHeight / rect.height) * 100;
                    const grabFracX =
                        paletteDrag.imgWidth > 0 ? paletteDrag.offsetX / paletteDrag.imgWidth : 0.5;
                    const grabFracY =
                        paletteDrag.imgHeight > 0 ? paletteDrag.offsetY / paletteDrag.imgHeight : 0.5;
                    const xPct =
                        ((paletteDrag.x - rect.left) / rect.width) * 100 - targetW * grabFracX;
                    const yPct =
                        ((paletteDrag.y - rect.top) / rect.height) * 100 - targetH * grabFracY;
                    const newSticker = {
                        id: nextStickerId++,
                        src: paletteDrag.src,
                        x: clamp(xPct, -0.5 * targetW, 100 - 0.5 * targetW),
                        y: clamp(yPct, -0.5 * targetH, 100 - 0.5 * targetH),
                        width: targetW,
                        height: targetH,
                        rotation: 0
                    };
                    currentNote = {
                        ...currentNote,
                        stickers: [...currentNote.stickers, newSticker]
                    };
                    selectedStickerId = newSticker.id;
                    fireHaptic("light");
                }
            }

            paletteDrag = null;
        }

        if (!isDragging && !isResizing && !isRotating) return;
        resetStickerInteractionState();
    }

    function handleResizePointerDown(event, id, handle) {
        event.stopPropagation();
        event.preventDefault();
        detectCoarsePointer(event);
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
        resizePrevWidthPx = Math.abs((sticker.width / 100) * resizeFrameRect.width);
        resizePrevHeightPx = Math.abs((sticker.height / 100) * resizeFrameRect.height);
        resizeAccumulatedDeltaPx = 0;
        resizeHapticStep = 0;
        if (!isCoarsePointer) setBodyCursor(getResizeCursor(handle, sticker.rotation || 0));
        fireHaptic("selection");
    }

    function handleRotatePointerDown(event, id, cornerBase = 0) {
        event.stopPropagation();
        event.preventDefault();
        detectCoarsePointer(event);
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
        rotateCornerBase = cornerBase;
        isRotating = true;
        rotateStickerId = id;
        if (!isCoarsePointer) setBodyCursor(getRotateCursor((sticker.rotation || 0) + cornerBase));
        fireHaptic("selection");
    }

    function resetStickerInteractionState() {
        isDragging = false;
        dragStickerId = null;
        isResizing = false;
        resizeStickerId = null;
        resizeHandle = null;
        resizeFrameRect = undefined;
        isRotating = false;
        rotateStickerId = null;
        rotateCornerBase = 0;
        clearBodyCursor();
    }

    function deleteSticker(id) {
        if (dragStickerId === id || resizeStickerId === id || rotateStickerId === id) {
            resetStickerInteractionState();
        }
        currentNote = {
            ...currentNote,
            stickers: currentNote.stickers.filter((s) => s.id !== id)
        };
        if (selectedStickerId === id) selectedStickerId = null;
    }

    function deleteSelectedSticker() {
        if (selectedStickerId == null) return;
        deleteSticker(selectedStickerId);
        fireHaptic("warning");
    }

    function clearStickers() {
        if (currentNote.stickers.length === 0) return;
        resetStickerInteractionState();
        currentNote = { ...currentNote, stickers: [] };
        selectedStickerId = null;
        hoveredStickerId = null;
        fireHaptic("warning");
    }

    function handleKeydown(event) {
        if (selectedStickerId == null) return;
        if (event.key === "Backspace" || event.key === "Delete") {
            event.preventDefault();
            deleteSticker(selectedStickerId);
        }
    }

    const LINE_SCALE = { 1: 2, 2: 1.5, 3: 1 };
    const MAX_TEXT_LINES = 3;

    function applyTextSize(el, lines) {
        const scale = LINE_SCALE[lines] || 1;
        el.style.fontSize = `${4.4 * scale}cqi`;
    }

    function getVisualLineCount(el) {
        const style = getComputedStyle(el);
        const lineHeight = parseFloat(style.lineHeight || "0");
        if (!lineHeight) return 1;
        // round is less jumpy at wrap thresholds than ceil for textarea metrics
        return Math.max(1, Math.round(el.scrollHeight / lineHeight));
    }

    function pickBestTextSize(el) {
        for (const targetLines of [1, 2, 3]) {
            applyTextSize(el, targetLines);
            el.style.height = "auto";
            const visualLines = getVisualLineCount(el);
            if (visualLines <= targetLines) {
                return { targetLines, visualLines };
            }
        }

        applyTextSize(el, MAX_TEXT_LINES);
        el.style.height = "auto";
        return { targetLines: MAX_TEXT_LINES, visualLines: getVisualLineCount(el) };
    }

    function adjustNoteText(el) {
        if (!el) return;
        const value = el.value;
        currentNote = { ...currentNote, text: value };

        let result = pickBestTextSize(el);

        if (result.visualLines > MAX_TEXT_LINES) {
            currentNote = { ...currentNote, text: lastValidText, textSizeLines: lastValidTextSizeLines };
            el.value = lastValidText;
            result = pickBestTextSize(el);
        } else {
            lastValidText = value;
            lastValidTextSizeLines = result.targetLines;
            currentNote = { ...currentNote, textSizeLines: result.targetLines };
        }

        applyTextSize(el, result.targetLines);
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
    }

    function handleTextInput(event) {
        adjustNoteText(event.target);
    }

    function startNewSession() {
        resetStickerInteractionState();
        currentNote = createEmptyNote();
        lastValidText = currentNote.text;
        lastValidTextSizeLines = currentNote.textSizeLines;
        selectedStickerId = null;
        hoveredStickerId = null;
        showBuilder = false;
        requestAnimationFrame(() => { showBuilder = true; });
        fireHaptic("medium");
    }

    $: canPublish = currentNote.text.trim().length > 0 || currentNote.stickers.length > 0;

    async function loadMore() {
        if (loadingMore || !hasMore) return;
        fireHaptic("selection");
        loadingMore = true;
        try {
            const result = await fetchNotes(PAGE_SIZE, lastDoc);
            publishedNotes = [...publishedNotes, ...result.notes];
            lastDoc = result.lastDoc;
            hasMore = result.hasMore;
        } catch (err) {
            console.error('Failed to load more notes:', err);
            fireHaptic("error");
        } finally {
            loadingMore = false;
        }
    }

    let publishError = false;

    let isPublishing = false;

    async function publishNote() {
        if (!canPublish || publishPhase || isPublishing) return;
        resetStickerInteractionState();
        publishError = false;
        isPublishing = true;
        fireHaptic("medium");

        const note = {
            ...currentNote,
            id: '',
            createdAt: todayString,
            stickers: currentNote.stickers.map((s) => ({ ...s })),
            deckRotation: Math.random() * 8 - 4,
            deckOffsetX: Math.random() * 16 - 8,
            deckOffsetY: 0
        };

        try {
            const docId = await saveNote(note);
            note.id = docId;
            pendingPublish = note;
            publishPhase = 'out';
            fireHaptic("success");
        } catch (err) {
            console.error('Failed to publish note:', err);
            publishError = true;
            fireHaptic("error");
        } finally {
            isPublishing = false;
        }
    }

    function handlePublishAnimationEnd(e) {
        if (e.target !== e.currentTarget) return;
        if (publishPhase === 'out') {
            if (pendingPublish) {
                publishedNotes = [pendingPublish, ...publishedNotes];
                pendingPublish = null;
            }
            currentNote = createEmptyNote();
            lastValidText = currentNote.text;
            lastValidTextSizeLines = currentNote.textSizeLines;
            selectedStickerId = null;
            showBuilder = false;
            publishPhase = 'in';
        } else if (publishPhase === 'in') {
            publishPhase = null;
        }
    }

    const RESIZE_HANDLES = ["tl", "tr", "bl", "br", "l", "r", "t", "b"];
    const ROTATE_CORNERS = ["tl", "tr", "bl", "br"];
    const ROTATE_CORNER_BASE = { tl: 0, tr: 90, bl: 270, br: 180 };

    function handlePaletteReload() {
        if (palettePhase) return;
        pendingPalette = randomPalette();
        palettePhase = 'out';
        fireHaptic("light");
    }

    /** @param {AnimationEvent} e */
    function handlePaletteAnimationEnd() {
        if (palettePhase === 'out') {
            stickerPalette = pendingPalette || randomPalette();
            pendingPalette = null;
            palettePhase = 'in';
        } else if (palettePhase === 'in') {
            palettePhase = null;
        }
    }

    afterNavigate(({ from, to }) => {
        if (from?.url && to?.url && from.url.pathname === to.url.pathname) {
            showBuilder = false;
            publishPhase = null;
            pendingPublish = null;
        }
    });

    onMount(async () => {
        if (typeof window === "undefined") return;
        window.addEventListener("pointermove", handleWindowPointerMove);
        window.addEventListener("pointerup", handleWindowPointerUp);
        window.addEventListener("keydown", handleKeydown);
        isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
        if (frameEl) {
            canvasHeight = frameEl.clientHeight;
            resizeObserver = new ResizeObserver(() => { canvasHeight = frameEl.clientHeight; });
            resizeObserver.observe(frameEl);
        }

        try {
            const result = await fetchNotes(PAGE_SIZE);
            publishedNotes = result.notes;
            lastDoc = result.lastDoc;
            hasMore = result.hasMore;
        } catch (err) {
            console.error('Failed to load notes:', err);
        } finally {
            loadingNotes = false;
        }
    });

    $: if (showBuilder && noteTextEl && typeof window !== "undefined") {
        // Ensure placeholder text uses the correct initial scaling
        adjustNoteText(noteTextEl);
    }

    onDestroy(() => {
        if (typeof window === "undefined") return;
        window.removeEventListener("pointermove", handleWindowPointerMove);
        window.removeEventListener("pointerup", handleWindowPointerUp);
        window.removeEventListener("keydown", handleKeydown);
        resizeObserver?.disconnect();
        destroyHaptics();
    });
</script>

<Metadata
    meta={{
        title: "Kyle He - Notes",
        description: "notes",
    }}
/>

<main class="mt-8 space-y-10">
    <section class="mt-4">
        <div class="flex items-start justify-between gap-6">
            <div>
                <h2 class="font-serif text-2xl font-semibold text-left">Leave a note!</h2>
                <p class="font-serif text-base text-left mt-2">Build your own polaroid card, leave a note, and publish it to my website :)</p>
            </div>
            <button
                class="header-camera-group flex shrink-0 cursor-pointer flex-col items-center border-0 bg-transparent px-2 py-1 outline-none [-webkit-tap-highlight-color:transparent]"
                class:active={showBuilder}
                on:click={startNewSession}
                aria-label="Start a new polaroid"
            >
                <img
                    src="{base}/images/polaroid_camera.png"
                    alt="Polaroid camera"
                    class="header-camera h-auto w-[120px] [filter:drop-shadow(0_4px_4px_rgba(0,0,0,0.15))] transition-[filter,transform] duration-150 ease-in-out"
                />
                <span class="header-camera-hint mt-[0.6rem] whitespace-nowrap font-serif text-[0.7rem] text-[#9e9a92] transition-colors duration-150">
                    (hint: click the camera)
                </span>
            </button>
        </div>
        <hr class="separator my-6 border-0 border-t border-dashed border-[#d5d0c4]" />
    </section>

    <div
        class="publish-content relative"
        class:publish-out={publishPhase === 'out'}
        class:publish-in={publishPhase === 'in'}
        on:animationend={handlePublishAnimationEnd}
    >
    {#if showBuilder}
    <div class="fade-in mt-6">
        <section class="note-layout grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,0.8fr)]">
        <div role="presentation" on:pointerdown={handleFramePointerDown}>
            <PolaroidCard
                date={currentNote.createdAt}
                backgroundUrl={currentNote.backgroundUrl}
                bind:innerEl={frameEl}
                shadow
            >
                <svelte:fragment slot="canvas">
                    {#each currentNote.stickers as sticker}
                        <div
                            class="sticker-wrapper {sticker.id === selectedStickerId ? 'selected' : sticker.id === hoveredStickerId ? 'hovered' : ''} {sticker.id === selectedStickerId && (isResizing || isRotating) ? 'interacting' : ''} {isCoarsePointer ? 'coarse' : ''}"
                            style={stickerStyle(sticker)}
                            role="presentation"
                            on:pointerdown={(event) => handleStickerPointerDown(event, sticker.id)}
                            on:pointerenter={(event) => { if (event.pointerType === 'mouse') hoveredStickerId = sticker.id; }}
                            on:pointerleave={(event) => { if (event.pointerType === 'mouse' && hoveredStickerId === sticker.id) hoveredStickerId = null; }}
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
                                        on:pointerdown={(event) => handleRotatePointerDown(event, sticker.id, ROTATE_CORNER_BASE[corner])}
                                    ></div>
                                {/each}

                                {#each RESIZE_HANDLES as handle}
                                    <div
                                        class="sticker-handle sticker-handle-{handle}"
                                        style="cursor: {getResizeCursor(handle, sticker.rotation)}"
                                        role="presentation"
                                        on:pointerdown={(event) => handleResizePointerDown(event, sticker.id, handle)}
                                    ></div>
                                {/each}

                                <div class="sticker-rotate-line"></div>
                                <div
                                    class="sticker-rotate-handle"
                                    style="cursor: {getRotateCursor((sticker.rotation || 0) + 45)}"
                                    role="presentation"
                                    on:pointerdown={(event) => handleRotatePointerDown(event, sticker.id, 45)}
                                ></div>
                            {/if}
                        </div>
                    {/each}
                </svelte:fragment>

                <svelte:fragment slot="footer">
                    <textarea
                        class="note-text m-0 box-border w-full resize-none overflow-hidden border-0 bg-transparent p-0 [font-family:'KyleHandwriting','Comic_Sans_MS','Comic_Sans',ui-serif,system-ui] text-[4.4cqi] leading-[1.1] [word-break:break-word] outline-none placeholder:text-[#7e776d]"
                        rows="1"
                        placeholder="leave a note"
                        bind:this={noteTextEl}
                        value={currentNote.text}
                        on:input={handleTextInput}
                    ></textarea>
                </svelte:fragment>
            </PolaroidCard>
        </div>

        <div class="controls flex self-stretch flex-col items-stretch justify-between gap-4 pb-1">
            <StickerPalette
                stickers={stickerPalette}
                maxHeight={stickerSpawnHeight}
                draggingSrc={paletteDrag && Math.hypot(paletteDrag.x - paletteDrag.startX, paletteDrag.y - paletteDrag.startY) > 5 ? paletteDrag.src : null}
                phase={palettePhase}
                on:dragstart={handlePaletteDragStart}
                on:reload={handlePaletteReload}
                on:animationend={handlePaletteAnimationEnd}
            />

            <div class="actions grid grid-cols-2 items-stretch gap-[0.9rem]">
                <button
                    type="button"
                    class="action-button action-button-clear rounded-xl border-[3px] border-current bg-white px-[0.9rem] pb-[0.5rem] pt-[0.7rem] text-[1.6rem] lowercase leading-none text-blue-600 [font-family:'KyleHandwriting','Comic_Sans_MS','Comic_Sans',ui-serif,system-ui] transition-[transform,background-color,opacity] duration-[120ms] enabled:cursor-pointer enabled:hover:-translate-y-px enabled:hover:bg-blue-50 enabled:active:translate-y-px enabled:active:bg-blue-200 disabled:cursor-default disabled:opacity-50"
                    on:click={clearStickers}
                    disabled={currentNote.stickers.length === 0}
                >
                    clear
                </button>
                <button
                    type="button"
                    class="action-button action-button-delete rounded-xl border-[3px] border-current bg-white px-[0.9rem] pb-[0.5rem] pt-[0.7rem] text-[1.6rem] lowercase leading-none text-red-600 [font-family:'KyleHandwriting','Comic_Sans_MS','Comic_Sans',ui-serif,system-ui] transition-[transform,background-color,opacity] duration-[120ms] enabled:cursor-pointer enabled:hover:-translate-y-px enabled:hover:bg-red-50 enabled:active:translate-y-px enabled:active:bg-red-200 disabled:cursor-default disabled:opacity-50"
                    on:click={deleteSelectedSticker}
                    disabled={selectedStickerId == null}
                >
                    delete
                </button>
                <button
                    type="button"
                    class="action-button action-button-publish col-span-2 justify-self-stretch rounded-xl border-[3px] border-current bg-white px-[0.9rem] pb-[0.5rem] pt-[0.7rem] text-[1.6rem] lowercase leading-none text-green-600 [font-family:'KyleHandwriting','Comic_Sans_MS','Comic_Sans',ui-serif,system-ui] transition-[transform,background-color,opacity] duration-[120ms] enabled:cursor-pointer enabled:hover:-translate-y-px enabled:hover:bg-green-50 enabled:active:translate-y-px enabled:active:bg-green-200 disabled:cursor-default disabled:opacity-50"
                    on:click={publishNote}
                    disabled={!canPublish || isPublishing}
                >
                    {#if isPublishing}
                        publishing<span class="publishing-dots"></span>
                    {:else}
                        publish
                    {/if}
                </button>
                {#if publishError}
                    <p class="publish-error col-span-2 m-0 text-center font-serif text-[0.8rem] text-red-600">something went wrong – try again?</p>
                {/if}
            </div>
        </div>
    </section>
        <hr class="separator my-6 border-0 border-t border-dashed border-[#d5d0c4]" />
    </div>
    {/if}

    <section class="deck">
        {#if loadingNotes}
            <p class="font-serif text-sm text-neutral-400">loading notes...</p>
        {:else if publishedNotes.length === 0}
            <p class="font-serif text-sm text-neutral-500">no notes yet – make one!</p>
        {:else}
            <div class="deck-grid">
                {#each publishedNotes as note (note.id)}
                    <div
                        class="deck-card"
                        style={`--dx:${note.deckOffsetX}px;--dy:${note.deckOffsetY}px;--rot:${note.deckRotation}deg;`}
                    >
                        <div class="deck-card-inner">
                            <PolaroidCard date={note.createdAt} backgroundUrl={note.backgroundUrl} mini>
                                <svelte:fragment slot="canvas">
                                    {#each note.stickers as sticker}
                                        <div class="deck-sticker absolute select-none [transform-origin:center]" style={stickerStyle(sticker)}>
                                            <img
                                                src={sticker.src}
                                                alt="sticker"
                                                class="deck-sticker-img h-full w-full object-contain"
                                                style={stickerImgScale(sticker)}
                                                draggable="false"
                                            />
                                        </div>
                                    {/each}
                                </svelte:fragment>

                                <svelte:fragment slot="footer">
                                    {#if note.text.trim().length}
                                        <p class="deck-text m-0 overflow-hidden p-0 [font-family:'KyleHandwriting','Comic_Sans_MS','Comic_Sans',ui-serif,system-ui] leading-[1.1] [word-break:break-word] whitespace-pre-wrap [display:-webkit-box] [line-clamp:3] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] deck-text-{note.textSizeLines || 3}l">{note.text}</p>
                                    {/if}
                                </svelte:fragment>
                            </PolaroidCard>
                        </div>
                    </div>
                {/each}
            </div>
            {#if hasMore}
                <div class="load-more-row mt-6 text-center">
                    <button
                        class="load-more px-2 py-1 font-serif text-[0.95rem] text-blue-600 transition-colors duration-[120ms] enabled:cursor-pointer enabled:hover:text-black enabled:active:font-bold disabled:cursor-default disabled:opacity-60"
                        on:click={loadMore}
                        disabled={loadingMore}
                    >
                        {loadingMore ? 'loading...' : 'load more'}
                    </button>
                </div>
            {/if}
        {/if}
    </section>
    </div>
</main>

{#if paletteDrag && Math.hypot(paletteDrag.x - paletteDrag.startX, paletteDrag.y - paletteDrag.startY) > 5}
    <img
        src={paletteDrag.src}
        alt=""
        class="palette-drag-ghost pointer-events-none fixed z-[9999] [filter:drop-shadow(0_6px_6px_rgba(0,0,0,0.5))]"
        style="left: {paletteDrag.x - paletteDrag.offsetX}px; top: {paletteDrag.y - paletteDrag.offsetY}px; width: {paletteDrag.imgWidth}px; height: {paletteDrag.imgHeight}px;"
        draggable="false"
    />
{/if}

<style>
    .fade-in {
        animation: fadeIn 0.4s ease both;
    }

    .publish-out {
        animation: slideOutDown 0.35s ease both;
        pointer-events: none;
    }

    .publish-in {
        animation: slideInDown 0.35s ease both;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-12px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideOutDown {
        from { opacity: 1; transform: translateY(0); }
        to   { opacity: 0; transform: translateY(12px); }
    }

    @keyframes slideInDown {
        from { opacity: 0; transform: translateY(-12px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    /* --- sticker interaction layer --- */

    .sticker-wrapper {
        position: absolute;
        cursor: grab;
        user-select: none;
        touch-action: none;
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
        width: 44px;
        height: 44px;
        border-radius: 8px;
        background: transparent;
        border: none;
        touch-action: none;
        z-index: 3;
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

    .sticker-handle-l { top: 50%; left: 0; width: 44px; height: 44px; transform: translate(-50%, -50%); }
    .sticker-handle-r { top: 50%; right: 0; width: 44px; height: 44px; transform: translate(50%, -50%); }
    .sticker-handle-t { top: 0; left: 50%; width: 44px; height: 44px; transform: translate(-50%, -50%); }
    .sticker-handle-b { bottom: 0; left: 50%; width: 44px; height: 44px; transform: translate(-50%, 50%); }

    .sticker-rotate-line {
        position: absolute;
        left: 50%;
        bottom: 100%;
        width: 1px;
        height: 16px;
        background: #000;
        transform: translateX(-50%);
        pointer-events: none;
        z-index: 1;
    }

    .sticker-rotate-handle {
        position: absolute;
        left: 50%;
        bottom: 100%;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: transparent;
        border: none;
        transform: translate(-50%, -16px);
        touch-action: none;
        z-index: 2;
    }

    .sticker-rotate-handle::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
        border: 1px solid #000;
        transform: translate(-50%, 50%);
    }

    .sticker-rotate-handle:hover::after {
        background: #e8e4db;
    }

    .sticker-rotate-corner {
        position: absolute;
        width: 44px;
        height: 44px;
        background: transparent;
        touch-action: none;
    }
    .sticker-rotate-corner-tl { top: -28px; left: -28px; border-bottom-right-radius: 100%; }
    .sticker-rotate-corner-tr { top: -28px; right: -28px; border-bottom-left-radius: 100%; }
    .sticker-rotate-corner-bl { bottom: -28px; left: -28px; border-top-right-radius: 100%; }
    .sticker-rotate-corner-br { bottom: -28px; right: -28px; border-top-left-radius: 100%; }

    /* --- coarse pointer (touch) overrides --- */

    .sticker-wrapper.coarse.selected {
        box-shadow: 0 0 0 2px #000;
    }

    .sticker-wrapper.coarse .sticker-handle::after {
        width: 12px;
        height: 12px;
        border-radius: 3px;
        border-width: 1.5px;
    }

    .sticker-wrapper.coarse .sticker-rotate-handle::after {
        width: 16px;
        height: 16px;
        border-width: 1.5px;
    }

    .sticker-wrapper.coarse .sticker-rotate-line {
        height: 20px;
    }

    .sticker-wrapper.coarse .sticker-rotate-handle {
        transform: translate(-50%, -20px);
    }

    .publishing-dots::after {
        content: '.';
        animation: dotCycle 1.2s steps(1) infinite;
    }

    @keyframes dotCycle {
        0%      { content: '.'; }
        33.33%  { content: '..'; }
        66.66%  { content: '...'; }
    }

    @media (hover: hover) {
        .header-camera-group:hover .header-camera {
            animation: jiggle 0.3s ease infinite;
            filter: drop-shadow(0 5px 6px rgba(0, 0, 0, 0.22));
        }

        .header-camera-group:hover .header-camera-hint {
            color: #2563EB;
        }
    }

    .header-camera-group:active .header-camera {
        animation: none;
        transform: scale(0.92);
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.12));
    }

    .header-camera-group.active .header-camera {
        filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.12));
    }

    @keyframes jiggle {
        0%   { transform: rotate(0deg); }
        25%  { transform: rotate(-3deg); }
        50%  { transform: rotate(3deg); }
        75%  { transform: rotate(-2deg); }
        100% { transform: rotate(0deg); }
    }

    /* --- deck --- */

    .deck-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 0.5rem 0.5rem; /* Reduced gap to allow more overlap */
        margin-top: 0.75rem;
        justify-items: center;
        margin-left: -1.5rem; /* Negative margin to enable overlap at grid edges */
        margin-right: -1.5rem;
    }

    .deck-card {
        width: 100%;
        max-width: 190px;
        aspect-ratio: 657 / 794;
        cursor: pointer;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        transition: transform 160ms ease, filter 160ms ease;
        position: relative;
        transform: translate(var(--dx, 0), var(--dy, 0)) rotate(var(--rot, 0deg));
        background: none;
        border: none;
        padding: 0;
        margin-top: 0;
    }

    @media (hover: hover) {
        .deck-card:hover {
            transform: translate(0, 0) rotate(0deg) scale(1.08);
            filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.4));
            z-index: 20;
        }
    }

    @media (max-width: 640px) {
        .deck-grid {
            margin-left: 0;
            margin-right: 0;
            gap: 0.75rem 0.75rem;
        }

        .deck-card {
            transform: none;
        }
    }

    @media (hover: none) and (pointer: coarse) {
        .deck-grid {
            margin-left: 0;
            margin-right: 0;
            gap: 0.75rem 0.75rem;
        }

        .deck-card {
            transform: none;
        }
    }

    .deck-text-1l { font-size: 8.8cqi; }
    .deck-text-2l { font-size: 6.6cqi; }
    .deck-text-3l { font-size: 4.4cqi; }

    :global(body.cursor-lock) {
        cursor: var(--sticker-cursor, default) !important;
    }
    :global(body.cursor-lock *) {
        cursor: inherit !important;
    }
</style>
