import { Button } from '@material-ui/core'
import { FC, useContext, useEffect } from 'react'
import { MazeContext } from 'context/maze/context'
import { createMaze, loadMazeData, makeNextMove } from 'context/maze/actions'
import { Maze } from 'components/maze'
import { Direction, PonyName } from 'constants/index'

const { EAST, WEST, NORTH, SOUTH } = Direction

export const LandingPage: FC = () => {
  const { state, dispatch } = useContext(MazeContext)
  console.log('STATE....', state)

  useEffect(() => {
    const mazeId = sessionStorage.getItem('mazeId')
    if (mazeId) {
      loadMazeData({ mazeId }, dispatch)
    }
  }, [state])

  const handleClick = async (
    _evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    direction: Direction
  ) => {
    await makeNextMove({ mazeId: state['maze_id'], direction }, dispatch)
  }

  const handleNewGameClick = async () => {
    await createMaze(
      {
        'maze-width': 15,
        'maze-height': 15,
        'maze-player-name': PonyName.Fluttershy,
        difficulty: 1,
      },
      dispatch
    )
  }

  return (
    <>
      <Maze />
      <Button onClick={(e) => handleClick(e, EAST)}>Right</Button>
      <Button onClick={(e) => handleClick(e, WEST)}>Left</Button>
      <Button onClick={(e) => handleClick(e, NORTH)}>Up</Button>
      <Button onClick={(e) => handleClick(e, SOUTH)}>Down</Button>
      <Button onClick={handleNewGameClick}>New Game</Button>
    </>
  )
}
