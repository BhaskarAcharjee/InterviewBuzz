import React, { useState } from "react";
import "./CommonModal.css";

const CommonModal = ({ isOpen, onClose, onSubmit, title, children }) => {
  const handleSubmit = () => {
    onSubmit();
    // onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        {children}
        <div className="modal-buttons">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
