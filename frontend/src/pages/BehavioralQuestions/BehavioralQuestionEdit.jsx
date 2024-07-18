import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import { updateQuestion } from "../../services/api";
import { QuestionsContext } from "../../context/QuestionsContext";

const BehavioralQuestionEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { questions, setQuestions } = useContext(QuestionsContext);
  const [questionToEdit, setQuestionToEdit] = useState(null);

  useEffect(() => {
    const question = questions.find((q) => q._id === id);
    setQuestionToEdit(question);
  }, [id, questions]);

  const editQuestion = async (updatedQuestion) => {
    try {
      const response = await updateQuestion(updatedQuestion._id, updatedQuestion);
      setQuestions(
        questions.map((q) => (q._id === updatedQuestion._id ? response.data : q))
      );
      navigate("/behavioral");
    } catch (error) {
      console.error("Error editing question:", error);
    }
  };

  if (!questionToEdit) {
    return <div>Question not found.</div>;
  }

  return (
    <QuestionForm
      id={id}
      initialQuestion={questionToEdit.question}
      initialAnswer={questionToEdit.answer}
      saveQuestion={editQuestion}
      pageTitle="Edit Behavioral Question"
      buttonText="Save Changes"
    />
  );
};

export default BehavioralQuestionEdit;
