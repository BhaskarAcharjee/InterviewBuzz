import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import routes from "./routes/routes";
import "./App.css";

const App = () => {
  const initialQuestions = [
    {
      id: 1,
      question: "Tell me about a time you faced a challenge.",
      answer: "I faced a challenge when...",
      isFavorite: false,
    },
    {
      id: 2,
      question: "How do you handle stress?",
      answer: "I handle stress by...",
      isFavorite: false,
    },
  ];

  const [questions, setQuestions] = useState(initialQuestions);

  const addNewQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const editQuestion = (editedQuestion) => {
    setQuestions(
      questions.map((q) => (q.id === editedQuestion.id ? editedQuestion : q))
    );
  };

  const toggleFavorite = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, isFavorite: !q.isFavorite } : q
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <main className="main-content">
          {routes(questions, addNewQuestion, editQuestion, toggleFavorite)}
        </main>
      </div>
    </Router>
  );
};

export default App;
