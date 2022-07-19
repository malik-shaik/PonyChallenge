import React, { FC, useContext } from 'react'
import { makeStyles, createStyles } from '@material-ui/core'
import { Modal } from 'components/utils/modal'
import Confetti from 'react-confetti'
import { MazeContext } from 'context/maze/context'

export const Win: FC = () => {
  const classes = useStyles()
  const { mazeData } = useContext(MazeContext)

  if (mazeData['game-state'].state !== 'won') {
    return null
  }

  return (
    <Modal open={true}>
      <Confetti width={440} height={200} />
      <div className={classes.container}>you win 🥳</div>
    </Modal>
  )
}

const useStyles = makeStyles(
  createStyles({
    container: {
      height: 150,
    },
  })
)
