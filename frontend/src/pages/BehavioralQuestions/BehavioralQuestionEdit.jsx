import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import { getQuestions, updateQuestion } from "../../services/api";

const BehavioralQuestionEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [questionToEdit, setQuestionToEdit] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getQuestions();
        setQuestions(response.data);
        const question = response.data.find((q) => q._id === id);
        setQuestionToEdit(question);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [id]);

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
