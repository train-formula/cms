import React from 'react'
import styled from 'styled-components'
import { Prescription } from './store'

const Container = styled.div``
type SetProps = {
  order?: number | undefined
}
const Set = styled.div<SetProps>`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  background: ${p => (p.order ? p.theme.background : p.theme.emptyBackground)};
  border-color: #e9e9e9;
  border-style: solid;
  border-width: 0 0.1rem 0.1rem 0.1rem;
  &:last-child {
    border-radius: 0 0 0.4rem 0.4rem;
  }
  .set-count {
    border-right: 0.1rem solid #e9e9e9;
    color: #808080;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    &:last-of-type {
      border-radius: 0 0 0 0.4rem;
    }
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: default;
    }
  }
  .parameter1,
  .parameter2 {
    border: none;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
    border-right: 0.1rem solid #e9e9e9;
    text-align: center;
    &:focus {
      outline: none;
    }
  }
`
Set.defaultProps = {
  theme: {
    background: '#fff',
    emptyBackground: '#f0f2f2',
  },
}

type Props = {
  prescription: Prescription
  updateParameterValue: (value: string) => void
}

export const Table: React.FC<Props> = ({ prescription }) => {
  console.log(prescription)
  return (
    <Container>
      {prescription.sets.map(({ order, parameter1, parameter2 }, i) => (
        <Set key={i} order={order}>
          <div className="cell set-count">{order}</div>
          <input className="cell parameter1" value={parameter1} />
          <input className="cell parameter2" value={parameter2} />
        </Set>
      ))}
    </Container>
  )
}
