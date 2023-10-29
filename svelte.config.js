import adapter from '@sveltejs/adapter-static';
import vitePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/kyle-he.github.io' : '',
        }
    }
};

export default config;
