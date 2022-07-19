import { FC } from 'react'
import { Box, createStyles, makeStyles, Typography } from '@material-ui/core'
import { PonyName } from 'constants/index'
import { Pony } from 'components/game/new-game/pony'

export const SelectPony: FC = () => {
  const classes = useStyles()
  const getPonys = () => Object.keys(PonyName).map((key) => key)
  const allPonysKeys = getPonys()

  return (
    <Box className={classes.ponyPickerContainer}>
      <Typography className={classes.label}>Select your Pony</Typography>
      <Box className={classes.ponyPicker}>
        {allPonysKeys.map((ponyKey) => (
          <Pony key={`key-${ponyKey}`} ponyKey={ponyKey as PonyName} />
        ))}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles(
  createStyles({
    ponyPickerContainer: {
      padding: 20,
    },
    label: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#5386e4',
      marginRight: 20,
    },
    ponyPicker: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  })
)
