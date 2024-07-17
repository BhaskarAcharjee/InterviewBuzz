import React from "react";
import { useQuestions } from "../../context/BehavioralQuestionsContext";
import QuestionForm from "../../components/QuestionForm/QuestionForm";

const BehavioralQuestionCreate = () => {
  const { addNewQuestion } = useQuestions();

  return (
    <QuestionForm
      saveQuestion={addNewQuestion}
      pageTitle="Create New Behavioral Question"
      buttonText="Save Question"
      onsaveNavigate="/behavioral"
    />
  );
};

export default BehavioralQuestionCreate;
