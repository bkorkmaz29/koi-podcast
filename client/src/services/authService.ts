import axios from "axios";
import { User } from "../models/models";

export const loginService = async (loginUser: User) => {
  await axios
    .post(`https://koi-pod.herokuapp.com/api/user/login`, {
      email: loginUser.email,
      password: loginUser.password,
    })
    .then((res) => localStorage.setItem("user", JSON.stringify(res.data)))
    .catch((err) => console.error(err));
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};

export const getCurrentUserId = () => {
  var base64Url = "";
  var base64 = "";

  const token = localStorage.getItem("user");
  if (token) {
    base64Url = token.split(".")[1];
    base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  return 0;
};

export const getHeaders = () => {
  const token = getCurrentUser();
  if (token) {
    const headers = {"auth-token": token };
    return headers;
  }

  return  {"auth-token": 0};
};

export const registerService = async (RegisterUser: User) => {
  await axios.post(`https://koi-pod.herokuapp.com/api/user/register`, {
    name: RegisterUser.name,
    email: RegisterUser.email,
    password: RegisterUser.password,
  });
};
