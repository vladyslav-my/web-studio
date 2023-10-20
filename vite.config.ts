import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		ViteEjsPlugin(),
	],
	resolve: {
		alias: [{ find: "@", replacement: "/src" }],
	},
	css: {},
	define: {},
});
