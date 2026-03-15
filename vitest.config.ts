import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		coverage: { provider: "v8" },
		projects: [
			{
				resolve: {
					alias: {
						"@": resolve(__dirname, "src"),
					},
				},
				test: {
					globals: true,
					name: "unit-test",
					include: ["src/__test__/**/*.{test,spec}.ts"],
					environment: "node",
					setupFiles: ["src/__test__/setup.ts"],
				},
			},
		],
	},
});
