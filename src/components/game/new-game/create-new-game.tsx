import React, { FC, useContext } from 'react'
import { Box, Button, createStyles, makeStyles } from '@material-ui/core'
import { GameContext } from 'context/game'
import { createMaze } from 'context/maze/actions'
import { MazeContext } from 'context/maze/context'

export const CreateNewGame: FC = () => {
  const classes = useStyles()
  const { gameData } = useContext(GameContext)
  const { dispatch } = useContext(MazeContext)

  const handleClick = () => {
    createMaze({ ...gameData }, dispatch)
  }
  return (
    <Box className={classes.container}>
      <Button
        className={classes.button}
        disableElevation
        disableFocusRipple
        variant="contained"
        onClick={handleClick}
      >
        Create maze
      </Button>
    </Box>
  )
}

const useStyles = makeStyles(
  createStyles({
    container: {
      width: '500px',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: 20,
    },
    button: {
      textTransform: 'capitalize',
      color: 'white',
      backgroundColor: '#5386e4',
      fontSize: '1.05rem',
      '&:hover': {
        color: 'white',
        backgroundColor: '#5386e4',
        fontWeight: 'bold',
      },
    },
  })
)
