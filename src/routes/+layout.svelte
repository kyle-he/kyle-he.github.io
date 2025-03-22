<script>
    import "../app.css";
    import { page } from '$app/stores';
    import { base } from '$app/paths';
</script>

<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
</head>

<div class="container mx-auto max-w-3xl p-4">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between mt-8 gap-4 sm:gap-0">
        <a href="{base}/" class="font-serif text-2xl sm:text-3xl font-semibold text-center sm:text-left">Kyle He</a>
        <nav class="font-serif text-base flex items-center justify-center sm:justify-end">
            <div class="w-[2.5rem] text-center">
                <a 
                    href="{base}/blog" 
                    class="text-blue-700 hover:underline transition duration-300"
                    class:font-bold={$page.url.pathname.startsWith('/blog')}
                >blog</a>
            </div>
            <span class="mx-2">/</span>
            <div class="w-[3.5rem] text-center">
                <a 
                    href="{base}/resume" 
                    class="text-blue-700 hover:underline transition duration-300"
                    class:font-bold={$page.url.pathname === '/resume'}
                >resume</a>
            </div>
        </nav>
    </div>

    <slot />
</div>