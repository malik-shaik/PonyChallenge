/* eslint-disable testing-library/no-render-in-setup */
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { NewGame } from 'components/game/new-game'
import { PonyNames } from 'constants/index'
import * as _ from 'lodash'
import { createMaze } from 'context/maze/actions'
import { GameContext, GameData } from 'context/game'

jest.mock('context/maze/actions')

const mockGameData: GameData = {
  'maze-width': 15,
  'maze-height': 15,
  'maze-player-name': PonyNames.Applejack,
  difficulty: 3,
}

describe('<NewGame />', () => {
  beforeEach(() => {
    render(
      <GameContext.Provider
        value={{ gameData: mockGameData, dispatch: () => null }}
      >
        <NewGame />
      </GameContext.Provider>
    )
  })

  it('Should have banner image and banner text image', () => {
    expect(screen.getByAltText('top banner')).toBeInTheDocument()
    expect(screen.getByAltText('title')).toBeInTheDocument()
  })

  it('Should have text Difficulty level and slider', async () => {
    expect(screen.getByTestId('difficultyLevel').textContent).toEqual(
      'Difficulty level: 3'
    )
    expect(screen.getByTestId('slider')).toBeInTheDocument()
  })

  it('Should have heigh and width dropdowns', async () => {
    expect(screen.getByTestId('height').textContent).toEqual('Height')
    expect(screen.getByTestId('width').textContent).toEqual('Width')

    expect(screen.getAllByTestId('select').length).toBe(2)
  })

  it('Should have pony picker which must have valid number of ponys', async () => {
    expect(screen.getByTestId('pony picker label')).toHaveTextContent(
      'Select your Pony'
    )
    expect(screen.getByTestId('pony picker').childNodes.length).toBe(
      _.keysIn(PonyNames).length
    )
  })

  it('Should have Create Maze button and call createMaze() when its clicked', async () => {
    const button = screen.getByRole('button', { name: 'create maze' })
    expect(button).toHaveTextContent('Create maze')

    fireEvent.click(button)
    expect(createMaze).toHaveBeenCalled()
  })
})
