<script>
    import "../app.css";
    import { page } from '$app/stores';
    import { base } from '$app/paths';
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
</svelte:head>

<div class="container mx-auto max-w-2xl p-4">
    <div class="flex items-start min-[480px]:items-center justify-between mt-8">
        <a href="{base}/" class="font-serif text-3xl font-semibold">kylehe.com</a>
        <nav class="font-serif text-base flex flex-col min-[480px]:flex-row items-end min-[480px]:items-center">
            <div class="text-right min-[480px]:w-[2.5rem] min-[480px]:text-center">
                <a 
                    href="{base}/blog" 
                    class="link-highlight"
                    class:font-bold={$page.url.pathname.startsWith('/blog')}
                >blog</a>
            </div>
            <div class="text-right min-[480px]:w-[3.5rem] min-[480px]:text-center mt-1 min-[480px]:mt-0">
                <a 
                    href="{base}/misc" 
                    class="link-highlight"
                    class:font-bold={$page.url.pathname === '/misc'}
                >misc</a>
            </div>
        </nav>
    </div>

    <slot />
</div>