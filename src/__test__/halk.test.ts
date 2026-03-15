import { halk } from "@/halk";
import { Commands } from "@/types";
import { fsMocks } from "./setup";

describe("Testing Halk CLI", async () => {
	it("should disallow invalid commands", async () => {
		await expect(halk("create" as Commands, "project-one")).rejects.toThrow(
			'Unknown command "create"',
		);
	});

	it("should reject invalid project names", async () => {
		await expect(halk(Commands.New, "con")).rejects.toThrow(
			'An invalid project name was provided "con"',
		);
	});

	it("should surface fs errors", async () => {
		fsMocks.mkdirMock.mockRejectedValueOnce(new Error("mkdir failure"));

		await expect(halk(Commands.New, "my-app")).rejects.toThrow(
			'Unable to initialize an empty directory "my-app"',
		);
	});

	it("should create a directory for valid names", async () => {
		await halk(Commands.New, "my-app");
		expect(fsMocks.mkdirMock).toHaveBeenCalledWith("my-app");
	});
});
