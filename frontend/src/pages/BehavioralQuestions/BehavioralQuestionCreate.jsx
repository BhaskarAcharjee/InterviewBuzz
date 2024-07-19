import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import { createQuestion } from "../../services/api";
import { QuestionsContext } from "../../context/QuestionsContext";
import { isLoggedIn } from "../../services/auth";
import { showToast } from "../../utils/showToast";

const BehavioralQuestionCreate = () => {
  const navigate = useNavigate();
  const { questions, setQuestions } = useContext(QuestionsContext);
  const isUserLoggedIn = isLoggedIn();

  const addNewQuestion = async (newQuestion) => {
    if (!isUserLoggedIn) {
      showToast(false, "Please log in to create a new question.");
      navigate("/behavioral");
      return;
    }
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
