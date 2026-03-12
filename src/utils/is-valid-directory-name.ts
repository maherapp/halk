const MAX_DIRECTORY_NAME_LENGTH = 255
const WINDOWS_RESERVED = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\..*)?$/i

export const isValidDirectoryName = (name: string) => {
  if (isEmpty(name)) return false
  if (hasLeadingOrTrailingSpaces(name)) return false
  if (isCurrentOrParentDirectoryName(name)) return false
  if (isLongerThanMaxLength(name)) return false
  if (hasPathSeparators(name)) return false
  if (hasInvalidCharacters(name)) return false
  if (endsWithDot(name)) return false
  if (isAReservedName(name)) return false
  return true
}

const isEmpty = (value: string | null | undefined) => {
  return !value
}

const hasLeadingOrTrailingSpaces = (value: string) => {
  return value.trim() !== value
}

const isCurrentOrParentDirectoryName = (value: string) => {
  return ['.', '..'].indexOf(value) > -1
}

const isLongerThanMaxLength = (value: string) => {
  return value.length > MAX_DIRECTORY_NAME_LENGTH
}

const hasPathSeparators = (value: string) => {
  return /[\/\\]/.test(value)
}

const hasInvalidCharacters = (value: string) => {
  return /[<>:"|?*\x00-\x1F]/i.test(value)
}

const endsWithDot = (value: string) => {
  return value.endsWith('.')
}

const isAReservedName = (value: string) => {
  return WINDOWS_RESERVED.test(value)
}
