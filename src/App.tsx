import React from 'react'
import { MazeProvider } from 'context/maze/context'
import { LandingPage } from 'components/landing-page'

function App() {
  return (
    <MazeProvider>
      <LandingPage />
    </MazeProvider>
  )
}

export default App
