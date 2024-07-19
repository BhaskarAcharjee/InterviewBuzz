import React, { useState } from "react";
import CommonModal from "./CommonModal";
import { showToast } from "../../utils/showToast";

const BehavioralQuestionModal = ({ isOpen, onClose, onImport }) => {
  const [importText, setImportText] = useState("");
  const [error, setError] = useState("");

  const handleImport = () => {
    // Split the text into individual questions and answers
    const questionsArray = importText
      .split("\n\n") // Split by double new lines to separate each question block
      .map((block) => {
        const lines = block.split("\n"); // Split each block into lines
        if (
          lines.length < 2 ||
          !lines[0].startsWith("Q. ") ||
          !lines[1].startsWith("Ans. ")
        ) {
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
    setError(""); // Clear the error message upon successful submission
    onClose();
    showToast(true, "Questions Imported Sucessfully");
  };

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleImport}
      title="Import Questions"
    >
      {error && <div className="error-message">{error}</div>}
      <textarea
        value={importText}
        onChange={(e) => {
          setImportText(e.target.value);
          if (error) setError(""); // Clear error message on input change
        }}
        placeholder="Enter questions text..."
      />
    </CommonModal>
  );
};

export default BehavioralQuestionModal;
