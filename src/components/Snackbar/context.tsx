import React, { createContext, useReducer, useContext } from 'react'

import { Action, Snackbar, reducer, initialState, ActionTypes } from './reducer'

interface InitContextProps {
  state: Snackbar
  dispatch: React.Dispatch<Action>
}

const SnackbarContext = createContext({} as InitContextProps)

type Props = {
  children: React.ReactNode
}

export const SnackbarProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <SnackbarContext.Provider value={{ state, dispatch }}>
      {children}
    </SnackbarContext.Provider>
  )
}

export const useSnackbar = () => {
  const context = useContext(SnackbarContext)

  if (!context) {
    throw new Error('useSnackbar must be used within an SnackbarProvider')
  }

  const { state, dispatch } = context

  function openSnackbar(payload: any) {
    // turn dispatch into a type that accepts generics
    // then we can type actions; e.g., OpenSnackbarAction
    dispatch({
      type: ActionTypes.OPEN_SNACKBAR,
      payload,
    })
  }

  function closeSnackbar() {
    dispatch({
      type: ActionTypes.CLOSE_SNACKBAR,
    })
  }

  return { state, openSnackbar, closeSnackbar }
}
