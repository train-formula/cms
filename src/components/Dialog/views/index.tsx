import React from 'react'
// import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import { useDialog } from '../context'
import { RepeatForm } from './RepeatForm'

// const Container = styled.div``

export const DialogView: React.FC = () => {
  const { state: dialog, closeDialog } = useDialog()

  const handleClose = () => {
    closeDialog()
  }

  const handleCloseWithAction = () => {
    closeDialog()
    dialog.data.payload.action()
  }

  function getComponent(
    type: string | undefined,
    data: { [key: string]: any }
  ): React.ReactNode {
    switch (type) {
      case 'repeatForm':
        return <RepeatForm {...data} />
      default:
        return null
    }
  }

  return (
    <Dialog open={dialog.isOpen} onClose={handleClose}>
      {dialog.data.payload && (
        <>
          <DialogTitle id="dialog-title">
            {dialog.data.payload.title}
          </DialogTitle>
          <DialogContent>
            {getComponent(dialog.data.type, dialog.data)}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              cancel
            </Button>
            <Button onClick={handleCloseWithAction} color="primary" autoFocus>
              apply
            </Button>
          </DialogActions>
        </>
      )}
      {/* needed for material-ui */}
      <div></div>
    </Dialog>
  )
}
