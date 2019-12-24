import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Container = styled.div``

export const Program: React.FC = () => {
  const { id } = useParams()

  return (
    <Container>
      <h1>Program {id} - calendar goes here</h1>
    </Container>
  )
}
