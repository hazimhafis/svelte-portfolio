import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { isoImport } from 'vite-plugin-iso-import';
import { resolve } from 'path';


export default defineConfig({
	plugins: [sveltekit(), isoImport()],
    resolve: {
        alias: { 
            $fonts: resolve('./static/fonts'),
        }
    }
});
