import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { reducer, initialMazeDataState, MazeData } from 'context/maze/reducer'

export const MazeContext = createContext<{
  mazeData: MazeData
  dispatch: Dispatch<any>
}>({ mazeData: initialMazeDataState, dispatch: () => null })

export const MazeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mazeData, dispatch] = useReducer(reducer, initialMazeDataState)

  return (
    <MazeContext.Provider value={{ mazeData, dispatch }}>
      {children}
    </MazeContext.Provider>
  )
}
