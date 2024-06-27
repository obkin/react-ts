import { ICustomer } from "./customersReducer";

interface IDefaultStates {
    cash: number;
    customers: ICustomer[];
}

export const defaultStates: IDefaultStates = {
    cash: 0,
    customers: [],
}
