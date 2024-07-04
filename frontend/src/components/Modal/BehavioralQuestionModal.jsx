import React, { useState } from "react";
import "./BehavioralQuestionModal.css";

const BehavioralQuestionModal = ({ isOpen, onClose, onImport }) => {
  const [importText, setImportText] = useState("");

  const handleImport = () => {
    onImport(importText);
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
