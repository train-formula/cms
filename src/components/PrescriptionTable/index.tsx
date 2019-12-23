import React, { useReducer } from 'react'
import styled from 'styled-components'

import { reducer, initialState, PrescriptionActionTypes } from './store'

import { Header } from './Header'
import { Table } from './Table'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem;
`

export const PrescriptionTable: React.FC = () => {
  const [prescription, dispatch] = useReducer(reducer, initialState)

  function updateSetCount(setCount: string): void {
    dispatch({
      type: PrescriptionActionTypes.UPDATE_SET_COUNT,
      payload: { setCount },
    })
  }
  function selectParameterType(
    parameterColumn: string,
    parameterType: string
  ): void {
    dispatch({
      type: PrescriptionActionTypes.SELECT_PARAMETER_TYPE,
      payload: { parameterColumn, parameterType },
    })
  }
  function updateParameterValue(parameterValue: string): void {
    dispatch({
      type: PrescriptionActionTypes.UPDATE_PARAMETER_TYPE,
      payload: { parameterValue },
    })
  }

  return (
    <Container>
      <Header
        prescription={prescription}
        updateSetCount={updateSetCount}
        selectParameterType={selectParameterType}
      />
      <Table
        prescription={prescription}
        updateParameterValue={updateParameterValue}
      />
    </Container>
  )
}
