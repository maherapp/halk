import { mkdir } from 'node:fs/promises'

import { Commands } from '@/types'
import { isValidDirectoryName } from '@/utils/is-valid-directory-name'

export const halk = async (command: Commands, name: string) => {
  if (command === Commands.New) return await initializeANewProject(name)
  throw new Error(`Unknown command "${command}"`)
}

const initializeANewProject = async (name: string) => {
  if (!isValidDirectoryName(name))
    throw new Error(`An invalid project name was provided "${name}"`)
  try {
    await mkdir(name)
  } catch {
    throw new Error(`Unable to initialize an empty directory "${name}"`)
  }
}

