import { Action } from 'constants/action-types'

export interface MazeData {
  pony: number[]
  domokun: number[]
  'end-point': number[]
  size: number[]
  difficulty: number
  data: string[][]
  maze_id: string
  'game-state': {
    state: string
    'state-result': string
  }
}

// **** Global mazeData ****
export const initialMazeDatamazeData: MazeData = {
  pony: [],
  domokun: [],
  'end-point': [],
  size: [],
  difficulty: 0,
  data: [],
  maze_id: '',
  'game-state': {
    state: '',
    'state-result': '',
  },
}

export type SetMazeDataAction = {
  type: Action.SET_MAZE_DATA
  payload: MazeData
}

// **** Reducer ****
export const reducer = (mazeData: MazeData, action: SetMazeDataAction) => {
  const { type, payload } = action

  switch (type) {
    case Action.SET_MAZE_DATA:
      return { ...mazeData, ...payload }

    default:
      return mazeData
  }
}
