import axios from "axios";
import Jwt_decode from "jwt-decode";
import { User } from "../models/models";
const API_URL = "https://koi-podcast.onrender.com"
//const API_URL = "http://localhost:5000"

export const loginService = async (loginUser: User) => {
  await axios
    .post(`${API_URL}/api/user/login`, {
      email: loginUser.email,
      password: loginUser.password,
    })
    .then((res) => localStorage.setItem("token", JSON.stringify(res.data)))
    .catch((err) => console.error(err));
};

export const registerService = async (RegisterUser: User) => {
  await axios.post(`${API_URL}/api/user/register`, {
    name: RegisterUser.name,
    email: RegisterUser.email,
    password: RegisterUser.password,
  })
    .catch((err) => console.error(err));
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("token");
  if (userStr) return JSON.parse(userStr);
  return null;
};

export const getCurrentUserId = () => {
  var base64Url = "";
  var base64 = "";

  const token = localStorage.getItem("token");
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

function validateToken(key: string) {
  const token = JSON.parse(localStorage.getItem(key) || "{}");
  const accessToken = token.token;
  try {
      let tokenData: any = Jwt_decode(accessToken);
      if (Date.now() >= tokenData?.exp * 1000)
          return false;
      return accessToken;
  } catch (err: any) {
      return false;
  }
}

export const token = () => { return validateToken("token") };