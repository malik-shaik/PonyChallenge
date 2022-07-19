import { Action } from 'constants/action-types'
import { Dispatch } from 'react'
import { GameData, SetGameDataAction } from 'context/game/index'

interface UpdateGameParams {
  data: GameData
}

// **** Update game data Action ****
export const updateGameData = async (
  { data }: UpdateGameParams,
  dispatch: Dispatch<SetGameDataAction>
) => {
  try {
    dispatch({ type: Action.SET_GAME_DATA, payload: data as GameData })
  } catch (error) {
    console.error(error)
    throw new Error('Error loading data.')
  }
}
