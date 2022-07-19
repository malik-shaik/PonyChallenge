import { FC, ReactNode, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Modal as MUIModal } from '@material-ui/core'

const getModalStyle = () => {
  const top = 20
  const left = 30

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      outline: 'none',
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      //   border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: 5,
    },
  })
)

interface ModalProps {
  children: ReactNode
  open: boolean
}

export const Modal: FC<ModalProps> = ({ children, open }) => {
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle)
  const [modalOpen, setOpen] = useState(open)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {children}
    </div>
  )

  return (
    <MUIModal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </MUIModal>
  )
}
