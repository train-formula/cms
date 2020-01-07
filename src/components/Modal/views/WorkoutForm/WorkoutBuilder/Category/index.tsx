import React from 'react'
import styled from 'styled-components'

import { Header } from './Header'
import SelectExercise from './SelectExercise'
import SelectPrescription from './SelectPrescription'

const Container = styled.div`
  display: grid;
  grid-gap: 1.6rem;
`
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`

type Props = {}

export const Category: React.FC<Props> = () => {
  return (
    <Container>
      <Header />
      <Content>
        <SelectExercise />
        <SelectPrescription />
      </Content>
    </Container>
  )
}
