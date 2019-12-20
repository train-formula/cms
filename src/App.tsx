import React from 'react'

import { Routes } from './routes'
import { AppLayout } from './components/templates/AppLayout'
import { Modal } from './components/Modal/views'

export const App: React.FC = () => {
  return (
    <AppLayout>
      <Routes />
      <Modal />
    </AppLayout>
  )
}
