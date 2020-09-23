import { LOGIN, LOGOUT, SET_ERROR_AUTH } from "../actions/auth/types";

const INITIAL_STATE = {
  isAuth: false,
  username: "",
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
        username: action.username,
        errorAuth: "",
      };
    case LOGOUT:
      return { ...state, isAuth: false, username: "" };
    case SET_ERROR_AUTH:
      return { ...state, errorAuth: action.text };
    default:
      return state;
  }
};
