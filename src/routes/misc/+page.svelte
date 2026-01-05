<script>
    import Metadata from "$lib/components/Metadata.svelte";
    import { base } from "$app/paths";

    const friendIcons = [
        { file: "oliver.png", url: "https://oliver.ni/" },
        { file: "albert.png", url: "https://tam-albert.github.io/" },
        { file: "sabrina.gif", url: "https://sabpdo.github.io/" },
        { file: "apple.gif", url: "https://apple.com/" },
    ];
</script>

<Metadata
    meta={{
        title: "Kyle He - Misc",
        description: "misc",
    }}
/>

<main>
    <p class="font-serif text-base text-left mt-12">tbd</p>

    <section class="mt-8">
        <h2 class="font-serif text-2xl font-semibold text-left">
            # vibe coding
        </h2>
        <p class="font-serif text-base text-left mt-4">
            <a
                href="https://rank.kylehe.com"
                target="_blank"
                rel="noopener noreferrer"
                class="link-highlight"
            >
                rank.kylehe.com
            </a>
            - rank anything beli style
        </p>

        <p class="font-serif text-base text-left mt-4">
            <a
                href="https://kylehe.com/qwe"
                target="_blank"
                rel="noopener noreferrer"
                class="link-highlight"
            >
                kylehe.com/qwe
            </a>
            - aaronson oracle but with three buttons
        </p>
        
    </section>

    <section class="mt-8">
        <h2 class="font-serif text-2xl font-semibold text-left">
            gaming
        </h2>
        <p class="font-serif text-base text-left mt-4">
            <a href="https://keeelay.itch.io/the-lost-soul" target="_blank" rel="noopener noreferrer" class="link-highlight">
                2021 - The Lost Soul
            </a>
        </p>
        <p class="font-serif text-base text-left mt-4">
            <a href="https://keeelay.itch.io/unus-motus" target="_blank" rel="noopener noreferrer" class="link-highlight">
                2020 - Unus Motus
            </a>
        </p>
    </section>

    <section class="mt-8">
        <h2 class="font-serif text-2xl font-semibold text-left">
            <a
                href="https://88x31.nl/index.html"
                target="_blank"
                rel="noopener noreferrer"
                class="link-highlight"
            >
                88x31
            </a>
        </h2>
        <div class="mt-4 flex flex-wrap gap-2">
            {#each friendIcons as icon}
                <a href={icon.url} target="_blank" rel="noopener noreferrer">
                    <img
                        src="{base}/friends/{icon.file}"
                        alt={icon.file}
                        class="w-[88px] h-[31px] pixelated"
                        loading="lazy"
                    />
                </a>
            {/each}
            {#if friendIcons.length === 0}
                <p class="font-serif text-sm text-gray-600 italic">
                    No friend icons yet - add some 88x31 icons to the
                    /static/friends/ folder!
                </p>
            {/if}
        </div>
    </section>
</main>
