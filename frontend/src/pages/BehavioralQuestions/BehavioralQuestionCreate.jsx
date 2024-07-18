import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import { createQuestion } from "../../services/api";
import { QuestionsContext } from "../../context/QuestionsContext";

const BehavioralQuestionCreate = () => {
  const navigate = useNavigate();
  const { questions, setQuestions } = useContext(QuestionsContext);

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
