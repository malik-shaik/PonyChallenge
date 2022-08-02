/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext, useEffect } from 'react'
import { makeStyles, createStyles, Box, Theme } from '@material-ui/core'
import { MazeContext } from 'context/maze/context'
import { loadMazeData } from 'context/maze/actions'
import { Maze } from 'components/maze'
import { NewGame } from 'components/game/new-game'
import { GameContext } from 'context/game'
import { Win } from 'components/game/win'
import { Lost } from 'components/game/lost'

export const LandingPage: FC = () => {
  const classes = useStyles()
  const { dispatch } = useContext(MazeContext)
  const { gameData } = useContext(GameContext)

  useEffect(() => {
    const mazeId = sessionStorage.getItem('mazeId')
    if (mazeId) {
      loadMazeData(dispatch)
    }
  }, [gameData])

  return (
    <Box className={classes.main}>
      {sessionStorage.getItem('mazeId') ? <Maze /> : <NewGame />}
      <Win />
      <Lost />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      margin: 0,
      height: '100vh',
      backgroundColor: theme.palette.background.default,
    },
  })
)
