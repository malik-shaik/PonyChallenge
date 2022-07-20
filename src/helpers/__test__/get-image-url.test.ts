import { getImageUrl } from 'helpers/get-image-url'

describe('getImageUrl()', () => {
  it('Should return correct image path', () => {
    const ponyImagePath = `/images/ponys/pony.png`
    const bannerImagePath = `/images/banner.png`

    const bannerImageUrl = getImageUrl({ imageName: 'banner' })
    const ponyImageUrl = getImageUrl({ imageName: 'pony', type: 'pony' })

    expect(bannerImageUrl).toBe(bannerImagePath)
    expect(ponyImageUrl).toBe(ponyImagePath)
  })
})
