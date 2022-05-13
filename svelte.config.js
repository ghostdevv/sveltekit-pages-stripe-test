import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter(),

        vite: {
            optimizeDeps: {
                // disabled: false,
                exclude: ['stripe'],
                // esbuildOptions: {
                //     plugins: [NodeModulesPolyfillPlugin()],
                //     platform: 'node',
                // },
            },

            plugins: [
                nodePolyfills({
                    include: ['crypto', 'events', 'path', 'http', 'https'],
                    exclude: null,
                }),
            ],
        },
    },
};

export default config;
