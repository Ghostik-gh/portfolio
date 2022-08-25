import { LOGIN_USER, LOG_OUT } from './reducerUser';

function action_login_user(value) {
  return {
    type: LOGIN_USER,
    payload: value,
  };
}

export { action_login_user };

function action_logout_user() {
  return {
    type: LOG_OUT,
  };
}

export { action_logout_user };
