import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarkdownEditor from "@uiw/react-md-editor";
import "./BehavioralQuestions.css";

const BehavioralQuestionCreate = ({ onSave }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    const newQuestion = {
      id: Date.now(),
      question,
      answer,
    };
    onSave(newQuestion);
    navigate("/behavioral");
  };

  return (
    <div className="create-question-container">
      <h1>Create New Behavioral Question</h1>
      <input
        type="text"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="input"
      />
      <MarkdownEditor value={answer} onChange={(value) => setAnswer(value)} />
      <button className="save-btn" onClick={handleSave}>
        Save Question
      </button>
    </div>
  );
};

export default BehavioralQuestionCreate;
