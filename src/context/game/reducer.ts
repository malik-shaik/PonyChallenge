import { PonyNames as PonyName } from 'constants/index'
import { Action } from 'constants/action-types'

export interface GameData {
  'maze-width': number
  'maze-height': number
  'maze-player-name': PonyName
  difficulty: number
}

// **** Global mazeData ****
export const initialGameDataState: GameData = {
  'maze-width': 15,
  'maze-height': 15,
  'maze-player-name': 'Twilight Sparkle' as PonyName,
  difficulty: 1,
}

export type GameDataAction = {
  type: Action.SET_GAME_DATA | Action.RESET_GAME_DATA
  payload: GameData
}

// **** Reducer ****
export const reducer = (mazeData: GameData, action: GameDataAction) => {
  const { type, payload } = action

  switch (type) {
    case Action.SET_GAME_DATA:
      return { ...mazeData, ...payload }

    default:
      return mazeData
  }
}
