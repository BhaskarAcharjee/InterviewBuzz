import React, { createContext, useState, useEffect, useContext } from "react";
import {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "../services/api";

const BehavioralQuestionsContext = createContext();

export const useQuestions = () => useContext(BehavioralQuestionsContext);

export const ContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await getQuestions();
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const addNewQuestion = async (newQuestion) => {
    try {
      const response = await createQuestion(newQuestion);
      setQuestions([...questions, response.data]);
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  const editQuestion = async (updatedQuestion) => {
    try {
      if (!updatedQuestion._id) {
        throw new Error("Missing _id in updatedQuestion");
      }
      const response = await updateQuestion(
        updatedQuestion._id,
        updatedQuestion
      );
      setQuestions(
        questions.map((q) =>
          q._id === updatedQuestion._id ? response.data : q
        )
      );
    } catch (error) {
      console.error("Error editing question:", error);
    }
  };

  const deleteQuestionById = async (id) => {
    try {
      await deleteQuestion(id);
      setQuestions(questions.filter((q) => q._id !== id));
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  const toggleFavorite = async (id) => {
    const question = questions.find((q) => q._id === id);
    const updatedQuestion = { ...question, isFavorite: !question.isFavorite };
    await editQuestion(updatedQuestion);
  };

  return (
    <BehavioralQuestionsContext.Provider
      value={{
        questions,
        setQuestions,
        fetchQuestions,
        addNewQuestion,
        editQuestion,
        deleteQuestionById,
        toggleFavorite,
      }}
    >
      {children}
    </BehavioralQuestionsContext.Provider>
  );
};
