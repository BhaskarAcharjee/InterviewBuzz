import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaEdit } from "react-icons/fa";
import "./BehavioralQuestions.css";

const BehavioralQuestionCard = ({
  _id,
  question,
  isFavorite,
  onEdit,
  toggleFavorite,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/behavioral/${_id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite();
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    navigate(`/behavioral/edit/${_id}`);
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
