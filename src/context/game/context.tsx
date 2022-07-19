import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { reducer, GameData, initialGameDataState } from 'context/game/reducer'

export const GameContext = createContext<{
  gameData: GameData
  dispatch: Dispatch<any>
}>({ gameData: initialGameDataState, dispatch: () => null })

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameData, dispatch] = useReducer(reducer, initialGameDataState)

  return (
    <GameContext.Provider value={{ gameData, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}
