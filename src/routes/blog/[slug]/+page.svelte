<script>
    import { page } from '$app/stores';
    import Metadata from '$lib/components/Metadata.svelte';
    import { onMount } from 'svelte';
    
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

    onMount(() => {
        // Add anchor links to h2 headers
        const h2s = document.querySelectorAll('.markdown h2');
        h2s.forEach(h2 => {
            h2.classList.add('group');
            
            const id = h2.textContent
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            h2.id = id;
            
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.className = 'header-anchor';
            link.setAttribute('aria-hidden', 'true');
            h2.appendChild(link);
        });
    });
</script>

<Metadata meta={{
    title: `Kyle He - ${data.metadata.title}`,
    description: data.metadata.description || `${data.metadata.title} - by Kyle He`,
}} />

<main>
    <article class="font-serif mt-12 mb-24">
        <h1 class="font-serif text-[2.5rem] font-bold leading-tight">{data.metadata.title}</h1>
        
        <div class="mt-6 pl-4 border-l-2 border-gray-200 py-3 bg-gray-50/50">
            <div class="text-gray-600 text-base">
                {formatDate(data.metadata.date)}
            </div>
            {#if data.metadata.description}
                <div class="mt-2 text-gray-600 text-base">{data.metadata.description}</div>
            {/if}
        </div>

        <div class="markdown mt-12 leading-relaxed">
            <svelte:component this={data.content} />
        </div>
    </article>
</main>

<style>
    :global(.markdown) {
        @apply text-[1.125rem] leading-[1.6];
    }

    :global(.markdown h2) {
        @apply font-serif text-[1.75rem] font-bold mt-10 mb-4 relative;
        line-height: 1.2;
    }

    :global(.markdown h2 .header-anchor) {
        @apply ml-2 opacity-0 text-blue-700 no-underline transition-opacity duration-100;
        font-weight: normal;
    }

    :global(.markdown h2:hover .header-anchor) {
        @apply opacity-100;
    }

    :global(.markdown h2 .header-anchor::before) {
        content: "#";
    }

    :global(.markdown h3) {
        @apply font-serif text-[1.3rem] font-semibold mt-6 mb-3;
        line-height: 1.3;
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
        @apply my-6 p-5 bg-gray-50 rounded-lg overflow-x-auto;
    }

    :global(.markdown code) {
        @apply font-mono text-[0.9em];
    }

    :global(.markdown a) {
        @apply text-blue-700 hover:text-blue-900 transition-colors duration-100;
    }

    :global(.markdown blockquote) {
        @apply my-6 pl-5 border-l-4 border-gray-200 italic text-gray-700;
    }
</style> 