import React, { FC, useContext, useEffect, useState } from 'react'
import { makeStyles, createStyles, Box, Button } from '@material-ui/core'
import { Modal } from 'components/utils/modal'
import Confetti from 'react-confetti'
import { MazeContext } from 'context/maze/context'
import { apiBaseUrl } from 'constants/index'
import { GameContext } from 'context/game/context'
import { resetGameData } from 'context/game'
import { resetMazeData } from 'context/maze/actions'

export const Win: FC = () => {
  const classes = useStyles()
  const [won, setWon] = useState<boolean>(false)
  const { mazeData, dispatch: mazeDataDispatch } = useContext(MazeContext)
  const { dispatch: gameDataDispatch } = useContext(GameContext)
  const imageUrl = `${apiBaseUrl}${mazeData['game-state']['hidden-url']}`

  useEffect(() => {
    if (mazeData['game-state'].state === 'won') {
      setWon(true)
    }
  }, [mazeData])

  if (!won) {
    return null
  }

  const handleClick = () => {
    resetGameData(gameDataDispatch)
    resetMazeData(mazeDataDispatch)
    setWon(false)
  }

  return (
    <Modal open={won}>
      <Box className={classes.container}>
        <Confetti width={600} height={340} />
        <img className={classes.image} src={imageUrl} alt="" />
        <Button
          onClick={handleClick}
          className={classes.button}
          variant="contained"
        >
          Play again
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
    image: {
      width: 600,
      objectFit: 'contain',
    },
    button: {
      position: 'absolute',
      top: '35%',
      right: '9%',
      color: '#5386e4',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textTransform: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  })
)
