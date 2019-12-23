import React from 'react'

// state
interface PrescriptionSet {
  order: number | undefined
  parameter1: number | undefined
  parameter2?: number | undefined
}

interface PrescriptionParameter {
  value: string
  label: string
  type: string
}

export interface Prescription {
  sets: PrescriptionSet[]
  parameter1: PrescriptionParameter
  parameter2?: PrescriptionParameter
}

// action types
export enum PrescriptionActionTypes {
  UPDATE_SET_COUNT,
  SELECT_PARAMETER_TYPE,
  UPDATE_PARAMETER_TYPE,
}

interface PrescriptionAction {
  type: PrescriptionActionTypes
  payload: {
    [key: string]: any
  }
}

// reducer
export const reducer: React.Reducer<Prescription, PrescriptionAction> = (
  prescription,
  { type, payload }
) => {
  switch (type) {
    case PrescriptionActionTypes.UPDATE_SET_COUNT: {
      console.log('payload', payload)
      return prescription
    }
    case PrescriptionActionTypes.SELECT_PARAMETER_TYPE: {
      console.log('payload', payload)
      return prescription
    }
    case PrescriptionActionTypes.UPDATE_PARAMETER_TYPE: {
      console.log('payload', payload)
      return prescription
    }
    default:
      return prescription
  }
}

// initial state
const setsInitialState = Array.from({ length: 10 }, (_, i) => ({
  order: i === 0 ? 1 : undefined,
  parameter1: i === 0 ? 0 : undefined,
  parameter2: i === 0 ? 0 : undefined,
}))

export const initialState: {
  sets: PrescriptionSet[]
  parameter1: PrescriptionParameter
  parameter2: PrescriptionParameter
} = {
  sets: setsInitialState,
  parameter1: {
    value: 'reps',
    label: 'reps',
    type: 'number',
  },
  parameter2: {
    value: 'weight-kg',
    label: 'weight (kg)',
    type: 'number',
  },
}
