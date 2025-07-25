import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig( {
	plugins: [ tailwindcss() ],
	build: {
		outDir: path.resolve( __dirname, "../flatsome-child/compiled" ),
		rollupOptions: {
			output: {
				entryFileNames: "[name].js",
				chunkFileNames: "[name].js",
				assetFileNames: "[name].[ext]"
			},
			input: {
				"scripts": path.resolve( __dirname, "src/scripts/scripts.ts" ),
				"assets": path.resolve( __dirname, "src/assets/assets.css" )
			}
		}
	}
} );
