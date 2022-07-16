import { makeStyles, createStyles } from '@material-ui/core'
import React, { ReactNode } from 'react'
import { FC } from 'react'

interface RowProps {
  children: ReactNode[]
}
export const Row: FC<RowProps> = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.row} style={{ width: 750 }}>
      {children}
    </div>
  )
}

const useStyles = makeStyles(
  createStyles({
    container: {
      border: '2px solid black',
      margin: '20px auto',
      width: 750,
    },
    row: {
      height: 50,
      display: 'flex',
    },
    cell: {
      height: 50,
      width: 50,
      border: 'solid 2px',
      borderColor: 'white',
      margin: 0,
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
