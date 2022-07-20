import { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { PonyNames } from 'constants/index'
import { Pony } from 'components/game/new-game/pony'

export const SelectPony: FC = () => {
  const classes = useStyles()
  const getPonys = () => Object.keys(PonyNames).map((key) => key)
  const allPonysKeys = getPonys()

  return (
    <Box className={classes.ponyPickerContainer}>
      <Typography data-testid="pony picker label" className={classes.label}>
        Select your Pony
      </Typography>
      <Box data-testid="pony picker" className={classes.ponyPicker}>
        {allPonysKeys.map((ponyKey) => (
          <Pony key={`key-${ponyKey}`} ponyKey={ponyKey as PonyNames} />
        ))}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ponyPickerContainer: {
      padding: 20,
    },
    label: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      marginRight: 20,
    },
    ponyPicker: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  })
)
