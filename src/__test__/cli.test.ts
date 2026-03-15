import { runCli } from "@/cli";

const logger = vi.fn();

describe("Testing the CLI runner", async () => {
	it("should reject unknown command", async () => {
		await runCli(["create", "my-app"], logger);
		expect(logger).toHaveBeenCalledWith(
			'An error occurred:\nError: Unknown command "create"',
		);
	});

	it("should execute without errors", async () => {
		await runCli(["new", "my-app"], logger);
		expect(logger).toHaveBeenCalledWith(
			"All operations had been completed successfully",
		);
	});
});
