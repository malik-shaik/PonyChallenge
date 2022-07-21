import { useContext, useEffect, useState } from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Typography,
  Theme,
} from '@material-ui/core'
import { DropDown } from 'components/utils/dropdown'
import * as _ from 'lodash'
import { GameContext } from 'context/game/context'
import { GameData, updateGameData } from 'context/game'

export const Dimensions = () => {
  const classes = useStyles()
  const { gameData, dispatch } = useContext(GameContext)
  const [height, setHeight] = useState<number>(gameData['maze-height'])
  const [width, setWidth] = useState<number>(gameData['maze-width'])

  useEffect(() => {
    const data: GameData = {
      ...gameData,
      'maze-height': height,
      'maze-width': width,
    }
    updateGameData({ data }, dispatch)
  }, [height, width])

  return (
    <Box className={classes.dimensionsContainer}>
      <Typography data-testid="height" className={classes.label}>
        Height
      </Typography>
      <DropDown
        key="height"
        value={height}
        handleChange={(evt) => setHeight(evt.target.value as number)}
        items={_.range(15, 26)}
      />
      <Typography
        data-testid="width"
        style={{ marginLeft: 40 }}
        className={classes.label}
      >
        Width
      </Typography>
      <DropDown
        key="width"
        value={width}
        handleChange={(evt) => setWidth(evt.target.value as number)}
        items={_.range(15, 26)}
      />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dimensionsContainer: {
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      marginRight: 20,
    },
  })
)
