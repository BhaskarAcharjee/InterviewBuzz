import axios from "axios";
import { getApiUrl } from "../utils/getApiUrl";

const API_URL = getApiUrl();

// Helper function to get token from local storage
const getToken = () => localStorage.getItem("token");

// Set default axios headers with token if available
const setAuthHeaders = () => {
  const token = getToken();
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

// Behavioral APIs
export const getQuestions = () => {
  setAuthHeaders();
  return axios.get(`${API_URL}/behavioral-questions`);
};

export const createQuestion = (data) => {
  setAuthHeaders();
  return axios.post(`${API_URL}/behavioral-questions`, data);
};

export const importQuestions = (questions) => {
  setAuthHeaders();
  return axios.post(`${API_URL}/behavioral-questions/import`, { questions });
};

export const getQuestion = (id) => {
  setAuthHeaders();
  return axios.get(`${API_URL}/behavioral-questions/${id}`);
};

export const updateQuestion = (id, data) => {
  setAuthHeaders();
  return axios.patch(`${API_URL}/behavioral-questions/${id}`, data);
};

export const deleteQuestion = (id) => {
  setAuthHeaders();
  return axios.delete(`${API_URL}/behavioral-questions/${id}`);
};

// Dream Company APIs
export const getDreamCompanies = () => {
  setAuthHeaders();
  return axios.get(`${API_URL}/dream-companies`);
};

export const createDreamCompany = (data) => {
  setAuthHeaders();
  return axios.post(`${API_URL}/dream-companies`, data);
};

export const getDreamCompany = (id) => {
  setAuthHeaders();
  return axios.get(`${API_URL}/dream-companies/${id}`);
};

export const updateDreamCompany = (id, data) => {
  setAuthHeaders();
  return axios.patch(`${API_URL}/dream-companies/${id}`, data);
};

export const deleteDreamCompany = (id) => {
  setAuthHeaders();
  return axios.delete(`${API_URL}/dream-companies/${id}`);
};
