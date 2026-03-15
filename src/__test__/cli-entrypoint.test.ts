describe("CLI entrypoint", () => {
	const originalArgv = process.argv;

	beforeEach(() => {
		vi.resetModules();
		vi.resetAllMocks();
		process.argv = [...originalArgv];
	});

	afterEach(() => {
		process.argv = [...originalArgv];
	});

	it("runs when executed directly", async () => {
		const halkMock = vi.fn().mockResolvedValue(undefined);

		vi.doMock("@/utils/is-executed", () => ({ isExecuted: async () => true }));
		vi.doMock("@/halk", () => ({ halk: halkMock }));

		const exitSpy = vi
			.spyOn(process, "exit")
			.mockImplementation((() => undefined as never) as typeof process.exit);

		const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
		process.argv = ["node", "cli.js", "new", "my-app"];

		await import("@/cli");
		await new Promise((resolve) => setImmediate(resolve));

		expect(halkMock).toHaveBeenCalledWith("new", "my-app");
		expect(exitSpy).toHaveBeenCalledWith(0);

		logSpy.mockRestore();
	});

	it("should does nothing when not executed directly", async () => {
		const halkMock = vi.fn().mockResolvedValue(undefined);

		vi.doMock("@/utils/is-executed", () => ({ isExecuted: async () => false }));
		vi.doMock("@/halk", () => ({ halk: halkMock }));

		const exitSpy = vi
			.spyOn(process, "exit")
			.mockImplementation((() => undefined as never) as typeof process.exit);

		await import("@/cli");
		await new Promise((resolve) => setImmediate(resolve));

		expect(halkMock).not.toHaveBeenCalled();
		expect(exitSpy).not.toHaveBeenCalled();
	});
});
