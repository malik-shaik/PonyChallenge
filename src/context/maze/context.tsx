import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import {
  reducer,
  initialMazeDatamazeData,
  MazeData,
} from 'context/maze/reducer'

export const MazeContext = createContext<{
  mazeData: MazeData
  dispatch: Dispatch<any>
}>({ mazeData: initialMazeDatamazeData, dispatch: () => null })

export const MazeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mazeData, dispatch] = useReducer(reducer, initialMazeDatamazeData)

  return (
    <MazeContext.Provider value={{ mazeData, dispatch }}>
      {children}
    </MazeContext.Provider>
  )
}
