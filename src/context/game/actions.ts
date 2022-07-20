import { Action } from 'constants/action-types'
import { Dispatch } from 'react'
import {
  GameData,
  GameDataAction,
  initialGameDataState,
} from 'context/game/index'

interface UpdateGameParams {
  data: GameData
}

/**
 * Updates game data in global state
 * @param data game data
 * @param dispatch function for sending action reducer
 */
export const updateGameData = async (
  { data }: UpdateGameParams,
  dispatch: Dispatch<GameDataAction>
) => {
  try {
    dispatch({ type: Action.SET_GAME_DATA, payload: data as GameData })
  } catch (error) {
    console.error(error)
    throw new Error('Error loading data.')
  }
}

/**
 * Resets game data state to initial state
 * @param dispatch function for sending action reducer
 */
export const resetGameData = (dispatch: Dispatch<GameDataAction>) => {
  sessionStorage.removeItem('mazeId')
  dispatch({ type: Action.RESET_GAME_DATA, payload: initialGameDataState })
}
