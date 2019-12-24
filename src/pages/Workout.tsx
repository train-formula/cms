import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Container = styled.div``

export const Workout: React.FC = () => {
  const { id } = useParams()

  return (
    <Container>
      <h1>Workout {id} - workout builder goes here</h1>
    </Container>
  )
}
