import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cashReducer } from './reducers/cashReducer';
import { customersReducer } from './reducers/customersReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
