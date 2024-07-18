// BehavioralQuestionList.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BehavioralQuestionCard from "./BehavioralQuestionCard";
import "./BehavioralQuestions.css";
import BehavioralQuestionModal from "../../components/Modal/BehavioralQuestionModal";
import TabSwitch from "../../components/TabSwitch/TabSwitch";
import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  importQuestions,
} from "../../services/api";
import { sampleQuestions } from "../../constants/behavioral";
import { isLoggedIn } from "../../services/auth";
import Loader from "../../components/Loader/Loader";
import { QuestionsContext } from "../../context/QuestionsContext";

const BehavioralQuestionList = () => {
  const { questions, setQuestions, isBehavioralLoading } =
    useContext(QuestionsContext);
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("all");
  const [exportContent, setExportContent] = useState("");
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  const options = [
    { label: "All", direction: "left", value: "all" },
    { label: "Favorites", direction: "right", value: "favorites" },
  ];
  const [activeTab, setActiveTab] = useState(options[0]);

  useEffect(() => {
    setIsUserLoggedIn(isLoggedIn()); // Check if user is logged in
  }, []);

  useEffect(() => {
    prepareExportContent(); // Function to prepare export content
  }, [questions]);

  const handleCreateNewClick = () => {
    navigate("/behavioral/create");
  };

  const handleViewToggle = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  const handleOptionClick = (option) => {
    setActiveTab(option);
    setFilter(option.value);
  };

  const filteredQuestions = questions.filter(
    (q) => filter === "all" || (filter === "favorites" && q.isFavorite)
  );

  const prepareExportContent = () => {
    const formattedContent = filteredQuestions
      .map((q) => {
        return `Q. ${q.question}\nAns. ${q.answer}\n\n`;
      })
      .join("");
    setExportContent(formattedContent);
  };

  const handleImportQuestions = async (questionsArray) => {
    try {
      const response = await importQuestions(questionsArray);
      setQuestions([...questions, ...response.data]);
    } catch (error) {
      console.error("Error importing questions:", error);
    }
  };

  const handleExportQuestions = () => {
    const element = document.createElement("a");
    const file = new Blob([exportContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "questions_export.txt";
    document.body.appendChild(element);
    element.click();
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

  // Conditionally render sample data for unauthorized users
  const renderQuestions = isUserLoggedIn ? filteredQuestions : sampleQuestions;

  return (
    <div className="behavioral-questions-container">
      <h1>Behavioral Questions</h1>
      <p>Prepare for the most common behavioral questions...</p>
      <div className="button-container">
        <button className="gradient-button" onClick={handleCreateNewClick}>
          Create New Question
        </button>
        <div className="import-export-buttons">
          <button
            className="design-button"
            onClick={() => setIsImportModalOpen(true)}
          >
            Import
          </button>
          <button className="design-button" onClick={handleExportQuestions}>
            Export
          </button>
        </div>
      </div>
      <div className="filter-options-container">
        <TabSwitch
          options={options}
          activeOption={activeTab}
          onOptionClick={handleOptionClick}
        />
        <button className="toggle-view-btn" onClick={handleViewToggle}>
          {view === "grid" ? "Switch to List View" : "Switch to Grid View"}
        </button>
      </div>

      {renderQuestions.length === 0 ? (
        <div className="no-questions">
          {isBehavioralLoading ? (
            <Loader />
          ) : (
            "Nothing to display. Create new questions or import existing ones."
          )}
        </div>
      ) : (
        <div className={`question-list ${view}`}>
          {renderQuestions.map((q) => (
            <BehavioralQuestionCard
              key={q._id}
              _id={q._id}
              question={q.question}
              isFavorite={q.isFavorite}
              onEdit={() => editQuestion(q)}
              onDelete={() => deleteQuestionById(q._id)}
              toggleFavorite={() => toggleFavorite(q._id)}
            />
          ))}
        </div>
      )}

      <BehavioralQuestionModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImportQuestions}
      />
    </div>
  );
};

export default BehavioralQuestionList;
