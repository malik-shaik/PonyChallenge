import { FC, ReactNode, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Modal as MUIModal } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: 'auto',
      outline: 'none',
    },
    modal: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
)

interface ModalProps {
  children: ReactNode
  open: boolean
}

export const Modal: FC<ModalProps> = ({ children, open }) => {
  const classes = useStyles()
  const [modalOpen, setOpen] = useState(open)

  const handleClose = () => {
    setOpen(false)
  }

  const body = <div className={classes.paper}>{children}</div>

  return (
    <MUIModal
      className={classes.modal}
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </MUIModal>
  )
}
