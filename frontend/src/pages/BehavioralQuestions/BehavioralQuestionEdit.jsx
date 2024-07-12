import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MarkdownEditor from "@uiw/react-md-editor";
import { useQuestions } from "../../context/BehavioralQuestionsContext";
import "./BehavioralQuestions.css";

const BehavioralQuestionEdit = () => {
  const { id } = useParams();
  const { questions, editQuestion } = useQuestions();
  const navigate = useNavigate();
  const questionToEdit = questions.find((q) => q._id === id);

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
      _id: id,
      question,
      answer,
    };
    editQuestion(updatedQuestion);
    navigate("/behavioral");
  };

  if (!questionToEdit) {
    return <div>Question not found.</div>;
  }

  return (
    <div className="edit-question-container">
      <h1>Edit Behavioral Question</h1>
      <input
        type="text"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="input"
      />
      <MarkdownEditor
        height={600}
        value={answer}
        onChange={(value) => setAnswer(value)}
      />
      <button className="save-btn" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
};

export default BehavioralQuestionEdit;
