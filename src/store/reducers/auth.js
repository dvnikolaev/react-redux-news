import { LOGIN, LOGOUT } from "../actions/auth/types";

const INITIAL_STATE = {
  isAuth: false,
  users: [
    {
      login: 'пользователь',
      password: 'пользователь',
      isAdmin: false
    },
    {
      login: 'админ',
      password: 'админ',
      isAdmin: true
    }
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN:
      return {...state, isAuth: true}
    case LOGOUT:
      return {...state, isAuth: false}
    default:
      return state;
  }
}