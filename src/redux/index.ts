import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cashReducer } from './store/cashReducer';
import { customersReducer } from './store/customersReducer';

const rootReducer = combineReducers({
  cashReducer,
  customersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
