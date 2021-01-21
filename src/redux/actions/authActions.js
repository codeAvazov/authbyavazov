import * as api from "../../api/useHttp";
import { TOKEN } from "../../utilits/constants";
import {
  LOGIN_USER,
  REGISTER_USER,
  TEST_TOKEN,
  LOG_OUT,
} from "../constants/authConstants";
import { toast } from "react-toastify";

export const LoginReq = (data, f) => async (dispatch) => {
  try {
    const response = await api.doPost("/auth/login", data);
    localStorage.setItem(TOKEN, response.data.token);
    f();
    return dispatch({ type: LOGIN_USER, payload: response.data });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const RegisterReq = (data, f) => async (dispatch) => {
  try {
    const res = await api.doPost("/auth/register", data);
    f();
    return dispatch({ type: REGISTER_USER, payload: res.data });
  } catch (error) {
    toast.error(error.response.data?.message);
  }
};

export const LogOut = (f) => (dispatch) => {
  localStorage.removeItem(TOKEN);
  f();
  return dispatch({ type: LOG_OUT, payload: { user: null, token: null } });
};

export const TestToken = (f) => async (dispatch) => {
  try {
    const { data } = await api.doGet("/auth");
    return dispatch({ type: TEST_TOKEN, payload: data });
  } catch (error) {
    dispatch(LogOut(f))
    console.log(error.response.data.message);
  }
};
