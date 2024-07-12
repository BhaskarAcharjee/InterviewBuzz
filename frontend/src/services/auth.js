import axios from "axios";
import { getApiUrl } from "../utils/getApiUrl";

const API_URL = getApiUrl();

export const login = async (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials);
};

export const register = async (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const isLoggedIn = () => {
  return localStorage.getItem("user");
};
