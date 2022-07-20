/* eslint-disable testing-library/no-render-in-setup */

import { Maze as MazeComponent } from 'components/maze/index'
import { fireEvent, render, screen } from '@testing-library/react'
import { MazeContext } from 'context/maze/context'
import { MazeData } from 'context/maze'
import { makeNextMove } from 'context/maze/actions'

jest.mock('context/maze/actions')

const mockMazeData = {
  pony: [65],
  domokun: [70],
  'end-point': [218],
  size: [15, 15],
  difficulty: 1,
  data: [
    ['west', 'north'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['north'],
    ['north'],
    ['north'],
    ['west', 'north'],
    [],
    ['west', 'north'],
    ['north'],
    [],
    ['west'],
    ['west', 'north'],
    ['north'],
    ['west'],
    [],
    ['west'],
    ['north'],
    ['north'],
    ['west', 'north'],
    ['west'],
    ['west'],
    ['north'],
    ['west'],
    ['north'],
    ['north'],
    ['west'],
    ['west'],
    ['west'],
    ['north'],
    ['north'],
    ['north'],
    ['north'],
    ['west'],
    ['west'],
    ['west'],
    ['west', 'north'],
    ['west'],
    ['north'],
    ['north'],
    ['west'],
    [],
    ['west', 'north'],
    [],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['north'],
    [],
    ['west'],
    ['west'],
    ['west'],
    ['west', 'north'],
    ['north'],
    [],
    ['west'],
    ['north'],
    [],
    ['west'],
    ['west'],
    ['north'],
    ['west'],
    ['west', 'north'],
    ['north'],
    ['west'],
    [],
    ['west'],
    ['west'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['north'],
    ['west'],
    ['west', 'north'],
    [],
    ['west', 'north'],
    [],
    ['west'],
    ['north'],
    ['west'],
    ['west'],
    ['west', 'north'],
    [],
    ['west'],
    ['west', 'north'],
    ['north'],
    ['west'],
    [],
    ['west'],
    ['north'],
    [],
    ['west', 'north'],
    ['north'],
    [],
    ['west'],
    ['west'],
    ['west'],
    ['north'],
    ['west'],
    ['west'],
    ['west'],
    ['west'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['west'],
    ['west'],
    ['north'],
    ['west', 'north'],
    [],
    ['west'],
    ['north'],
    ['west'],
    ['west'],
    ['west'],
    ['west'],
    ['north'],
    ['west'],
    ['west'],
    ['west'],
    ['north'],
    ['north'],
    [],
    ['west'],
    ['north'],
    ['west'],
    ['west'],
    ['west'],
    ['west', 'north'],
    [],
    ['west', 'north'],
    [],
    ['west'],
    ['west'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['west'],
    ['west'],
    ['west'],
    ['west'],
    [],
    ['west', 'north'],
    ['west'],
    ['west', 'north'],
    [],
    ['west', 'north'],
    ['west'],
    [],
    ['west'],
    ['west', 'north'],
    [],
    ['west'],
    ['west'],
    ['north'],
    ['north'],
    ['north'],
    [],
    [],
    ['west'],
    ['north'],
    [],
    ['north'],
    ['west', 'north'],
    [],
    ['west'],
    ['north'],
    [],
    ['west'],
    ['north'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['north'],
    ['west'],
    ['west', 'north'],
    ['north'],
    ['west'],
    ['north'],
    ['north'],
    ['west'],
    ['west', 'north'],
    ['west', 'north'],
    ['north'],
    ['west'],
    ['west', 'north'],
    ['north'],
    ['west'],
    ['north'],
    [],
    ['west'],
    ['west'],
    ['north'],
    ['west'],
    ['west'],
    ['west'],
    [],
    ['west'],
    ['west'],
    [],
    [],
    ['west'],
    ['north'],
    ['north'],
    ['north'],
    [],
    ['west', 'north'],
    [],
    ['north'],
    [],
    ['west', 'north'],
    [],
  ],
  maze_id: 'baa94006-ac4e-4002-b418-3a0904389b1d',
  'game-state': {
    state: 'Active',
    'state-result': 'Successfully created',
  },
}

describe('<Maze />', () => {
  const Maze = (
    <MazeContext.Provider
      value={{ mazeData: mockMazeData as MazeData, dispatch: () => null }}
    >
      <MazeComponent />
    </MazeContext.Provider>
  )

  beforeEach(() => {
    render(Maze)
  })

  it('Should have a maze with 15 rows and 15 cells in each row', () => {
    const rows = screen.getByTestId('maze').childNodes
    const cells = rows[0].childNodes

    expect(rows.length).toBe(15)
    expect(cells.length).toBe(15)
  })

  it('Should have a pony, a domokun and exit in maze', () => {
    expect(screen.getByAltText('domokun')).toBeInTheDocument()
    expect(screen.getByAltText('pony')).toBeInTheDocument()
    expect(screen.getByAltText('exit')).toBeInTheDocument()
  })

  it('Should call makeNextMove() only when arrow keys pressed from keyboard', () => {
    const { container } = render(Maze)

    fireEvent.keyDown(container, { key: 'h' })
    expect(makeNextMove).not.toHaveBeenCalled()
    fireEvent.keyDown(container, { key: 'enter' })
    expect(makeNextMove).not.toHaveBeenCalled()

    fireEvent.keyDown(container, { key: 'ArrowUp' })
    expect(makeNextMove).toHaveBeenCalled()
    fireEvent.keyDown(container, { key: 'ArrowDown' })
    expect(makeNextMove).toHaveBeenCalled()
    fireEvent.keyDown(container, { key: 'ArrowRight' })
    expect(makeNextMove).toHaveBeenCalled()
    fireEvent.keyDown(container, { key: 'ArrowLeft' })
    expect(makeNextMove).toHaveBeenCalled()
  })

  it('Should call makeNextMove() when direction button clicked', () => {
    const upDirectionButton = screen.getByTestId('up direction')
    const downDirectionButton = screen.getByTestId('down direction')
    const leftDirectionButton = screen.getByTestId('left direction')
    const rightDirectionButton = screen.getByTestId('right direction')

    fireEvent.click(upDirectionButton)
    expect(makeNextMove).toHaveBeenCalled()
    fireEvent.click(downDirectionButton)
    expect(makeNextMove).toHaveBeenCalled()
    fireEvent.click(leftDirectionButton)
    expect(makeNextMove).toHaveBeenCalled()
    fireEvent.click(rightDirectionButton)
    expect(makeNextMove).toHaveBeenCalled()
  })
})
