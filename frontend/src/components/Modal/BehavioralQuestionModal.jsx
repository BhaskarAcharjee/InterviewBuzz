import React, { useState } from "react";
import "./BehavioralQuestionModal.css";

const BehavioralQuestionModal = ({ isOpen, onClose, onImport }) => {
  const [importText, setImportText] = useState("");
  const [error, setError] = useState("");

  const handleImport = () => {
    // Split the text into individual questions and answers
    const questionsArray = importText
      .split("\n\n") // Split by double new lines to separate each question block
      .map((block) => {
        const lines = block.split("\n"); // Split each block into lines
        if (lines.length < 2 || !lines[0].startsWith("Q. ") || !lines[1].startsWith("Ans. ")) {
          setError(
            "Please import in the correct format:\nQ. <Question>\nAns. <Answer>\n\nQ. <Question>\nAns. <Answer>"
          );
          return null;
        }
        const question = lines[0].replace("Q. ", "").trim();
        const answer = lines[1].replace("Ans. ", "").trim();
        return { question, answer };
      });

    // Check for any null values which indicates a format error
    if (questionsArray.includes(null)) {
      return;
    }

    onImport(questionsArray);
    setImportText("");
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Import Questions</h2>
        {error && <div className="error-message">{error}</div>}
        <textarea
          value={importText}
          onChange={(e) => setImportText(e.target.value)}
          placeholder="Enter questions text..."
        />
        <div className="modal-buttons">
          <button className="import-btn" onClick={handleImport}>
            Import
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BehavioralQuestionModal;
