import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerUser } from './reducerUser';

const rootReducer = combineReducers({
  user: reducerUser,
});

export const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools
);
