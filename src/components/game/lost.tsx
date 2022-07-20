import { FC, useContext, useEffect, useState } from 'react'
import {
  makeStyles,
  createStyles,
  Box,
  Typography,
  Button,
} from '@material-ui/core'
import { Modal } from 'components/utils/modal'
import { MazeContext } from 'context/maze/context'
import { apiBaseUrl } from 'constants/index'
import { GameContext, resetGameData } from 'context/game'
import { resetMazeData } from 'context/maze/actions'

export const Lost: FC = () => {
  const classes = useStyles()
  const { mazeData, dispatch: mazeDataDispatch } = useContext(MazeContext)
  const { dispatch: gameDataDispatch } = useContext(GameContext)
  const [gameOver, setGameOver] = useState<boolean>(false)

  const imageUrl = `${apiBaseUrl}${mazeData['game-state']['hidden-url']}`

  useEffect(() => {
    if (mazeData['game-state'].state === 'over') {
      setGameOver(true)
    }
  }, [mazeData])

  if (!gameOver) {
    return null
  }

  const handleClick = () => {
    resetGameData(gameDataDispatch)
    resetMazeData(mazeDataDispatch)
  }

  return (
    <Modal open={true}>
      <Box className={classes.container}>
        <img src={imageUrl} alt="" />
        <Typography className={classes.heading}>Game over</Typography>
        <Typography className={classes.subtitle}>
          {mazeData['game-state']['state-result']}
        </Typography>
        <Button onClick={handleClick} className={classes.button} variant="text">
          Try again
        </Button>
      </Box>
    </Modal>
  )
}

const useStyles = makeStyles(
  createStyles({
    container: {
      position: 'relative',
      textAlign: 'center',
      color: 'white',
    },
    heading: {
      position: 'absolute',
      top: '4%',
      left: '35%',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    subtitle: {
      position: 'absolute',
      top: '16%',
      left: '34%',
      fontSize: '1rem',
    },
    button: {
      position: 'absolute',
      bottom: '6%',
      left: '40%',
      color: 'white',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      textTransform: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  })
)
