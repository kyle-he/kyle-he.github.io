import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            fallback: '200.html',  // Use this for dynamic fallback routing (SPA mode)
            strict: false  // Set to false to bypass the dynamic route restriction if needed
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/kyle-he.github.io' : '',
        },
        prerender: {
            entries: ['*']  // Tries to prerender all routes
        }
    }
};

export default config;
