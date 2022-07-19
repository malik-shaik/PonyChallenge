import axios from 'axios'
import { Direction, PonyName } from 'constants/index'
import { Action } from 'constants/action-types'
import { MazeData } from 'context/maze/reducer'
import { SetMazeDataAction } from 'context/maze/reducer'
import { Dispatch } from 'react'

// interface LoadMazeDataParams {
//   mazeId: string
// }

interface MakeNextMoveParams {
  direction: Direction
}

interface CreateMazeParams {
  'maze-width': number
  'maze-height': number
  'maze-player-name': PonyName
  difficulty: number
}

// **** Load Maze data Action ****
export const loadMazeData = async (dispatch: Dispatch<SetMazeDataAction>) => {
  try {
    const mazeId = sessionStorage.getItem('mazeId')
    if (!mazeId) {
      throw new Error()
    }
    const { data } = await axios.get(`/maze/${mazeId}`)
    dispatch({ type: Action.SET_MAZE_DATA, payload: data as MazeData })
  } catch (error) {
    console.error(error)
    throw new Error('Error loading data.')
  }
}

// **** Make Next Move Action ****
export const makeNextMove = async (
  { direction }: MakeNextMoveParams,
  dispatch: Dispatch<SetMazeDataAction>
) => {
  try {
    const mazeId = sessionStorage.getItem('mazeId')
    if (!mazeId) {
      throw new Error()
    }

    const url = `/maze/${mazeId}`
    const config = { headers: { 'Content-Type': 'application/json' } }
    const body = JSON.stringify({
      direction,
    })
    const { data } = await axios.post(url, body, config)

    if (data.state === 'active' && data['state-result'] === 'Move accepted') {
      await loadMazeData(dispatch)
    }
  } catch (error) {
    console.error(error)
    throw new Error('Error making next move.')
  }
}

// **** Create Maze Action ****
export const createMaze = async (
  params: CreateMazeParams,
  dispatch: Dispatch<SetMazeDataAction>
) => {
  try {
    const url = `/maze`
    const config = { headers: { 'Content-Type': 'application/json' } }
    const body = JSON.stringify({ ...params })
    const { data } = await axios.post(url, body, config)
    if (!data['maze_id']) {
      throw new Error()
    }
    sessionStorage.setItem('mazeId', data['maze_id'])

    await loadMazeData(dispatch)
  } catch (error) {
    console.error(error)
    throw new Error('Error loading data.')
  }
}
