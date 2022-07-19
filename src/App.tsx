import React from 'react'
import { MazeContextProvider } from 'context/maze/context'
import { LandingPage } from 'components/landing-page'
import { PonyChallengeThemeProvider } from 'components/theme'
import { GameContextProvider } from 'context/game/context'

function App() {
  return (
    <PonyChallengeThemeProvider>
      <GameContextProvider>
        <MazeContextProvider>
          <LandingPage />
        </MazeContextProvider>
      </GameContextProvider>
    </PonyChallengeThemeProvider>
  )
}

export default App
