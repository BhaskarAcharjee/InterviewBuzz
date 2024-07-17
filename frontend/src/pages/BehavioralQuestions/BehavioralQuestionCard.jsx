import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import "./BehavioralQuestions.css";

const BehavioralQuestionCard = ({
  _id,
  question,
  isFavorite,
  toggleFavorite,
  onDelete,
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

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(_id);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-header">
        <h4>{question}</h4>
      </div>
      <div className="card-icons">
        <div className="left-icons">
          <FaEdit className="edit-icon" onClick={handleEditClick} />
          <FaTrash className="delete-icon" onClick={handleDeleteClick} />
        </div>
        <FaHeart
          className={`favorite-icon ${isFavorite ? "active" : ""}`}
          onClick={handleFavoriteClick}
        />
      </div>
    </div>
  );
};

export default BehavioralQuestionCard;
