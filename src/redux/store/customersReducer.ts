import { defaultStates } from "./defaultStates";

export const customersReducer = (state = defaultStates, action: any) => {
  switch (action.type) {
    case "ADD_CASH":
        return { ...state, cash: state.customers + action.payload }
    case "GET_CASH":
        // return { ...state, cash: state.customers - action.payload }
    default:
        return state;
  }
};