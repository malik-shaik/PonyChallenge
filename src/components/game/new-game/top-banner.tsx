import { FC } from 'react'
import { makeStyles, createStyles } from '@material-ui/core'
import { getImageUrl } from 'helpers/get-image-url'

export const TopBanner: FC = () => {
  const classes = useStyles()
  return (
    <>
      <img
        src={getImageUrl({ imageName: 'top-banner' })}
        alt="top banner"
        className={classes.image}
      />
      <img
        src={getImageUrl({ imageName: 'help-save-the-pony' })}
        alt="title"
        className={classes.image}
      />
    </>
  )
}

const useStyles = makeStyles(
  createStyles({
    image: {
      width: '100%',
      objectFit: 'contain',
    },
  })
)
