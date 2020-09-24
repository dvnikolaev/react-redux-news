import { LOGIN, LOGOUT, SET_ERROR_AUTH } from "../actions/auth/types";

const INITIAL_STATE = {
  isAuth: false,
  user: {
    id: null,
    username: '',
    isAdmin: false
  },
  users: [
    {
      id: 1,
      login: "пользователь",
      password: "пользователь",
      isAdmin: false,
    },
    {
      id: 2,
      login: "админ",
      password: "админ",
      isAdmin: true,
    },
  ],
  errorAuth: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: action.isAuth,
        user: action.user,
        errorAuth: "",
      };
    case LOGOUT:
      return { ...state, isAuth: false, user: action.user };
    case SET_ERROR_AUTH:
      return { ...state, errorAuth: action.text };
    default:
      return state;
  }
};
