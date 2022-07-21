import React, { FC, useContext } from 'react'
import { Box, Button, createStyles, makeStyles, Theme } from '@material-ui/core'
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
        aria-label="create maze"
        className={classes.createMazeBtn}
        variant="contained"
        onClick={handleClick}
      >
        Create maze
      </Button>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '3%',
    },
    createMazeBtn: {
      textTransform: 'capitalize',
      color: theme.palette.background.paper,
      backgroundColor: '#d63c8c',
      fontSize: '1.05rem',
      '&:hover': {
        color: theme.palette.background.paper,
        backgroundColor: '#d63c8c',
        fontWeight: 'bold',
      },
    },
  })
)
