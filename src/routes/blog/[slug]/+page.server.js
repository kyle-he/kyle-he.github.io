import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export function entries() {
    const postsPath = path.join(process.cwd(), 'src', 'posts');
    const files = fs.readdirSync(postsPath);
    
    return files
        .filter(file => file.endsWith('.md'))
        .map(file => ({
            slug: file.replace('.md', '')
        }));
} 