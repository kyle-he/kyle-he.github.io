<script>
    import { base } from "$app/paths";
    export let date = "";
    export let backgroundUrl = "";
    export let innerEl = undefined;
    export let mini = false;
    export let shadow = false;
</script>

<div class="polaroid-frame" class:mini class:shadow>
    <div
        class="polaroid-inner"
        bind:this={innerEl}
    >
        {#if backgroundUrl}
            <img
                class="polaroid-bg"
                src={backgroundUrl}
                alt=""
                aria-hidden="true"
            />
        {/if}
        <slot name="canvas" />
    </div>
    <span class="polaroid-date">{date}</span>
    <div class="polaroid-footer">
        <slot name="footer" />
    </div>
    <img
        src="{base}/images/polaroid.png"
        alt=""
        class="polaroid-overlay"
        aria-hidden="true"
    />
</div>

<style>
    /* polaroid.png is 657x794; canvas inset: 48px L/R/T, 169px B */
    .polaroid-frame {
        position: relative;
        border: none;
        border-radius: 0;
        padding: 0;
        width: 100%;
        aspect-ratio: 657 / 794;
        background: transparent;
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
        container-type: inline-size;
    }

    .polaroid-inner {
        position: absolute;
        top: 6.05%;      /* 48 / 794 */
        left: 7.31%;     /* 48 / 657 */
        right: 7.31%;
        bottom: 21.28%;  /* 169 / 794 */
        background: #e8e4db;
        border-radius: 0.6cqi;
        border: none;
        overflow: hidden;
        z-index: 0;
    }

    .polaroid-bg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation: bgFadeIn 0.4s ease-out both;
    }

    @keyframes bgFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .polaroid-date {
        position: absolute;
        right: 12.43%;   /* 48 + 6%*561 = 81.7px -> 81.7/657 */
        bottom: 24.19%;  /* 169 + 4%*577 = 192px -> 192/794 */
        font-family: "HelveticaCondensed", system-ui, sans-serif;
        font-size: 4.4cqi;
        letter-spacing: 0.08em;
        color: #F6F4C5;
        -webkit-text-stroke: 0.08cqi #000;
        text-shadow:
            0.04cqi 0       0 #000,
           -0.04cqi 0       0 #000,
            0       0.04cqi 0 #000,
            0      -0.04cqi 0 #000;
        z-index: 4;
    }

    .polaroid-footer {
        position: absolute;
        left: 7.31%;
        right: 7.31%;
        top: 78.72%;     /* (794 - 169) / 794 */
        bottom: 1%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0;
        z-index: 6;
    }

    .polaroid-overlay {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        pointer-events: none;
        z-index: 3;
    }

    .polaroid-frame.shadow {
        filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2));
    }
</style>
