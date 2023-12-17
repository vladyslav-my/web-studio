import path from "path";
import { defineConfig } from "vite";

import pages from 'vituum/plugins/pages.js';
import nunjucks from '@vituum/vite-plugin-nunjucks'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
      pages({ dir: "./src/ui/pages" }),
      nunjucks({
         root: './src',

     }),

	],
	resolve: {
		alias: 
		[
			{ find: '@', replacement: path.resolve(__dirname, 'src') }
		],
	},
});





