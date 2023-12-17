import path from "path";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import pages from "./vitejs/pages.config";
import injectHTML from 'vite-plugin-html-inject';

import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'


// const pagesInput = {};

// pages.forEach((page) => {
//    pagesInput[page.name] = page.path;
// });

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
      vituum(),
      nunjucks({
         root: './src'
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





