import { toast } from "react-toastify";
import * as api from "../../api/useHttp";
import { ShowLoad, HideLoad } from "./loadAction";
import { LogOut, TestToken } from "./authActions";

export const deleteUser = (id) => async (dispatch) => {
  dispatch(ShowLoad());
  try {
    const { data } = await api.doDelete(`/auth/delete/${id}`);
    toast.success(data.message);
    dispatch(LogOut());
    dispatch(HideLoad());
    return;
  } catch (error) {
    dispatch(HideLoad());
    toast.error(error.response.data?.message);
  }
};

export const EditDataUser = (id, body) => async (dispatch) => {
  dispatch(ShowLoad());
  try {
    const { data } = await api.doPatch(`/edit/data/${id}`, body);
    dispatch(TestToken());
    toast.success(data.message);
    dispatch(HideLoad());
    return;
  } catch (error) {
    dispatch(HideLoad());
    toast.error(error.response.data?.message);
  }
};

export const EditPasswordUser = (id, body) => async (dispatch) => {
  dispatch(ShowLoad());
  try {
    const { data } = await api.doPatch(`/edit/password/${id}`, body);
    toast.success(data.message);
    dispatch(HideLoad());
    return;
  } catch (error) {
    dispatch(HideLoad());
    toast.error(error.response.data?.message);
  }
};

export const UploadFile = (id, body) => async (dispatch) => {
  dispatch(ShowLoad());
  try {
    const { data } = await api.doPatch(`edit/file/${id}`, body);
    dispatch(TestToken());
    toast.success(data.message);
    dispatch(HideLoad());
    return;
  } catch (error) {
    dispatch(HideLoad());
    toast.error(error.response.data?.message);
  }
};
