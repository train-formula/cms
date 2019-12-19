import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  .test {
    font-size: 1rem;
  }
`

export const Programs: React.FC = () => {
  return (
    <Container>
      <h1 className="test">Program</h1>
    </Container>
  )
}
