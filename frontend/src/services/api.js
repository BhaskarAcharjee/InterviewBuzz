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
