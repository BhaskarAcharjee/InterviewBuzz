import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import "./BehavioralQuestions.css";
import { isLoggedIn } from "../../services/auth";
import { showToast } from "../../utils/showToast";

const BehavioralQuestionCard = ({
  _id,
  question,
  isFavorite,
  toggleFavorite,
  onDelete,
}) => {
  const navigate = useNavigate();
  const isUserLoggedIn = isLoggedIn(); // Check if user is logged in

  const handleCardClick = () => {
    navigate(`/behavioral/${_id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (!isUserLoggedIn) {
      showToast(false, "Please log in to favourite a question.");
      return;
    }
    toggleFavorite();
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    if (!isUserLoggedIn) {
      showToast(false, "Please log in to edit a question.");
      return;
    }
    navigate(`/behavioral/edit/${_id}`);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (!isUserLoggedIn) {
      showToast(false, "Please log in to delete a question.");
      return;
    }
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
