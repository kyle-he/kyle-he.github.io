export async function getAllPosts() {
    const posts = [];
    const paths = import.meta.glob('/src/posts/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            if (file.metadata.publish === false) continue;
            
            const post = {
                metadata: file.metadata,
                slug
            };
            posts.push(post);
        }
    }

    return posts.sort((a, b) => {
        const dateA = new Date(a.metadata.date).getTime();
        const dateB = new Date(b.metadata.date).getTime();
        return dateB - dateA;
    });
} 