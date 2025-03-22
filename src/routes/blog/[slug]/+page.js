import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        const post = await import(`/src/posts/${params.slug}.md`);
        
        if (!post || !post.metadata) {
            throw error(404, `Invalid post format for ${params.slug}`);
        }

        // Calculate word count from the raw markdown
        const rawMarkdown = post.default.toString();
        const wordCount = rawMarkdown
            .replace(/---[\s\S]*?---/, '') // Remove frontmatter
            .replace(/[#*`_\[\]()]/g, '') // Remove markdown syntax
            .split(/\s+/)
            .filter(Boolean)
            .length;

        return {
            content: post.default,
            metadata: {
                ...post.metadata,
                wordCount
            }
        };
    } catch (e) {
        console.error('Error loading post:', e);
        throw error(404, `Could not find post ${params.slug}`);
    }
} 