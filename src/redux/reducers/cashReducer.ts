import { defaultStates } from "./defaultStates";

export const cashReducer = (state = defaultStates, action: any) => {
  switch (action.type) {
    case "ADD_CASH":
        return { ...state, cash: state.cash + action.payload }
    case "GET_CASH":
        return { ...state, cash: state.cash - action.payload }
    default:
        return state;
  }
};