import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import "./QuestionForm.css";

const QuestionForm = ({
  id, // Ensure id is passed as a prop
  initialQuestion = "",
  initialAnswer = "",
  saveQuestion,
  pageTitle = "Create Question",
  buttonText = "Save Question",
  onsaveNavigate = "/home", // Default path
}) => {
  const [question, setQuestion] = useState(initialQuestion);
  const [answer, setAnswer] = useState(initialAnswer);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (initialQuestion && initialAnswer) {
      setQuestion(initialQuestion);
      setAnswer(initialAnswer);
    }
  }, [initialQuestion, initialAnswer]);

  useEffect(() => {
    // Update local state when id prop changes
    if (id) {
      setQuestion(initialQuestion);
      setAnswer(initialAnswer);
    }
  }, [id, initialQuestion, initialAnswer]);

  const handleSave = () => {
    const newQuestion = {
      _id: id || Date.now(), // Use _id to match backend expectation
      question,
      answer,
    };
    console.log("Saving question:", newQuestion); // Debug statement
    saveQuestion(newQuestion);
    navigate(onsaveNavigate);
  };

  return (
    <div className="question-form-container">
      <h1>{pageTitle}</h1>
      <input
        type="text"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="input"
      />
      <MDEditor
        height={600}
        value={answer}
        onChange={(value) => setAnswer(value)}
      />
      <button className="save-btn" onClick={handleSave}>
        {buttonText}
      </button>
    </div>
  );
};

export default QuestionForm;
