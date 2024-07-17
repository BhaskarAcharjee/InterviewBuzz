import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import { createQuestion } from "../../services/api";

const BehavioralQuestionCreate = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  const addNewQuestion = async (newQuestion) => {
    try {
      const response = await createQuestion(newQuestion);
      setQuestions([...questions, response.data]);
      navigate("/behavioral");
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <QuestionForm
      saveQuestion={addNewQuestion}
      pageTitle="Create New Behavioral Question"
      buttonText="Save Question"
    />
  );
};

export default BehavioralQuestionCreate;
