import { HIDE_LOAD, ShOW_LOAD } from "../constants/loaderConstants";

const initialState = false;

export const loaderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ShOW_LOAD:
      return true;
    case HIDE_LOAD:
      return false;
    default:
      return state;
  }
};
