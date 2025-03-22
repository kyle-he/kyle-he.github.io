<script>
    /** @type {{ title: string, description?: string, image?: string, type?: string }} */
    export let meta = {
        title: 'Kyle He',
        description: 'I am a computer science student at USC',
        type: 'website'
    };
</script>

<svelte:head>
    <!-- Basic Meta -->
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={meta.type} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    <!-- {#if meta.image}
        <meta property="og:image" content={meta.image} />
    {/if} -->
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={meta.title} />
    <meta name="twitter:description" content={meta.description} />
    <!-- {#if meta.image}
        <meta name="twitter:image" content={meta.image} />
    {/if} -->
</svelte:head> 