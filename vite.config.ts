import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: 'src/',
	plugins: [
		ViteEjsPlugin(),
	],
	resolve: {
		alias: 
		[
			{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
		],
		
	},
	css: {},
	define: {},
});
