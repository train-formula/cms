import React from 'react'

import { Routes } from './routes'
import { AppLayout } from './components/templates/AppLayout'

export const App: React.FC = () => {
  return (
    <AppLayout>
      <Routes />
    </AppLayout>
  )
}
