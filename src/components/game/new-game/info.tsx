import { FC } from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'

export const Info: FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography className={classes.info} variant="caption">
        Little pony is stuck in a tangled maze, chased by angry domokun. Help
        her to reach the maze exit. Use the direction controls or press arrow
        keys from your keyboard to move the pony. Good luck!
      </Typography>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 20,
      padding: 10,
      backgroundColor: theme.palette.background.default,
    },
    info: {
      color: theme.palette.primary.dark,
      fontSize: '0.9rem',
    },
  })
)
