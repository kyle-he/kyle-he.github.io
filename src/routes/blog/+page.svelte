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
    <article class="font-serif mt-12">        
        <div class="mt-4 pl-4 border-l-2 border-gray-200 py-3 bg-gray-50/50">
            <div class="text-gray-600">
                Under construction
            </div>
        </div>
    </article>
    <div class="mt-8">
        {#each posts as post}
            <article class="font-serif mt-8 pb-8 border-b border-gray-200">
                <h2 class="text-2xl font-semibold">
                    <a href="{base}/blog/{post.slug}" class="text-blue-700 hover:underline transition duration-300">
                        {post.metadata.title}
                    </a>
                </h2>
                <div class="text-sm mt-2 text-gray-600">
                    {formatDate(post.metadata.date)}
                </div>
                {#if post.metadata.description}
                    <p class="mt-4 text-gray-700">{post.metadata.description}</p>
                {/if}
            </article>
        {/each}
    </div>
</main> 