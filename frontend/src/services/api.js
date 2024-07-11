import axios from "axios";
import { getApiUrl } from "../utils/getApiUrl";

const API_URL = getApiUrl();

// Behavioral APIs
export const getQuestions = () => axios.get(`${API_URL}/behavioral-questions`);
export const createQuestion = (data) =>
  axios.post(`${API_URL}/behavioral-questions`, data);
export const importQuestions = (questions) => {
  return axios.post(`${API_URL}/behavioral-questions/import`, { questions });
};
export const getQuestion = (id) =>
  axios.get(`${API_URL}/behavioral-questions/${id}`);
export const updateQuestion = (id, data) =>
  axios.patch(`${API_URL}/behavioral-questions/${id}`, data);
export const deleteQuestion = (id) =>
  axios.delete(`${API_URL}/behavioral-questions/${id}`);

// Dream Company APIs
export const getDreamCompanies = () => axios.get(`${API_URL}/dream-companies`);
export const createDreamCompany = (data) =>
  axios.post(`${API_URL}/dream-companies`, data);
export const getDreamCompany = (id) =>
  axios.get(`${API_URL}/dream-companies/${id}`);
export const updateDreamCompany = (id, data) =>
  axios.patch(`${API_URL}/dream-companies/${id}`, data);
export const deleteDreamCompany = (id) =>
  axios.delete(`${API_URL}/dream-companies/${id}`);
