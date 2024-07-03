import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BehavioralQuestionCard from "./BehavioralQuestionCard";
import "./BehavioralQuestions.css";

const BehavioralQuestionList = ({ questions }) => {
  const [view, setView] = useState("grid");
  const navigate = useNavigate();

  const handleCreateNewClick = () => {
    navigate("/behavioral/create");
  };

  const handleViewToggle = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  return (
    <div className="behavioral-questions-container">
      <h1>Behavioral Questions</h1>
      <p>Prepare for the most common behavioral questions...</p>
      <button className="create-new-btn" onClick={handleCreateNewClick}>
        Create New Question
      </button>
      <div className="filter-options">
        <button className="tab">All</button>
        <button className="tab">Favorites</button>
        <button className="toggle-view-btn" onClick={handleViewToggle}>
          {view === "grid" ? "Switch to List View" : "Switch to Grid View"}
        </button>
      </div>
      <div className={`question-list ${view}`}>
        {questions.map((q) => (
          <BehavioralQuestionCard
            key={q.id}
            question={q.question}
            answer={q.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default BehavioralQuestionList;
