import React, { createContext, useState, useEffect } from "react";
import { getDreamCompanies, getQuestions } from "../services/api";

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  // Behavioral Question Fetch
  const [questions, setQuestions] = useState([]);
  const [isBehavioralLoading, setIsBehavioralLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getQuestions();
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setIsBehavioralLoading(false);
      }
    };

    fetchData();
  }, []);

  // Dream Company Fetch
  const [dreamCompanies, setDreamCompanies] = useState([]);
  const [isDreamCompanyLoading, setIsDreamCompanyLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDreamCompanies();
        setDreamCompanies(response.data);
      } catch (error) {
        console.error("Error fetching dream companies:", error);
      } finally {
        setIsDreamCompanyLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <QuestionsContext.Provider
      value={{
        // Behavioral
        questions,
        setQuestions,
        isBehavioralLoading,
        // Dream Company
        dreamCompanies,
        setDreamCompanies,
        isDreamCompanyLoading,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
