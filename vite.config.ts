import path from "path";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: path.resolve(__dirname, 'src'),
	plugins: [
		ViteEjsPlugin((viteConfig) => {
			return {
			  root: viteConfig.root
			}
		 }),
	],
	resolve: {
		alias: 
		[
			{ find: '@', replacement: path.resolve(__dirname, 'src') }
		],
	},
	css: {},
	define: {},
});

