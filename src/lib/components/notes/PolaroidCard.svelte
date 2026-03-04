<script>
    import { base } from "$app/paths";
    export let date = "";
    export let backgroundUrl = "";
    export let innerEl = undefined;
    export let mini = false;
    export let shadow = false;

    let displayUrl = "";
    let loading = true;
    let loadId = 0;
    let bgRetries = 0;

    function fallbackUrl() {
        const seed = Math.floor(Math.random() * 10_000_000);
        return `https://picsum.photos/seed/${seed}/600/600.jpg`;
    }

    function preload(url) {
        if (!url) {
            loading = false;
            displayUrl = "";
            return;
        }
        loadId += 1;
        const currentId = loadId;
        loading = true;
        displayUrl = "";
        const img = new Image();
        img.onload = () => {
            if (currentId !== loadId) return;
            displayUrl = url;
            loading = false;
        };
        img.onerror = () => {
            if (currentId !== loadId) return;
            if (bgRetries < 5) {
                bgRetries += 1;
                preload(fallbackUrl());
            } else {
                loading = false;
            }
        };
        img.src = url;
    }

    $: if (backgroundUrl !== undefined) {
        bgRetries = 0;
        if (mini) {
            displayUrl = backgroundUrl;
            loading = false;
        } else {
            preload(backgroundUrl);
        }
    }
</script>

<div class="polaroid-frame relative w-full aspect-[657/794] border-0 bg-transparent p-0 shadow-none [container-type:inline-size]" class:mini class:shadow>
    <div
        class="polaroid-inner absolute bottom-[21.28%] left-[7.31%] right-[7.31%] top-[6.05%] z-0 overflow-hidden rounded-[0.6cqi] border-0 bg-[#e8e4db] [touch-action:none]"
        bind:this={innerEl}
        class:loading={!mini && loading}
    >
        {#if !mini && loading}
            <div class="polaroid-bg-cover absolute inset-0 z-0 h-full w-full bg-[#f2f0ec]" aria-hidden="true"></div>
        {/if}
        {#if displayUrl}
            <img
                class="polaroid-bg absolute inset-0 z-0 h-full w-full object-cover"
                src={displayUrl}
                alt=""
                aria-hidden="true"
            />
        {/if}
        <div class="polaroid-canvas pointer-events-none absolute inset-0 z-[1]">
            <slot name="canvas" />
        </div>
    </div>
    <span class="polaroid-date absolute bottom-[24.19%] right-[12.43%] z-[4] text-[4.4cqi] tracking-[0.08em] text-[#F6F4C5] [font-family:'HelveticaCondensed',system-ui,sans-serif]">
        {date}
    </span>
    <div class="polaroid-footer absolute bottom-[1%] left-[7.31%] right-[7.31%] top-[78.72%] z-[6] flex flex-col justify-center gap-0">
        <slot name="footer" />
    </div>
    <img
        src="{base}/images/polaroid.png"
        alt=""
        class="polaroid-overlay pointer-events-none absolute inset-0 z-[3] h-full w-full object-contain"
        aria-hidden="true"
    />
</div>

<style>
    .polaroid-inner.loading {
        background: #f2f0ec;
    }
    
    .polaroid-bg { animation: bgFadeIn 0.4s ease-out both; }

    .polaroid-canvas :global(*) {
        pointer-events: auto;
    }

    @keyframes bgFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .polaroid-date {
        -webkit-text-stroke: 0.08cqi #000;
        text-shadow:
            0.04cqi 0       0 #000,
           -0.04cqi 0       0 #000,
            0       0.04cqi 0 #000,
            0      -0.04cqi 0 #000;
    }

    .polaroid-frame.shadow {
        filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2));
    }
</style>
