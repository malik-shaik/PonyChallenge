/* eslint-disable testing-library/no-render-in-setup */
import * as React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { NewGame } from 'components/game/new-game'
import { PonyNames } from 'constants/index'
import * as _ from 'lodash'
import { createMaze } from 'context/maze/actions'

jest.mock('context/maze/actions')

describe('<NewGame />', () => {
  beforeEach(() => {
    render(<NewGame />)
  })

  it('Should have banner image and banner text image', () => {
    expect(screen.getByAltText('top banner')).toBeInTheDocument()
    expect(screen.getByAltText('title')).toBeInTheDocument()
  })

  it('Should have text Difficulty level and slider', async () => {
    expect(screen.getByTestId('difficultyLevel')).toHaveTextContent(
      'Difficulty level'
    )
    expect(screen.getByTestId('slider')).toBeInTheDocument()
  })

  it('Should have heigh and width dropdowns', async () => {
    expect(screen.getByTestId('height')).toHaveTextContent('Height')
    expect(screen.getByTestId('width')).toHaveTextContent('Width')

    expect(screen.getAllByTestId('select').length).toBe(2)
  })

  it('Should have pony picker which must have valid number of ponys', async () => {
    expect(screen.getByTestId('pony picker label')).toHaveTextContent(
      'Select your Pony'
    )
    expect(screen.getByTestId('pony picker').childNodes.length).toBe(
      _.keysIn(PonyNames).length
    )

    const button = screen.getByRole('button', { name: 'create maze' })
    expect(button).toHaveTextContent('Create maze')
    fireEvent.click(button)
    expect(createMaze).toHaveBeenCalled()
  })
})
