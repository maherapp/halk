export const fsMocks = {
	mkdirMock: vi.fn(),
	realpathMock: vi.fn((value) => value),
};

vi.mock("node:fs/promises", () => ({
	mkdir: fsMocks.mkdirMock,
	realpath: fsMocks.realpathMock,
}));

beforeEach(() => {
	fsMocks.mkdirMock.mockReset();
});
