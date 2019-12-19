import React from 'react'
import styled from 'styled-components'

import { Drawer } from '../Drawer'

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 80px 1fr;
  .content {
    border: 2px solid purple;
  }
`

type Props = {
  children: React.ReactNode
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Drawer />
      <div className="content">{children}</div>
    </Container>
  )
}
