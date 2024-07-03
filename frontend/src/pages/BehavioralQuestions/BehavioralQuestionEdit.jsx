import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MarkdownEditor from "@uiw/react-md-editor";
import "./BehavioralQuestions.css";

const BehavioralQuestionEdit = ({ questions, onSave }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionToEdit = questions.find((q) => q.id === parseInt(id));
  
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (questionToEdit) {
      setQuestion(questionToEdit.question);
      setAnswer(questionToEdit.answer);
    }
  }, [questionToEdit]);

  const handleSave = () => {
    const updatedQuestion = {
      id: parseInt(id),
      question,
      answer,
    };
    onSave(updatedQuestion);
    navigate("/behavioral");
  };

  if (!questionToEdit) {
    return <div>Question not found.</div>;
  }

  return (
    <div className="create-question-container">
      <h1>Edit Behavioral Question</h1>
      <input
        type="text"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="input"
      />
      <MarkdownEditor value={answer} onChange={(value) => setAnswer(value)} />
      <button className="save-btn" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
};

export default BehavioralQuestionEdit;
