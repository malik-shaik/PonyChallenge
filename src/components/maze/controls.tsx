import { FC, useContext, useEffect } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import {
  ArrowBackRounded,
  ArrowDownwardRounded,
  ArrowForwardRounded,
  ArrowUpwardRounded,
} from '@material-ui/icons'
import { makeNextMove } from 'context/maze/actions'
import { Direction, DirectionKey } from 'constants/index'
import { MazeContext } from 'context/maze/context'

const { EAST, WEST, NORTH, SOUTH } = Direction

export const Controls: FC = () => {
  const classes = useStyles()
  const { dispatch } = useContext(MazeContext)

  const handleKeyPress = (event: KeyboardEvent) => {
    const isKeyPressValidDirection = (key: string) => DirectionKey[key]

    if (isKeyPressValidDirection(event.key)) {
      makeNextMove({ direction: DirectionKey[event.key] }, dispatch)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  const handleClick = (direction: Direction) => {
    makeNextMove({ direction }, dispatch)
  }

  return (
    <Box className={classes.container}>
      <Typography className={classes.info} variant="caption">
        Press arrow keys from your keyboard or use the controls below to move
        the pony.
      </Typography>
      <Box className={classes.keysContainer}>
        <Box className={classes.row}>
          <Box
            data-testid="up direction"
            className={classes.key}
            onClick={() => handleClick(NORTH)}
          >
            <ArrowUpwardRounded />
          </Box>
        </Box>
        <Box className={classes.row}>
          <Box
            data-testid="left direction"
            className={classes.key}
            onClick={() => handleClick(WEST)}
          >
            <ArrowBackRounded />
          </Box>
          <Box
            data-testid="down direction"
            className={classes.key}
            onClick={() => handleClick(SOUTH)}
          >
            <ArrowDownwardRounded />
          </Box>
          <Box
            data-testid="right direction"
            className={classes.key}
            onClick={() => handleClick(EAST)}
          >
            <ArrowForwardRounded />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: 'auto',
      width: 300,
    },
    info: {
      color: '#5386e4',
      fontSize: '0.9rem',
    },
    keysContainer: {
      marginTop: '5%',
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    key: {
      margin: 3,
      height: '5vmin',
      width: '5vmin',
      border: '2px solid blue',
      borderColor: '#5386e4',
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      color: '#5386e4',
      cursor: 'pointer',
      '&:hover': {
        color: 'white',
        backgroundColor: '#5386e4',
      },
    },
  })
)
