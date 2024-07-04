import axios from "axios";

const API_URL =
  "https://interviewgenius.onrender.com/api/behavioral-questions" ||
  "http://localhost:5000/api/behavioral-questions";

export const getQuestions = () => axios.get(API_URL);
export const createQuestion = (data) => axios.post(API_URL, data);
export const importQuestions = (data) => {
  return axios.post(`${API_URL}/import`, { data });
};
export const getQuestion = (id) => axios.get(`${API_URL}/${id}`);
export const updateQuestion = (id, data) =>
  axios.patch(`${API_URL}/${id}`, data);
export const deleteQuestion = (id) => axios.delete(`${API_URL}/${id}`);
