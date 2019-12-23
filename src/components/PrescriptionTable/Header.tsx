import React from 'react'
import styled from 'styled-components'

import { Parameter } from './Parameter'
import { Prescription } from './store'

const Container = styled.div`
  // background: ${p => p.theme.formBackground}; // figure this out;
  background: #f0f2f2;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  border-radius: 0.4rem 0.4rem 0 0;
`

interface HeaderProps {
  prescription: Prescription
  updateSetCount: (setCount: string) => void
  selectParameterType: (parameterColumn: string, setCount: string) => void
}

export const Header: React.FC<HeaderProps> = ({
  prescription,
  updateSetCount,
  selectParameterType,
}) => {
  const setOptions = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: i + 1,
  }))
  const parameterOptions = [
    {
      value: 'reps',
      label: 'reps',
      type: 'number',
    },
    {
      value: 'weight-kg',
      label: 'weight (kg)',
      type: 'number',
    },
    {
      value: 'time-min-sec',
      label: 'time min:sec',
      type: 'time',
    },
    {
      value: 'distance-yd',
      label: 'distance (yd)',
      type: 'number',
    },
  ]
  const setsCount = prescription.sets.filter(s => s.order).length

  return (
    <Container>
      <Parameter
        value={setsCount}
        parameterOptions={setOptions}
        updateParameterValue={(value: string) => updateSetCount(value)}
      />
      <Parameter
        value={prescription.parameter1.label}
        parameterOptions={parameterOptions}
        updateParameterValue={(value: string) =>
          selectParameterType('one', value)
        }
      />
      <Parameter
        value={prescription.parameter2 && prescription.parameter2.label}
        parameterOptions={parameterOptions}
        updateParameterValue={(value: string) =>
          selectParameterType('two', value)
        }
      />
    </Container>
  )
}
