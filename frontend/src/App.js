import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import routes from './routes/routes';
import './App.css';
import { getQuestions, createQuestion, updateQuestion, deleteQuestion } from './services/api';

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await getQuestions();
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const addNewQuestion = async (newQuestion) => {
    try {
      const response = await createQuestion(newQuestion);
      setQuestions([...questions, response.data]);
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  const editQuestion = async (updatedQuestion) => {
    try {
      const response = await updateQuestion(updatedQuestion._id, updatedQuestion);
      setQuestions(
        questions.map((q) => (q._id === updatedQuestion._id ? response.data : q))
      );
    } catch (error) {
      console.error('Error editing question:', error);
    }
  };

  const deleteQuestionById = async (id) => {
    try {
      await deleteQuestion(id);
      setQuestions(questions.filter((q) => q._id !== id));
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const toggleFavorite = async (id) => {
    const question = questions.find((q) => q._id === id);
    const updatedQuestion = { ...question, isFavorite: !question.isFavorite };
    await editQuestion(updatedQuestion);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <main className="main-content">
          {routes(questions, addNewQuestion, editQuestion, deleteQuestionById, toggleFavorite)}
        </main>
      </div>
    </Router>
  );
};

export default App;
