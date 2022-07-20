import { PonyNames as PonyName } from 'constants/index'

interface Params {
  imageName: PonyName | string
  type?: string
}
/**
 * Give image url based on image type
 * @param imageName name of the image
 * @param type image type
 * @returns image url
 */
export const getImageUrl = ({ imageName, type = '' }: Params): string => {
  if (!imageName) {
    return ''
  }
  return type === 'pony'
    ? `/images/ponys/${imageName}.png`
    : `/images/${imageName}.png`
}
