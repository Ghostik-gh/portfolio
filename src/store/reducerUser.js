const defaultValue = {
  name: 'Unknown',
  isLogin: false,
};

export const LOGIN_USER = 'LOGIN_USER';
export const LOG_OUT = 'LOG_OUT';

export const reducerUser = (state = defaultValue, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isLogin: true, name: action.payload };
    case LOG_OUT:
      return { ...state, isLogin: false, name: 'Unknown' };
    default:
      return state;
  }
};
