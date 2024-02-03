import react from "@vitejs/plugin-react";
import { configDefaults, defineConfig } from "vitest/config";

import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	test: {
		globals: true,
		exclude: [
			...configDefaults.exclude,
			"next.config.mjs",
			"postcss.config.js",
			"tailwind.config.ts",
		],
		environment: "jsdom",
		setupFiles: "./setupTests.ts",
	},
});
