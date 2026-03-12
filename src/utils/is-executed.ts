import { pathToFileURL } from 'node:url'

export const isExecuted = () =>
  import.meta.url === pathToFileURL(process.argv[1] ?? '').href
