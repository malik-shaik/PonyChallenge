import { PonyName } from 'constants/index'

/**
 * Gives pony image name by pony name
 * @param ponyName
 * @returns image name
 */
export const getPonyImageName = (ponyName: PonyName): string =>
  Object.keys(PonyName).find(
    (key) => PonyName[key as keyof typeof PonyName] === ponyName
  ) || ''
