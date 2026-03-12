export const fsMocks = {
  mkdirMock: vi.fn(),
}

vi.mock('node:fs/promises', () => ({
  mkdir: fsMocks.mkdirMock,
}))

beforeEach(() => {
  fsMocks.mkdirMock.mockReset()
})
