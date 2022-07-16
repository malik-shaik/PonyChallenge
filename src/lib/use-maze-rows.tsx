import { Row } from 'components/maze/row'
import { ReactNode, useState } from 'react'
import * as _ from 'lodash'
import { Cell } from 'components/maze/cell'
import { CellItem, Wall } from 'constants/index'
import { MazeData } from 'context/maze/reducer'

interface UseRowsResponse {
  rows: ReactNode[]
  loadMaze: (mazeData: MazeData) => void
}

/**
 * Create rows after fetching the data from api call
 * @param mazeId to fetch the maze data
 * @returns list of rows, error and a function to make maze
 */
export const useMazeRows = (): UseRowsResponse => {
  // const [Maze, setMaze] = useState<ElementType | any>()
  const [rows, setRows] = useState<ReactNode[]>([])

  const loadMaze = (mazeData: MazeData) => {
    setRows([])
    let cellNumber = 0
    // const { data: mazeData, error } = await getMazeData(mazeId)

    if (mazeData) {
      const mazeWidth = mazeData.size[0]
      const mazeHeight = mazeData.size[1]
      const domokunPosition = mazeData.domokun[0]
      const ponyPosition = mazeData.pony[0]
      const exitPosition = mazeData['end-point'][0]

      // divide walls array into smaller arrays for each row's walls
      const wallsGroupedByRow = _.chunk(mazeData.data, mazeData.size[1])

      for (let i = 0; i < mazeHeight; i++) {
        const rowItems: ReactNode[] = []
        const row = <Row key={i}>{rowItems}</Row>
        setRows((rows) => [...rows, row])

        for (let j = 0; j < mazeWidth; j++) {
          const getCellItem = (cellNumber: number) => {
            switch (cellNumber) {
              case domokunPosition:
                return CellItem.DOMOKUN
              case ponyPosition:
                return CellItem.PONY
              case exitPosition:
                return CellItem.EXIT
              default:
                return undefined
            }
          }

          const cellItem = getCellItem(cellNumber)
          const newCell = (
            <Cell
              key={`${i}${j}`}
              walls={wallsGroupedByRow[i][j] as Wall[]}
              cellItem={cellItem}
            />
          )
          rowItems.push(newCell)
          cellNumber++
        }
      }
    }
  }

  return { rows, loadMaze }
}
