import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaEdit } from "react-icons/fa";
import "./BehavioralQuestions.css";

const BehavioralQuestionCard = ({
  id,
  question,
  answer,
  isFavorite,
  onEdit,
  toggleFavorite,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/behavioral/${id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite();
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    navigate(`/behavioral/edit/${id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-header">
        <h3>{question}</h3>
        <div className="card-icons">
          <FaHeart
            className={`favorite-icon ${isFavorite ? "active" : ""}`}
            onClick={handleFavoriteClick}
          />
          <FaEdit className="edit-icon" onClick={handleEditClick} />
        </div>
      </div>
    </div>
  );
};

export default BehavioralQuestionCard;
