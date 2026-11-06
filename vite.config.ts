import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// GitHub Pages has no SPA rewrites. Serving the app as 404.html lets deep
// links like /projects load the app, which then renders the right route.
function githubPagesSpaFallback(): Plugin {
	let outDir = "dist";
	return {
		name: "github-pages-spa-fallback",
		apply: "build",
		configResolved(config) {
			outDir = resolve(config.root, config.build.outDir);
		},
		async closeBundle() {
			await copyFile(
				resolve(outDir, "index.html"),
				resolve(outDir, "404.html"),
			);
		},
	};
}

const config = defineConfig({
	plugins: [
		devtools(),
		tsconfigPaths({ projects: ["./tsconfig.json"] }),
		tailwindcss(),
		tanstackRouter({ target: "react", autoCodeSplitting: true }),
		viteReact(),
		githubPagesSpaFallback(),
	],
});

export default config;
