import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import "./QuestionForm.css";

const QuestionForm = ({
  id,
  initialQuestion = "",
  initialAnswer = "",
  saveQuestion,
  pageTitle = "Create Question",
  buttonText = "Save Question",
}) => {
  const [question, setQuestion] = useState(initialQuestion);
  const [answer, setAnswer] = useState(initialAnswer);
  const navigate = useNavigate();

  useEffect(() => {
    if (initialQuestion && initialAnswer) {
      setQuestion(initialQuestion);
      setAnswer(initialAnswer);
    }
  }, [initialQuestion, initialAnswer]);

  useEffect(() => {
    if (id) {
      setQuestion(initialQuestion);
      setAnswer(initialAnswer);
    }
  }, [id, initialQuestion, initialAnswer]);

  const handleSave = () => {
    const newQuestion = {
      _id: id || Date.now().toString(),
      question,
      answer,
    };
    console.log("Saving question:", newQuestion);
    saveQuestion(newQuestion);
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
