import { FC, useContext, useEffect } from 'react'
import { makeStyles, createStyles, Box } from '@material-ui/core'
import { MazeContext } from 'context/maze/context'
import { loadMazeData } from 'context/maze/actions'
import { Maze } from 'components/maze'
import { NewGame } from 'components/game/new-game'
import { GameContext } from 'context/game'

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
    </Box>
  )
}

const useStyles = makeStyles(
  createStyles({
    main: {
      margin: 0,
      minHeight: '100vh',
      backgroundColor: '#EDE7D9',
    },
  })
)
