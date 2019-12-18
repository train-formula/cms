import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid red;
`

type Props = {
  children: React.ReactNode
}

export const Page: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <h1>Page</h1>
    </Container>
  )
}
