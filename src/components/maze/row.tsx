import { ReactNode, FC, useContext } from 'react'
import { makeStyles, createStyles, Box } from '@material-ui/core'
import { MazeContext } from 'context/maze/context'

interface RowProps {
  children: ReactNode[]
}
export const Row: FC<RowProps> = ({ children }) => {
  const { mazeData } = useContext(MazeContext)
  const classes = useStyles({ width: mazeData.size[0] })
  return (
    <Box data-testid="row" className={classes.row}>
      {children}
    </Box>
  )
}

const useStyles = makeStyles(
  createStyles({
    row: {
      display: 'flex',
    },
  })
)
