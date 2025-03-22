<script>
    import { page } from '$app/stores';
    import Metadata from '$lib/components/Metadata.svelte';
    
    export let data;

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
</script>

<Metadata meta={{
    title: `Kyle He - ${data.metadata.title}`,
    description: data.metadata.description || `${data.metadata.title} - A blog post by Kyle He`,
}} />

<main>
    <article class="font-serif mt-12">
        <h1 class="text-3xl font-bold">{data.metadata.title}</h1>
        
        <div class="mt-4 pl-4 border-l-2 border-gray-200 py-3 bg-gray-50/50">
            <div class="text-gray-600 text-base">
                {formatDate(data.metadata.date)}
            </div>
            {#if data.metadata.description}
                <div class="mt-2 text-gray-700 text-base">{data.metadata.description}</div>
            {/if}
        </div>

        <div class="markdown mt-12 leading-relaxed">
            <svelte:component this={data.content} />
        </div>
    </article>
</main>

<style>
    :global(.markdown h2) {
        @apply text-2xl font-semibold mt-8 mb-4;
    }
    :global(.markdown h3) {
        @apply text-xl font-semibold mt-6 mb-3;
    }
    :global(.markdown p) {
        @apply my-4;
    }
    :global(.markdown ul) {
        @apply my-4 list-disc pl-6;
    }
    :global(.markdown ol) {
        @apply my-4 list-decimal pl-6;
    }
    :global(.markdown li) {
        @apply my-2;
    }
    :global(.markdown pre) {
        @apply my-6 p-4 bg-gray-50 rounded-lg overflow-x-auto;
    }
    :global(.markdown code) {
        @apply font-mono text-sm;
    }
    :global(.markdown a) {
        @apply text-blue-700 hover:underline;
    }
    :global(.markdown blockquote) {
        @apply my-4 pl-4 border-l-4 border-gray-200 italic;
    }
</style> 