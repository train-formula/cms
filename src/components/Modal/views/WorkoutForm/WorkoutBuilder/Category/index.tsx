import React, { useState } from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'

import { Header } from './Header'
import SelectExercise from './SelectExercise'
import SelectPrescription from './SelectPrescription'
import { ExerciseNotes } from './ExerciseNotes'
import { OrderIcon } from './OrderIcon'
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
  position: relative;
  .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
  .meta {
    display: ${p => (p.exerciseDetailsVisible ? 'grid' : 'none')};
  }
  .icon {
    position: absolute;
    transform: translateX(-125%);
    height: 100%;
    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 50%;
      border-left: 2px dotted rgba(0, 0, 0, 0.3);
      transform: translate(-50%);
    }
    &:hover {
      cursor: pointer;
      .MuiAvatar-root {
        color: black;
        border: 1px solid black;
      }
      &:after {
        border-left: 2px solid rgba(0, 0, 0, 1);
      }
    }
  }
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
        <Tooltip placement="left" title="superset">
          <div className="icon">
            <OrderIcon />
          </div>
        </Tooltip>
      </Content>
    </Container>
  )
}
