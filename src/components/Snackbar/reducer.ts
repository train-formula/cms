import React from 'react'

export enum ActionTypes {
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
}

export interface Snackbar {
  isOpen: boolean
  data: {
    type: string | undefined
    payload: any | undefined
  }
}

export interface Action {
  type: ActionTypes
  payload?: any // update this once you know form payload
}

export const initialState = {
  isOpen: false,
  data: {
    type: undefined,
    payload: undefined,
  },
}

export const reducer: React.Reducer<Snackbar, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.OPEN_SNACKBAR:
      return {
        isOpen: true,
        data: action.payload,
      }
    case ActionTypes.CLOSE_SNACKBAR:
      return {
        isOpen: false,
        data: {
          type: undefined,
          payload: undefined,
        },
      }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}
