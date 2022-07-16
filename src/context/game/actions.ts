import axios from 'axios'
import { Direction } from 'constants/index'
import { Action } from 'constants/action-types'
import { MazeData } from 'context/maze/reducer'
import { SetMazeDataAction } from 'context/maze/reducer'
import { Dispatch } from 'react'

interface LoadMazeDataParams {
  mazeId: string
}
interface MakeNextMoveParams extends LoadMazeDataParams {
  direction: Direction
}

// **** Create Maze Action ****
// export const createMaze = async (
//   { mazeId }: { mazeId: string },
//   dispatch: Dispatch<SetMazeDataAction>
// ) => {
//   try {
//     const { data } = await axios.get(`/maze/${mazeId}`)
//     dispatch({ type: Action.SET_MAZE_DATA, payload: data as MazeData })
//   } catch (error) {
//     console.error(error)
//     throw new Error('Error loading data.')
//   }
// }

// **** Load Maze data Action ****
export const loadMazeData = async (
  { mazeId }: LoadMazeDataParams,
  dispatch: Dispatch<SetMazeDataAction>
) => {
  try {
    const { data } = await axios.get(`/maze/${mazeId}`)
    dispatch({ type: Action.SET_MAZE_DATA, payload: data as MazeData })
  } catch (error) {
    console.error(error)
    throw new Error('Error loading data.')
  }
}

// **** Make Next Move Action ****
export const makeNextMove = async (
  { mazeId, direction }: MakeNextMoveParams,
  dispatch: Dispatch<SetMazeDataAction>
) => {
  try {
    const url = `/maze/${mazeId}`
    const config = { headers: { 'Content-Type': 'application/json' } }
    const body = JSON.stringify({
      direction,
    })
    const { data } = await axios.post(url, body, config)
    if (data.state === 'active' && data['state-result'] === 'Move accepted') {
      await loadMazeData({ mazeId }, dispatch)
    }
    dispatch({ type: Action.SET_MAZE_DATA, payload: data as MazeData })
  } catch (error) {
    console.error(error)
    throw new Error('Error making next move.')
  }
}
