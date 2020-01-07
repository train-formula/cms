import React from 'react'
import styled from 'styled-components'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { MdClose } from 'react-icons/md'

import { useSnackbar } from '../context'
import { RepeatForm } from './RepeatForm'
import { CancelForm } from './CancelForm'

const Container = styled.div``

export const SnackbarView: React.FC = () => {
  const { state: snackbar, closeSnackbar } = useSnackbar()

  const handleClose = () => {
    closeSnackbar()
  }

  function getComponent(
    type: string | undefined,
    data: { [key: string]: any }
  ): React.ReactNode {
    switch (type) {
      case 'repeatForm':
        return <RepeatForm {...data} />
      case 'cancelForm':
        return <CancelForm {...data} />
      default:
        return null
    }
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={snackbar.isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={
        <span id="message-id">
          {snackbar.data.payload && snackbar.data.payload.message}
        </span>
      }
      action={[
        // <Button key="undo" color="secondary" size="small" onClick={handleClose}>
        //   UNDO
        // </Button>,
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <MdClose />
        </IconButton>,
      ]}
    />
  )
}
