import { configureStore } from '@reduxjs/toolkit';

const defaultState = {
    cash: 0,
}

const rootReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_CASH":
        return { ...state, cash: state.cash + action.payload }
    case "GET_CASH":
        return { ...state, cash: state.cash - action.payload }
    default:
        return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
