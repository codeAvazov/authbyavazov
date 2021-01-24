import { TOKEN } from "../../utilits/constants";
import { LOGIN_USER, LOG_OUT, TEST_TOKEN } from "../constants/authConstants";

const initialState = {
  user: null,
  token: localStorage.getItem(TOKEN),
};

export const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...initialState,
        ...action.payload,
      };
    case LOG_OUT:
      return {
        ...initialState,
        ...action.payload,
      };
    case TEST_TOKEN:
      return {
        ...initialState,
        token: localStorage.getItem(TOKEN),
        user: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
