import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  items: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};
export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };
  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } });
  };
  value.handleBasketShow = () => {
    dispatch({ type: 'HANDLE_BASKET_SHOW' });
  };
  value.addQuantity = (itemId) => {
    dispatch({ type: 'ADD_QUANTITY', payload: { id: itemId } });
  };
  value.reduceQuantity = (itemId) => {
    dispatch({ type: 'REDUCE_QUANTITY', payload: { id: itemId } });
  };
  value.addOrder = (item) => {
    dispatch({ type: 'ADD_ORDER', payload: { item } });
  };
  value.getItems = (data) => {
    dispatch({ type: 'GET_ITEMS', payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
