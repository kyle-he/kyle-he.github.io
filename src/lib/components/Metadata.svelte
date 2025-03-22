<script>
    import { page } from '$app/stores';

    /** @type {{ title: string, description?: string, type?: string }} */
    export let meta = {
        title: 'Kyle He',
        description: 'I am a computer science student at USC',
    };

    // canonical url
    $: url = `https://kylehe.com${$page.url.pathname}`;

    // sharing url (testing)
    $: socialUrl = `${$page.url.origin}${$page.url.pathname}`;
</script>

<svelte:head>
    <!-- Basic Meta -->
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    
    <!-- Canonical URL -->
    <link rel="canonical" href={url} />
    
    <!-- Additional SEO Meta Tags -->
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Kyle He" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:url" content={socialUrl} />
    <meta property="og:site_name" content="Kyle He" />
</svelte:head> 