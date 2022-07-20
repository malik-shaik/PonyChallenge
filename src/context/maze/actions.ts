import axios from 'axios'
import { apiPonyChallengeUrl, Direction } from 'constants/index'
import { Action } from 'constants/action-types'
import { initialMazeDataState, MazeData } from 'context/maze/reducer'
import { MazeDataAction } from 'context/maze/reducer'
import { Dispatch } from 'react'
import { GameData } from 'context/game'

/**
 * Fetches maze data from api call and sets to global state
 * @param dispatch function for sending action reducer
 */
export const loadMazeData = async (dispatch: Dispatch<MazeDataAction>) => {
  try {
    const mazeId = sessionStorage.getItem('mazeId')
    if (!mazeId) {
      throw new Error()
    }
    const { data } = await axios.get(`${apiPonyChallengeUrl}/maze/${mazeId}`)
    dispatch({ type: Action.SET_MAZE_DATA, payload: data as MazeData })
  } catch (error) {
    console.error(error)
    throw new Error('Error loading data.')
  }
}

/**
 * Make api call to make next move and sets data to global state
 * @param direction
 * @param dispatch function for sending action reducer
 */
export const makeNextMove = async (
  { direction }: { direction: Direction },
  dispatch: Dispatch<MazeDataAction>
) => {
  try {
    const mazeId = sessionStorage.getItem('mazeId')
    if (!mazeId) {
      throw new Error()
    }

    const url = `${apiPonyChallengeUrl}/maze/${mazeId}`
    const config = { headers: { 'Content-Type': 'application/json' } }
    const body = JSON.stringify({
      direction,
    })
    await axios.post(url, body, config)

    await loadMazeData(dispatch)
  } catch (error) {
    console.error(error)
    throw new Error('Error making next move.')
  }
}

/**
 * Make api call to create new maze and sets maze data to global state
 * @param params game data
 * @param dispatch function for sending action reducer
 */
export const createMaze = async (
  params: GameData,
  dispatch: Dispatch<MazeDataAction>
) => {
  try {
    const url = `${apiPonyChallengeUrl}/maze`
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

/**
 * Resets maze data state to initial state
 * @param dispatch function for sending action reducer
 */
export const resetMazeData = (dispatch: Dispatch<MazeDataAction>) => {
  dispatch({ type: Action.RESET_MAZE_DATA, payload: initialMazeDataState })
}
