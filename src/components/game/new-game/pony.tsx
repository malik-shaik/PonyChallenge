import { FC, useContext } from 'react'
import {
  Avatar,
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { PonyNames } from 'constants/index'
import { getImageUrl } from 'helpers/get-image-url'
import { GameContext } from 'context/game/context'
import clsx from 'clsx'
import { GameData, updateGameData } from 'context/game'

interface PonyProps {
  ponyKey: PonyNames
}
export const Pony: FC<PonyProps> = ({ ponyKey }) => {
  const classes = useStyles()
  const ponyName = PonyNames[ponyKey as keyof typeof PonyNames]
  const { gameData, dispatch } = useContext(GameContext)

  const handleClick = () => {
    const data: GameData = { ...gameData, 'maze-player-name': ponyName }
    updateGameData({ data }, dispatch)
  }

  return (
    <Box
      data-testid={`pony-character-${ponyName}`}
      className={clsx(
        classes.pony,
        gameData['maze-player-name'] === ponyName && classes.selected
      )}
      onClick={handleClick}
    >
      <Avatar
        alt="Pony image"
        src={getImageUrl({ imageName: ponyKey, type: 'pony' })}
        className={classes.ponyAvatar}
      />
      <Typography className={classes.ponyName}>{ponyName}</Typography>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pony: {
      border: 'solid 2px',
      borderColor: theme.palette.primary.main,
      borderRadius: 5,
      padding: '0px 5px',
      display: 'flex',
      alignItems: 'center',
      marginRight: 6,
      marginTop: 6,
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
        color: theme.palette.primary.main,
      },
    },
    ponyAvatar: {
      width: 25,
      height: 25,
      margin: 5,
      border: 'solid 2px ',
      borderColor: theme.palette.primary.main,
    },
    ponyName: {
      color: theme.palette.primary.main,
      fontSize: '0.9rem',
      marginRight: 5,
    },
    selected: {
      backgroundColor: theme.palette.primary.main,
      '& $ponyAvatar': {
        borderColor: theme.palette.background.paper,
      },
      '& $ponyName': {
        color: theme.palette.background.paper,
      },
    },
  })
)
