import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { reducer, initialMazeDataState, MazeData } from 'context/maze/reducer'

export const MazeContext = createContext<{
  state: MazeData
  dispatch: Dispatch<any>
}>({ state: initialMazeDataState, dispatch: () => null })

export const MazeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialMazeDataState)

  return (
    <MazeContext.Provider value={{ state, dispatch }}>
      {children}
    </MazeContext.Provider>
  )
}
