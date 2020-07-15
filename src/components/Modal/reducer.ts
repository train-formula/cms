import React from "react";

export enum ActionTypes {
  OPEN_MODAL,
  CLOSE_MODAL
}

export enum AvailableModals {
  CREATE_PROGRAM,
  CREATE_EXERCISE,
  CREATE_PRESCRIPTION,
  CREATE_WORKOUT
}

export interface ModalPayload {
  type?: AvailableModals;
  values?: any;
}

export interface Modal {
  isOpen: boolean;
  data: ModalPayload;
}

export interface Action {
  type: ActionTypes;
  payload: ModalPayload; // update this once you know form values
}

export const initialState = {
  isOpen: false,
  data: {
    type: undefined,
    values: undefined
  }
};

export const reducer: React.Reducer<Modal, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return {
        isOpen: true,
        data: action.payload
      };
    case ActionTypes.CLOSE_MODAL:
      return {
        isOpen: false,
        data: {
          type: undefined,
          values: undefined
        }
      };
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};
