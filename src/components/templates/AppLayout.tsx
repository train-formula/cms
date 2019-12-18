import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 3px solid red;
  height: 100vh;
  display: grid;
  grid-template-columns: 80px 1fr;
  .drawer {
    border: 2px solid black;
  }
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
      <div className="drawer">drawer goes here</div>
      <div className="content">{children}</div>
    </Container>
  )
}
