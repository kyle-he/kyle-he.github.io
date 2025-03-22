<script>
    import { page } from '$app/stores';
</script>

<main>
    <article class="font-serif mt-12">        
        <div class="mt-4 pl-4 border-l-2 border-gray-200 py-3 bg-gray-50/50">
            <div class="text-gray-600">
                {#if $page.status === 404}
                    The page you're looking for doesn't exist.
                {:else}
                    {$page.error?.message || 'Something went wrong'}
                {/if}
            </div>
        </div>
    </article>
</main> 