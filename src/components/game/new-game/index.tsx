import React, { FC } from 'react'
import { makeStyles, createStyles, Box } from '@material-ui/core'
import { DifficultyLevel } from 'components/game/new-game/difficulty-level'
import { TopBanner } from 'components/game/new-game/top-banner'
import { Dimensions } from 'components/game/new-game/dimensions'
import { SelectPony } from 'components/game/new-game/select-pony'
import { CreateNewGame } from 'components/game/new-game/create-new-game'

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
    </Box>
  )
}

const useStyles = makeStyles(
  createStyles({
    container: {
      width: '500px',
      margin: 'auto',
    },
    infoContainer: {
      marginTop: 20,
      padding: 10,
      backgroundColor: 'white',
    },
  })
)
