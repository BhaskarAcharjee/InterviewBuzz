import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import { createQuestion, updateQuestion } from "../../services/api";
import { QuestionsContext } from "../../context/QuestionsContext";
import { isLoggedIn } from "../../services/auth";
import { showToast } from "../../utils/showToast";

const BehavioralQuestionUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { questions, setQuestions } = useContext(QuestionsContext);
  const [questionToEdit, setQuestionToEdit] = useState(null);
  const isUserLoggedIn = isLoggedIn();

  useEffect(() => {
    if (id) {
      const question = questions.find((q) => q._id === id);
      setQuestionToEdit(question);
    }
  }, [id, questions]);

  const handleSaveQuestion = async (question) => {
    if (!isUserLoggedIn) {
      showToast(false, "Please log in to save the question.");
      navigate("/behavioral");
      return;
    }

    try {
      if (id) {
        // Edit existing question
        const response = await updateQuestion(question._id, question);
        setQuestions(
          questions.map((q) => (q._id === question._id ? response.data : q))
        );
      } else {
        // Create new question
        const response = await createQuestion(question);
        setQuestions([...questions, response.data]);
      }
      navigate("/behavioral");
    } catch (error) {
      console.error("Error saving question:", error);
    }
  };

  return (
    <QuestionForm
      id={id}
      initialQuestion={questionToEdit ? questionToEdit.question : ""}
      initialAnswer={questionToEdit ? questionToEdit.answer : ""}
      saveQuestion={handleSaveQuestion}
      pageTitle={
        id ? "Edit Behavioral Question" : "Create New Behavioral Question"
      }
      buttonText={id ? "Save Changes" : "Save Question"}
    />
  );
};

export default BehavioralQuestionUpdate;
