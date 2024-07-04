import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BehavioralQuestionCard from "./BehavioralQuestionCard";
import "./BehavioralQuestions.css";

const BehavioralQuestionList = ({
  questions,
  onEdit,
  onDelete,
  toggleFavorite,
}) => {
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const handleCreateNewClick = () => {
    navigate("/behavioral/create");
  };

  const handleViewToggle = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const filteredQuestions = questions.filter(
    (q) => filter === "all" || (filter === "favorites" && q.isFavorite)
  );

  const handleImportQuestions = () => {
    // Implement your import logic here
    alert("Implement import functionality");
  };

  const handleExportQuestions = () => {
    // Implement your export logic here
    alert("Implement export functionality");
  };

  return (
    <div className="behavioral-questions-container">
      <h1>Behavioral Questions</h1>
      <p>Prepare for the most common behavioral questions...</p>
      <div className="button-container">
        <button className="create-new-btn" onClick={handleCreateNewClick}>
          Create New Question
        </button>
        <div className="import-export-buttons">
          <button className="import-btn" onClick={handleImportQuestions}>
            Import
          </button>
          <button className="export-btn" onClick={handleExportQuestions}>
            Export
          </button>
        </div>
      </div>
      <div className="filter-options-container">
        <div className="filter-options">
          <div
            className={`filter-tab ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </div>
          <div
            className={`filter-tab ${filter === "favorites" ? "active" : ""}`}
            onClick={() => handleFilterChange("favorites")}
          >
            Favorites
          </div>
        </div>
        <button className="toggle-view-btn" onClick={handleViewToggle}>
          {view === "grid" ? "Switch to List View" : "Switch to Grid View"}
        </button>
      </div>
      <div className={`question-list ${view}`}>
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => (
            <BehavioralQuestionCard
              key={q._id}
              _id={q._id}
              question={q.question}
              isFavorite={q.isFavorite}
              onEdit={() => onEdit(q)}
              onDelete={() => onDelete(q._id)}
              toggleFavorite={() => toggleFavorite(q._id)}
            />
          ))
        ) : (
          <div className="no-questions">Nothing to display</div>
        )}
      </div>
    </div>
  );
};

export default BehavioralQuestionList;
