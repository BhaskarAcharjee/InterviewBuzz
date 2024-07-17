import React from "react";
import { useParams } from "react-router-dom";
import { useQuestions } from "../../context/BehavioralQuestionsContext";
import QuestionForm from "../../components/QuestionForm/QuestionForm";

const BehavioralQuestionEdit = () => {
  const { id } = useParams();
  const { questions, editQuestion } = useQuestions();
  const questionToEdit = questions.find((q) => q._id === id);

  if (!questionToEdit) {
    return <div>Question not found.</div>;
  }

  return (
    <QuestionForm
      id={id} // Pass id to QuestionForm
      initialQuestion={questionToEdit.question}
      initialAnswer={questionToEdit.answer}
      saveQuestion={editQuestion}
      pageTitle="Edit Behavioral Question"
      buttonText="Save Changes"
      onsaveNavigate="/behavioral"
    />
  );
};

export default BehavioralQuestionEdit;
