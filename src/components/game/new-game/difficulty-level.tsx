import { FC, ChangeEvent, useContext, useState } from 'react'
import {
  makeStyles,
  createStyles,
  Box,
  Typography,
  Slider,
} from '@material-ui/core'
import { GameContext } from 'context/game/context'
import { GameData, updateGameData } from 'context/game'

export const DifficultyLevel: FC = () => {
  const classes = useStyles()
  const { gameData, dispatch } = useContext(GameContext)
  const [difficultyLevel, setDifficultyLevel] = useState<number>(
    gameData.difficulty
  )
  const handleChange = (_evt: ChangeEvent<{}>, value: number | number[]) => {
    setDifficultyLevel(value as number)
    const data: GameData = { ...gameData, difficulty: value as number }
    updateGameData({ data }, dispatch)
  }

  return (
    <Box className={classes.difficultySection}>
      <Typography
        className={classes.label}
        data-testid="difficultyLevel"
      >{`Difficulty level: ${difficultyLevel}`}</Typography>
      <Slider
        key={`slider-${difficultyLevel}`}
        data-testid="slider"
        className={classes.slider}
        defaultValue={difficultyLevel}
        getAriaValueText={(value: number) => `${value}`}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
        onChange={handleChange}
      />
    </Box>
  )
}

const useStyles = makeStyles(
  createStyles({
    difficultySection: {
      padding: 20,
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#5386e4',
    },
    slider: {
      marginLeft: 40,
      color: '#5386e4',
      width: 200,
    },
  })
)
