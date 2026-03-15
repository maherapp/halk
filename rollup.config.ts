import tsPlugin from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

export default defineConfig({
	input: "src/cli.ts",
	output: [{ file: "dist/cli.js", format: "esm" }],
	plugins: [
		tsPlugin({
			declaration: false,
			exclude: ["**/*.test.ts", "**/*.spec.ts"],
		}),
	],
	external: [/^node:/],
});
