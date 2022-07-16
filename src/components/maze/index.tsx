import { FC, ReactNode, useContext, useEffect } from 'react'
import { Box, createStyles, makeStyles } from '@material-ui/core'
import { useMazeRows } from 'lib/use-maze-rows'
import { MazeContext } from 'context/maze/context'
import { loadMazeData } from 'context/maze/actions'

interface MazeProps {
  // mazeId: string
}
export const Maze: FC<MazeProps> = () => {
  const classes = useStyles()
  const { state } = useContext(MazeContext)
  const { rows, loadMaze } = useMazeRows()

  useEffect(() => {
    if (state.data.length !== 0) {
      loadMaze(state)
    }
  }, [state])

  if (state.data.length === 0) {
    return <>start a new game</>
  }

  return <Box className={classes.container}>{rows}</Box>
}

const useStyles = makeStyles(
  createStyles({
    container: {
      border: '2px solid black',
      margin: '20px auto',
      width: 750,
    },
    error: {
      margin: 'auto',
    },
  })
)
