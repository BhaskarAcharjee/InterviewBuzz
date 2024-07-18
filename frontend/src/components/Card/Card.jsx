import React from "react";
import "./Card.css";
import { FaEdit, FaTrash, FaChevronCircleLeft } from "react-icons/fa";

const Card = ({ label, title, question, answer, onEdit, onDelete }) => {
  return (
    <div className="card-box">
      <div className="card-box-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
        </svg>
      </div>
      <div className="card-box-label">{label}</div>
      <div className="card-box-title">{title}</div>

      <div className="card-box-content">
        <div className="card-box-question">{question}</div>
        <div className="card-box-answer">{answer}</div>
      </div>

      <div className="studio-button">
        <div className="studio-button-icon">
          <FaChevronCircleLeft className="studio-circle-icon" />
        </div>
        <div className="studio-button-label">
          <FaEdit className="studio-edit-icon" onClick={onEdit} />
          <FaTrash className="studio-delete-icon" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default Card;
