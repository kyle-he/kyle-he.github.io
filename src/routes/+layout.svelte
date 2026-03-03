<script>
    import "../app.css";
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    import { onMount } from 'svelte';

    let contentEl;
    let ready = false;
    let entering = false;

    function hideContent() {
        entering = false;
        if (contentEl) contentEl.style.opacity = '0';
    }

    function showContent() {
        entering = false;
        requestAnimationFrame(() => { entering = true; });
    }

    function handleAnimationEnd() {
        entering = false;
        if (contentEl) contentEl.style.opacity = '1';
    }

    onMount(() => {
        document.body.classList.add('ready');
        showContent();
        ready = true;
    });

    beforeNavigate(() => {
        if (ready) hideContent();
    });

    afterNavigate(() => {
        if (ready) showContent();
    });
</script>

<div class="container mx-auto max-w-2xl p-4 pb-48">
    <div class="flex items-start min-[480px]:items-center justify-between mt-8">
        <a href="{base}/" class="font-serif text-3xl font-semibold">kylehe.com</a>
        <nav class="font-serif text-base flex flex-col min-[480px]:flex-row items-end min-[480px]:items-center gap-1 min-[480px]:gap-4">
            <div class="text-right min-[480px]:text-center">
                <a 
                    href="{base}/blog" 
                    class="link-highlight"
                    class:font-bold={$page.url.pathname.startsWith('/blog')}
                >blog</a>
            </div>
            <div class="text-right min-[480px]:text-center">
                <a 
                    href="{base}/notes" 
                    class="link-highlight"
                    class:font-bold={$page.url.pathname.startsWith('/notes')}
                >notes</a>
            </div>
            <div class="text-right min-[480px]:text-center">
                <a 
                    href="{base}/misc" 
                    class="link-highlight"
                    class:font-bold={$page.url.pathname === '/misc'}
                >misc</a>
            </div>
        </nav>
    </div>

    <div bind:this={contentEl} class="page-content" class:enter={entering} on:animationend={handleAnimationEnd}>
        <slot />
    </div>
</div>

<style>
    .page-content {
        opacity: 0;
    }

    .page-content.enter {
        animation: pageSlideIn 0.3s ease-out;
    }

    @keyframes pageSlideIn {
        from {
            opacity: 0;
            transform: translateY(-8px);
        }
        to {
            opacity: 1;
            transform: none;
        }
    }
</style>
