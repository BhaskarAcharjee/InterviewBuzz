import axios from "axios";

const API_URL =
  "https://interviewgenius.onrender.com/api" || 
  "http://localhost:5000/api";

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
