import { store } from "../../index";

import { LOGIN, LOGOUT, SET_ERROR_AUTH } from "./types";

export const onLogin = (username, password) => {
  const foundedUser = store.getState().auth.users.find((user) => {
    return (
      username.toLowerCase() === user.login.toLowerCase() &&
      password === user.password
    );
  });

  if (foundedUser) {
    return {
      type: LOGIN,
      isAuth: true,
      username
    };
  }
  
  store.dispatch(setErrorAuth('Неправильный логин или пароль'));

  return {
    type: ''
  }

};

export const onLogout = () => {
  return {
    type: LOGOUT
  }
}

export const setErrorAuth = text => {
  return {
    type: SET_ERROR_AUTH,
    text
  }
}
