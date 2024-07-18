import React, { useState } from "react";
import "./Flashcards.css";
import TabSwitch from "../../components/TabSwitch/TabSwitch";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { flashcards } from "../../constants/flashcard";
import Card from "../../components/Card/Card";
import QuizCard from "../../components/Card/QuizCard";
import CommonModal from "../../components/Modal/CommonModal";

const Flashcards = () => {
  const options = [
    { label: "Revise", direction: "left" },
    { label: "Quiz", direction: "right" },
  ];

  const [activeTab, setActiveTab] = useState(options[0]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newFlashcard, setNewFlashcard] = useState({
    question: "",
    answer: "",
    type: "revise",
  });

  const categories = Object.keys(flashcards);

  const handleOptionClick = (option) => {
    setActiveTab(option);
    setQuestionIndex(0);
    setAnswered(false);
    setSelectedOption(null);
  };

  const handlePrevCategory = () => {
    setCategoryIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
    setQuestionIndex(0);
    setAnswered(false);
    setSelectedOption(null);
  };

  const handleNextCategory = () => {
    setCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    setQuestionIndex(0);
    setAnswered(false);
    setSelectedOption(null);
  };

  const handleNextQuestion = () => {
    setQuestionIndex(
      (prevIndex) =>
        (prevIndex + 1) % flashcards[categories[categoryIndex]].length
    );
    setAnswered(false);
    setSelectedOption(null);
  };

  const handlePrevQuestion = () => {
    setQuestionIndex(
      (prevIndex) =>
        (prevIndex - 1 + flashcards[categories[categoryIndex]].length) %
        flashcards[categories[categoryIndex]].length
    );
    setAnswered(false);
    setSelectedOption(null);
  };

  const handleCheckAnswer = () => {
    setAnswered(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsEditModal(false);
    setNewFlashcard({ question: "", answer: "", type: "revise" });
  };

  const closeAndResetModal = () => {
    setIsModalOpen(false);
    setIsEditModal(false);
    setEditIndex(null);
    setNewFlashcard({ question: "", answer: "", type: "revise" });
  };

  const handleAddFlashcard = () => {
    // Add newFlashcard to flashcards state or API logic
    closeAndResetModal();
  };

  const handleEditFlashcard = () => {
    // Update flashcard at editIndex in flashcards state or API logic
    closeAndResetModal();
  };

  const openEditModal = (index) => {
    setIsModalOpen(true);
    setIsEditModal(true);
    setEditIndex(index);
    const { question, answer, type } =
      flashcards[categories[categoryIndex]][index];
    setNewFlashcard({ question, answer, type });
  };

  const hasNextQuestion =
    questionIndex < flashcards[categories[categoryIndex]].length - 1;
  const hasPrevQuestion = questionIndex > 0;

  return (
    <div className="flashcards-container">
      <h1 className="flashcards-title">Flashcards</h1>
      <p className="flashcards-description">
        To help prepare for conceptual questions...
      </p>
      <div className="add-button-container">
        <button className="gradient-button" onClick={openModal}>
          Add Flashcard
        </button>
      </div>

      <TabSwitch
        options={options}
        activeOption={activeTab}
        onOptionClick={handleOptionClick}
      />
      <div className="flashcards-categories">
        <div className="flashcards-category">
          <div className="category-header">
            <FaArrowLeft className="nav-icon" onClick={handlePrevCategory} />
            <h2 className="category-title">
              {categories[categoryIndex].toUpperCase()}
            </h2>
            <FaArrowRight className="nav-icon" onClick={handleNextCategory} />
          </div>
          <div className="flashcards-grid">
            {flashcards[categories[categoryIndex]]
              .filter((flashcard) => {
                if (activeTab.label === "Revise" && flashcard.type === "revise")
                  return true;
                if (
                  activeTab.label === "Quiz" &&
                  (flashcard.type === "yesno" || flashcard.type === "mcq")
                )
                  return true;
                return false;
              })
              .map((flashcard, idx) =>
                activeTab.label === "Revise" ? (
                  <Card
                    key={idx}
                    label="Revise"
                    title="Flashcards"
                    question={flashcard.question}
                    answer={flashcard.answer}
                    onEdit={() => openEditModal(idx)}
                  />
                ) : (
                  activeTab.label === "Quiz" &&
                  idx === questionIndex && (
                    <QuizCard
                      key={idx}
                      question={flashcard.question}
                      options={flashcard.options}
                      correct={flashcard.correctAnswer}
                      onNextQuestion={handleNextQuestion}
                      onPrevQuestion={handlePrevQuestion}
                      onCheckAnswer={handleCheckAnswer}
                      answered={answered}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      hasNext={hasNextQuestion}
                      hasPrev={hasPrevQuestion}
                    />
                  )
                )
              )}
          </div>
        </div>
      </div>

      <CommonModal
        isOpen={isModalOpen}
        onClose={closeAndResetModal}
        onSubmit={isEditModal ? handleEditFlashcard : handleAddFlashcard}
        title={isEditModal ? "Edit Flashcard" : "Add Flashcard"}
      >
        <div className="modal-form">
          <textarea
            value={newFlashcard.question}
            placeholder="Question"
            onChange={(e) =>
              setNewFlashcard({ ...newFlashcard, question: e.target.value })
            }
          />
          {newFlashcard.type === "revise" && (
            <textarea
              value={newFlashcard.answer}
              placeholder="Answer"
              onChange={(e) =>
                setNewFlashcard({ ...newFlashcard, answer: e.target.value })
              }
            />
          )}
          {newFlashcard.type === "mcq" && (
            <>
              {[...Array(4)].map((_, i) => (
                <input
                  key={i}
                  value={newFlashcard.options?.[i] || ""}
                  placeholder={`Option ${i + 1}`}
                  onChange={(e) =>
                    setNewFlashcard({
                      ...newFlashcard,
                      options: {
                        ...newFlashcard.options,
                        [i]: e.target.value,
                      },
                    })
                  }
                />
              ))}
            </>
          )}
          <div className="toggle-options">
            <label
              className={`toggle-option ${
                newFlashcard.type === "revise" ? "active" : ""
              }`}
              onClick={() =>
                setNewFlashcard({ ...newFlashcard, type: "revise" })
              }
            >
              Revise
            </label>
            <label
              className={`toggle-option ${
                newFlashcard.type === "yesno" ? "active" : ""
              }`}
              onClick={() =>
                setNewFlashcard({ ...newFlashcard, type: "yesno" })
              }
            >
              Yes/No
            </label>
            <label
              className={`toggle-option ${
                newFlashcard.type === "mcq" ? "active" : ""
              }`}
              onClick={() => setNewFlashcard({ ...newFlashcard, type: "mcq" })}
            >
              MCQ
            </label>
          </div>
          {newFlashcard.type === "mcq" && (
            <>
              <input
                type="text"
                value={newFlashcard.correctAnswer || ""}
                placeholder="Correct Answer"
                onChange={(e) =>
                  setNewFlashcard({
                    ...newFlashcard,
                    correctAnswer: e.target.value,
                  })
                }
              />
              <textarea
                value={newFlashcard.hint || ""}
                placeholder="Hint"
                onChange={(e) =>
                  setNewFlashcard({
                    ...newFlashcard,
                    hint: e.target.value,
                  })
                }
              />
            </>
          )}
          {newFlashcard.type === "yesno" && (
            <>
              <input
                type="text"
                value={newFlashcard.correctAnswer || ""}
                placeholder="Correct Answer (Yes/No)"
                onChange={(e) =>
                  setNewFlashcard({
                    ...newFlashcard,
                    correctAnswer: e.target.value,
                  })
                }
              />
              <textarea
                value={newFlashcard.hint || ""}
                placeholder="Hint"
                onChange={(e) =>
                  setNewFlashcard({
                    ...newFlashcard,
                    hint: e.target.value,
                  })
                }
              />
            </>
          )}
        </div>
      </CommonModal>
    </div>
  );
};

export default Flashcards;
