import { HIDE_LOAD, ShOW_LOAD } from "../constants/loaderConstants";

export const HideLoad = () => {
  return ({ type: HIDE_LOAD, payload: null });
};

export const ShowLoad = () => {
  return ({ type: ShOW_LOAD, payload: null });
};
