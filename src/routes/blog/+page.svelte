<script>
    import { onMount } from 'svelte';
    import { getAllPosts } from '$lib/utils';
    import Metadata from '$lib/components/Metadata.svelte';
    import { base } from '$app/paths';

    /** @type {Array<{ slug: string, metadata: { title: string, date: string, description?: string } }>} */
    let posts = [];

    /** @param {string} dateString */
    function formatDate(dateString) {
        const date = new Date(dateString);
        const timezoneOffset = date.getTimezoneOffset() * 60000;
        const localDate = new Date(date.getTime() + timezoneOffset);
        return localDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long', 
            day: 'numeric'
        });
    }

    onMount(async () => {
        posts = await getAllPosts();
    });
</script>

<Metadata meta={{
    title: "Kyle He - Blog",
    description: "my blog",
}} />

<main>
    <div class="mt-12">
        {#each posts as post}
            <article class="mt-8 pb-8 border-b border-gray-200">
                <h2 class="font-serif text-2xl font-semibold">
                    <a href="{base}/blog/{post.slug}" class="link-highlight">
                        {post.metadata.title}
                    </a>
                </h2>
                <div class="font-serif text-sm mt-2 text-gray-600">
                    {formatDate(post.metadata.date)}
                </div>
                {#if post.metadata.description}
                    <p class="font-serif mt-4 text-gray-700">{post.metadata.description}</p>
                {/if}
            </article>
        {/each}
    </div>
</main> 