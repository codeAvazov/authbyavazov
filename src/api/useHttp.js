import axios from "axios";
import { TOKEN } from "../utilits/constants";

export const req = () => {
  let headers = {};

  const token = localStorage.getItem(TOKEN);
  if (token) {
    headers["x-auth-token"] = token;
  }

  return axios.create({
    baseURL: "https://authbyavazov.herokuapp.com/api",
    headers,
  });
};

export const doGet = (url, params = {}) => {
  return req().get(url, params);
};

export const doPost = (url, data) => {
  return req().post(url, data);
};

export const doPatch = (url, data) => {
  return req().patch(url, data);
};

export const doPut = (url, data) => {
  return req().put(url, data);
};

export const doDelete = (url, params) => {
  return req().delete(url, params);
};
