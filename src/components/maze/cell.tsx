import { makeStyles, createStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { CellItem, Wall } from 'constants/index'
import { FC } from 'react'

interface CellProps {
  walls: Wall[]
  cellItem?: CellItem
}

export const Cell: FC<CellProps> = ({ walls, cellItem }) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(
        classes.cell,
        walls.includes(Wall.NORTH) && classes.north,
        walls.includes(Wall.WEST) && classes.west
      )}
    >
      {cellItem === 'domokun' && (
        <Typography variant="h5" style={{ color: 'red' }}>
          D
        </Typography>
      )}
      {cellItem === 'pony' && (
        <Typography variant="h5" style={{ color: 'blue' }}>
          P
        </Typography>
      )}
      {cellItem === 'end-point' && (
        <Typography variant="h5" style={{ color: 'green' }}>
          E
        </Typography>
      )}
    </div>
  )
}
const useStyles = makeStyles(
  createStyles({
    cell: {
      height: 50,
      width: 50,
      border: 'solid 2px',
      borderColor: 'white',
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    west: {
      borderLeft: 'solid 2px',
      borderLeftColor: 'black',
    },
    north: {
      borderTop: 'solid 2px',
      borderTopColor: 'black',
    },
  })
)
