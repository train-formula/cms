import React from 'react'

import { Routes } from './routes'
import { AppLayout } from './components/templates/AppLayout'
import { Modal } from './components/Modal/views'
import { DialogView } from './components/Dialog/views'
import { SnackbarView } from './components/Snackbar/views'

export const App: React.FC = () => {
  return (
    <AppLayout>
      <Routes />
      <Modal />
      <DialogView />
      <SnackbarView />
    </AppLayout>
  )
}
