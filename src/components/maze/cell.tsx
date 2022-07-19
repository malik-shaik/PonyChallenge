import { makeStyles, createStyles, Box, Theme } from '@material-ui/core'
import clsx from 'clsx'
import { CellItem, Wall } from 'constants/index'
import { GameContext } from 'context/game'
import { getImageUrl } from 'helpers/get-image-url'
import { FC, useContext } from 'react'
import { getPonyImageName } from 'helpers/get-pony-image-name'
interface CellProps {
  walls: Wall[]
  cellItem?: CellItem | null
  leftCell: boolean
  topCell: boolean
}

export const Cell: FC<CellProps> = ({ walls, cellItem, leftCell, topCell }) => {
  const { gameData } = useContext(GameContext)

  const height = gameData['maze-height']
  const width = gameData['maze-width']
  const classes = useStyles({ height, width })

  return (
    <Box
      className={clsx(
        classes.cell,
        walls.includes(Wall.NORTH) && classes.north,
        walls.includes(Wall.WEST) && classes.west
      )}
    >
      {cellItem === CellItem.DOMOKUN && (
        <img
          className={classes.image}
          src={getImageUrl({ imageName: 'domokun' })}
          alt="domokun"
        />
      )}
      {cellItem === CellItem.PONY && (
        <img
          src={getImageUrl({
            imageName: getPonyImageName(gameData['maze-player-name']) as string,
            type: 'pony',
          })}
          alt="pony"
          className={classes.image}
        />
      )}
      {cellItem === CellItem.EXIT && (
        <img
          src={getImageUrl({ imageName: 'door' })}
          alt="exit"
          className={classes.image}
        />
      )}
    </Box>
  )
}

type StyleParams = { height: number; width: number }
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cell: {
      height: ({ height, width }: StyleParams) =>
        height >= width ? `${90 / height}vmin` : `${90 / width}vmin`,
      width: ({ height, width }: StyleParams) =>
        height >= width ? `${90 / height}vmin` : `${90 / width}vmin`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    west: {
      borderLeft: '3px solid',
      borderLeftColor: '#37000A',
      marginLeft: -3,
    },
    north: {
      borderTop: '3px solid',
      borderTopColor: '#37000A',
      marginTop: -3,
    },
    image: {
      position: 'absolute',
      maxHeight: '90%',
    },
  })
)
