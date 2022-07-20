import { FC } from 'react'
import { makeStyles, createStyles, Box, Theme } from '@material-ui/core'
import { DifficultyLevel } from 'components/game/new-game/difficulty-level'
import { TopBanner } from 'components/game/new-game/top-banner'
import { Dimensions } from 'components/game/new-game/dimensions'
import { SelectPony } from 'components/game/new-game/select-pony'
import { CreateNewGame } from 'components/game/new-game/create-new-game'
import { Info } from 'components/game/new-game/info'

export const NewGame: FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <TopBanner />

      <Box className={classes.infoContainer}>
        <DifficultyLevel />
        <Dimensions />
        <SelectPony />
        <CreateNewGame />
      </Box>
      <Info />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: '500px',
      margin: 'auto',
    },
    infoContainer: {
      marginTop: '5%',
      padding: '2%',
      backgroundColor: theme.palette.background.paper,
    },
  })
)
