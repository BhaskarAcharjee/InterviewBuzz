import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import { showToast } from "../../utils/showToast";

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

  const filteredQuestions = (
    isUserLoggedIn ? questions : sampleQuestions
  ).filter((q) => filter === "all" || (filter === "favorites" && q.isFavorite));

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

  const handleSaveQuestion = async (question) => {
    if (!isUserLoggedIn) {
      showToast(false, "Please log in to save the question.");
      return;
    }

    try {
      if (question._id) {
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

  const deleteQuestionById = async (id) => {
    try {
      await deleteQuestion(id);
      setQuestions(questions.filter((q) => q._id !== id));
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  const toggleFavorite = async (id) => {
    const question = (isUserLoggedIn ? questions : sampleQuestions).find(
      (q) => q._id === id
    );
    const updatedQuestion = { ...question, isFavorite: !question.isFavorite };
    await handleSaveQuestion(updatedQuestion);
  };

  const handleCardClick = (id) => {
    navigate(`/behavioral/${id}`);
  };

  const handleFavoriteClick = (e, id) => {
    e.stopPropagation();
    if (!isUserLoggedIn) {
      showToast(false, "Please log in to favorite a question.");
      return;
    }
    toggleFavorite(id);
  };

  const handleEditClick = (e, id) => {
    e.stopPropagation();
    if (!isUserLoggedIn) {
      showToast(false, "Please log in to edit a question.");
      return;
    }
    navigate(`/behavioral/edit/${id}`);
  };

  const handleDeleteClick = (e, id) => {
    e.stopPropagation();
    if (!isUserLoggedIn) {
      showToast(false, "Please log in to delete a question.");
      return;
    }
    deleteQuestionById(id);
  };

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

      {filteredQuestions.length === 0 ? (
        <div className="no-questions">
          {isBehavioralLoading ? (
            <Loader />
          ) : (
            "Nothing to display. Create new questions or import existing ones."
          )}
        </div>
      ) : (
        <div className={`question-list ${view}`}>
          {filteredQuestions.map((q) => (
            <div
              key={q._id}
              className="card"
              onClick={() => handleCardClick(q._id)}
            >
              <div className="card-header">
                <h4>{q.question}</h4>
              </div>
              <div className="card-icons">
                <div className="left-icons">
                  <FaEdit
                    className="edit-icon"
                    onClick={(e) => handleEditClick(e, q._id)}
                  />
                  <FaTrash
                    className="delete-icon"
                    onClick={(e) => handleDeleteClick(e, q._id)}
                  />
                </div>
                <FaHeart
                  className={`favorite-icon ${q.isFavorite ? "active" : ""}`}
                  onClick={(e) => handleFavoriteClick(e, q._id)}
                />
              </div>
            </div>
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
