import { FC, ReactNode, useContext, useEffect, useState } from 'react'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { MazeContext } from 'context/maze/context'
import * as _ from 'lodash'
import { Cell } from 'components/maze/cell'
import { CellItem, Wall } from 'constants/index'
import { Row } from 'components/maze/row'
import { Win } from 'components/game/win'
import { Controls } from 'components/maze/controls'

export const Maze: FC = () => {
  const classes = useStyles()
  const { mazeData } = useContext(MazeContext)
  const [rows, setRows] = useState<ReactNode[]>([])

  const loadMaze = () => {
    setRows([])
    let cellNumber = 0
    const mazeWidth = mazeData.size[0]
    const mazeHeight = mazeData.size[1]
    const domokunPosition = mazeData.domokun[0]
    const ponyPosition = mazeData.pony[0]
    const exitPosition = mazeData['end-point'][0]

    // divide walls array into smaller arrays for each row's walls
    const wallsGroupedByRow = _.chunk(mazeData.data, mazeData.size[0])

    for (let i = 0; i < mazeHeight; i++) {
      const rowItems: ReactNode[] = []
      const newRow = <Row key={i}>{rowItems}</Row>
      setRows((rows) => [...rows, newRow])

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
              return null
          }
        }

        const newCell = (
          <Cell
            key={`${i}${j}`}
            walls={wallsGroupedByRow[i][j] as Wall[]}
            cellItem={getCellItem(cellNumber)}
            leftCell={j === 0}
            topCell={i === 0}
          />
        )
        rowItems.push(newCell)
        cellNumber++
      }
    }
  }

  useEffect(() => {
    if (mazeData.data.length !== 0) {
      loadMaze()
    }
  }, [mazeData])

  if (mazeData.data.length === 0) {
    return null
  }

  return (
    <Box className={classes.section}>
      <Box className={classes.maze}>{rows}</Box>
      <Controls />
      <Win />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      padding: '2%',
      display: 'flex',
      '& .MuiGrid-item': {
        padding: 0,
      },
      [theme.breakpoints.down('sm')]: {
        // padding: '2% 8%',
        flexDirection: 'column',
      },
    },
    maze: {
      padding: 0,
      border: '3px solid ',
      borderColor: '#37000A',
      margin: 'auto',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      marginRight: 20,
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
        margin: 'auto',
        marginBottom: 20,
      },
    },
  })
)
