import * as api from "../../api/useHttp";
import { TOKEN } from "../../utilits/constants";
import {
  LOGIN_USER,
  REGISTER_USER,
  TEST_TOKEN,
  LOG_OUT,
} from "../constants/authConstants";
import { toast } from "react-toastify";
import { HideLoad, ShowLoad } from "./loadAction";

export const LoginReq = (data, f) => async (dispatch) => {
  dispatch(ShowLoad());
  try {
    const response = await api.doPost("/auth/login", data);
    localStorage.setItem(TOKEN, response.data.token);
    dispatch(HideLoad());
    dispatch({ type: LOGIN_USER, payload: response.data })
    f();
    return;
  } catch (error) {
    dispatch(HideLoad());
    toast.error(error.response.data?.message);
  }
};

export const RegisterReq = (data, f) => async (dispatch) => {
  dispatch(ShowLoad());
  try {
    const res = await api.doPost("/auth/register", data);
    f();
    dispatch(HideLoad());
    return dispatch({ type: REGISTER_USER, payload: res.data });
  } catch (error) {
    dispatch(HideLoad());
    toast.error(error.response.data?.message);
  }
};

export const LogOut = () => (dispatch) => {
  localStorage.removeItem(TOKEN);
  return dispatch({ type: LOG_OUT, payload: { user: null, token: null } });
};

export const TestToken = () => async (dispatch) => {
  dispatch(ShowLoad());
  try {
    const { data } = await api.doGet("/auth");
    dispatch(HideLoad());
    return dispatch({ type: TEST_TOKEN, payload: data });
  } catch (error) {
    dispatch(LogOut());
    dispatch(HideLoad());
    toast.error(error.response.data?.message);
  }
};
