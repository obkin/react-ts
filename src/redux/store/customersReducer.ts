import { defaultStates } from "./defaultStates";

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

export interface ICustomer {
  id: number,
  name: string,
}

export const customersReducer = (state = defaultStates, action: any) => {
  switch (action.type) {
    case ADD_CUSTOMER:
        return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMER:
        return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload.id) };
    default:
        return state;
  }
};

export const addCustomerAction = (customer: ICustomer) => ({
  type: ADD_CUSTOMER,
  payload: customer,
});

export const removeCustomerAction = (id: number) => ({
  type: REMOVE_CUSTOMER,
  payload: { id },
});