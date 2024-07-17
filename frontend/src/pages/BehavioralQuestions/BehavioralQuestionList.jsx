import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BehavioralQuestionCard from "./BehavioralQuestionCard";
import "./BehavioralQuestions.css";
import BehavioralQuestionModal from "../../components/Modal/BehavioralQuestionModal";
import TabSwitch from "../../components/TabSwitch/TabSwitch";
import { useQuestions } from "../../context/BehavioralQuestionsContext";
import { importQuestions } from "../../services/api";
import { sampleQuestions } from "../../constants/behavioral";
import { isLoggedIn } from "../../services/auth";
import Loader from "../../components/Loader/Loader";

const BehavioralQuestionList = () => {
  const {
    questions,
    setQuestions,
    editQuestion,
    deleteQuestionById,
    toggleFavorite,
    fetchQuestions,
  } = useQuestions();
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("all");
  const [exportContent, setExportContent] = useState("");
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [hasError, setHasError] = useState(false); // Error state
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Logged-in state
  const navigate = useNavigate();

  const options = [
    { label: "All", direction: "left", value: "all" },
    { label: "Favorites", direction: "right", value: "favorites" },
  ];
  const [activeTab, setActiveTab] = useState(options[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchQuestions();
      } catch (error) {
        console.error("Error fetching questions:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
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
      setHasError(true);
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
      <div className={`question-list ${view}`}>
        {renderQuestions.length > 0 ? (
          renderQuestions.map((q) => (
            <BehavioralQuestionCard
              key={q._id}
              _id={q._id}
              question={q.question}
              isFavorite={q.isFavorite}
              onEdit={() => editQuestion(q)}
              onDelete={() => deleteQuestionById(q._id)}
              toggleFavorite={() => toggleFavorite(q._id)}
            />
          ))
        ) : (
          <div className="no-questions">
            {isLoading ? (
              <Loader/>
            ) : (
              "Nothing to display. Create new questions or import existing ones."
            )}
          </div>
        )}
      </div>
      <BehavioralQuestionModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImportQuestions}
      />
    </div>
  );
};

export default BehavioralQuestionList;
