import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./BehavioralQuestions.css";

const BehavioralQuestionCard = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  const handleBackClick = () => {
    setExpanded(false);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className={`card ${expanded ? "expanded" : ""}`}
      onClick={!expanded ? handleCardClick : undefined}
    >
      <div className="card-header">
        <h3>{question}</h3>
        <FaHeart
          className={`favorite-icon ${isFavorite ? "active" : ""}`}
          onClick={handleFavoriteClick}
        />
      </div>
      {expanded && (
        <>
          <p>{answer}</p>
          <div className="navigation">
            <button className="nav-btn" onClick={handleBackClick}>
              Back to Questions
            </button>
            <button className="nav-btn">
              <FaArrowLeft />
            </button>
            <button className="nav-btn">
              <FaArrowRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BehavioralQuestionCard;
