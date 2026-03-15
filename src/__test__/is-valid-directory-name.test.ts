import { isValidDirectoryName } from "@/utils/is-valid-directory-name";

describe("Testing valid directory names", async () => {
	it("Should reject blank names", async () => {
		expect(isValidDirectoryName("")).toBe(false);
		expect(isValidDirectoryName(null as unknown as string)).toBe(false);
		expect(isValidDirectoryName(undefined as unknown as string)).toBe(false);
	});

	it("Should disallow leading or trailing spaces", async () => {
		expect(isValidDirectoryName(" with_spaces ")).toBe(false);
	});

	it("Should reject current and parent directory names", async () => {
		expect(isValidDirectoryName(".")).toBe(false);
		expect(isValidDirectoryName("..")).toBe(false);
	});

	it("Should reject extra long names", async () => {
		const anExtraLongDirectoryName = "x".repeat(256);
		const maxSupportedDirectoryName = "x".repeat(255);
		expect(isValidDirectoryName(anExtraLongDirectoryName)).toBe(false);
		expect(isValidDirectoryName(maxSupportedDirectoryName)).toBe(true);
	});

	it("Should reject names with path separators", async () => {
		expect(isValidDirectoryName("a/b/c")).toBe(false);
	});

	it("Should reject names with invalid characters", async () => {
		const invalidDirectoryNames = [
			"a>",
			"b<",
			"re:cap",
			'"hello"',
			"a|b",
			"\x00one",
			"two\x1e",
		];
		invalidDirectoryNames.forEach((name) => {
			expect(isValidDirectoryName(name)).toBe(false);
		});
	});

	it("Should disallow trailing dot or space", async () => {
		expect(isValidDirectoryName("directory.")).toBe(false);
		expect(isValidDirectoryName("folder_with_space ")).toBe(false);
	});

	it("Should reject reserved names", async () => {
		const reservedNames = [
			"con",
			"prn",
			"aux",
			"nul",
			"com1",
			"com5",
			"com9",
			"lpt1",
			"lpt4",
			"lpt7",
			"con.any",
		];
		reservedNames.forEach((name) => {
			expect(isValidDirectoryName(name)).toBe(false);
		});
	});

	it("Should permit valid directory names", async () => {
		const validDirectoryNames = [
			"project one",
			"pos-frontend",
			"http server",
			"a",
			"b",
			"x",
		];

		validDirectoryNames.forEach((name) => {
			expect(isValidDirectoryName(name)).toBe(true);
		});
	});
});
