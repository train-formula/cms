import React from 'react'
import styled from 'styled-components'

import { Drawer } from '../Drawer'

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 75px 1fr;
`

type Props = {
  children: React.ReactNode
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Drawer />
      {children}
    </Container>
  )
}
