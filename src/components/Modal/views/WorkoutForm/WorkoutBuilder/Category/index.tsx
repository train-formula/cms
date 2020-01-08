import React, { useState } from 'react'
import styled from 'styled-components'

import { Header } from './Header'
import SelectExercise from './SelectExercise'
import SelectPrescription from './SelectPrescription'
import { ExerciseNotes } from './ExerciseNotes'
import { PrescriptionTable } from '../../../../../PrescriptionTable'

const Container = styled.div`
  display: grid;
  grid-gap: 1.6rem;
`
type ContentProps = {
  exerciseDetailsVisible: boolean
}
const Content = styled.div<ContentProps>`
  display: grid;
  grid-gap: 1rem;
  .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
  .meta {
    display: ${p => (p.exerciseDetailsVisible ? 'grid' : 'none')};
  }
`
const Test = styled.div`
  border: 1px solid red;
`

type Props = {}

export const Category: React.FC<Props> = () => {
  const [exerciseDetailsVisible, setExerciseDetailsVisible] = useState(true)
  function toggleDetailsVisible() {
    setExerciseDetailsVisible(!exerciseDetailsVisible)
  }
  return (
    <Container>
      <Header toggleDetailsVisible={toggleDetailsVisible} />
      <Content exerciseDetailsVisible={exerciseDetailsVisible}>
        <div className="row">
          <SelectExercise />
          <SelectPrescription />
        </div>
        <div className="row meta">
          <ExerciseNotes />
          <PrescriptionTable />
        </div>
      </Content>
    </Container>
  )
}
