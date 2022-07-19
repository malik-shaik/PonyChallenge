import React, { FC, useContext } from 'react'
import { makeStyles, createStyles } from '@material-ui/core'
import { Modal } from 'components/utils/modal'
import { MazeContext } from 'context/maze/context'

export const Lost: FC = () => {
  const classes = useStyles()
  const { mazeData } = useContext(MazeContext)

  if (mazeData.pony[0] !== mazeData.domokun[0]) {
    return null
  }

  return (
    <Modal open={true}>
      <div className={classes.container}>you lost</div>
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
