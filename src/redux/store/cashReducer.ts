import { defaultStates } from "./defaultStates";

export const ADD_CASH = 'ADD_CASH';
export const GET_CASH = 'GET_CASH';

export const cashReducer = (state = defaultStates, action: any) => {
  switch (action.type) {
    case ADD_CASH:
        return { ...state, cash: state.cash + action.payload }
    case GET_CASH:
        return { ...state, cash: state.cash - action.payload }
    default:
        return state;
  }
};

export const addCashAction = (amount: number) => ({
  type: ADD_CASH,
  payload: amount,
});

export const getCashAction = (amount: number) => ({
  type: GET_CASH,
  payload: amount,
});
