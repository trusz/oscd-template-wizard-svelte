// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// The plugin typeing is not correct, so we have to use @ts-nochec
import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const isDevelopment = process.env.NODE_ENV === 'development'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			configFile:      "svelte.config.build.js",
			compilerOptions: {
				customElement: true,
			},
		}),
		cssInjectedByJsPlugin({
            styleId: process.env.npm_package_name,
            injectCodeFunction: function injectCodeCustomRunTimeFunction(cssCode: string, options: any) {
                if(!globalThis.pluginStyle){
                    globalThis.pluginStyle = {}
                }
                globalThis.pluginStyle[options.styleId] = cssCode
            }
        }),
	],
	build: {
		lib: {
			entry:   "src/lib/index.ts",
			formats: ["es"],
		},
		sourcemap: isDevelopment ? "inline" : false,
	},
})
	