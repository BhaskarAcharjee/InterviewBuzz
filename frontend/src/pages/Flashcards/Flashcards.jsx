import React, { useState } from "react";
import "./Flashcards.css";
import TabSwitch from "../../components/TabSwitch/TabSwitch";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { flashcards } from "../../constants/flashcard";

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

  const handleOptionSelect = (option, correctAnswer) => {
    setSelectedOption(option);
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    setQuestionIndex(
      (prevIndex) =>
        (prevIndex + 1) % flashcards[categories[categoryIndex]].length
    );
    setAnswered(false);
    setSelectedOption(null);
  };

  const handleSkipQuestion = () => {
    handleNextQuestion();
  };

  return (
    <div className="flashcards-container">
      <h1 className="flashcards-title">Flashcards</h1>
      <p className="flashcards-description">
        To help prepare for conceptual questions...
      </p>
      <div className="add-button-container">
        <button className="gradient-button">Add Flashcard</button>
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
                  <div className="flashcard" key={idx}>
                    <div className="flashcard-question">
                      {flashcard.question}
                    </div>
                    <div className="flashcard-answer">{flashcard.answer}</div>
                  </div>
                ) : (
                  activeTab.label === "Quiz" &&
                  idx === questionIndex && (
                    <div className="flashcard" key={idx}>
                      <div className="flashcard-question">
                        {flashcard.question}
                      </div>
                      {flashcard.type === "yesno" && (
                        <div className="flashcard-options">
                          {flashcard.options.map((option, i) => (
                            <button
                              key={i}
                              className={`option-btn ${
                                answered &&
                                (option === flashcard.correctAnswer
                                  ? "correct"
                                  : selectedOption === option
                                  ? "wrong"
                                  : "")
                              }`}
                              onClick={() =>
                                handleOptionSelect(
                                  option,
                                  flashcard.correctAnswer
                                )
                              }
                              disabled={answered}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                      {flashcard.type === "mcq" && (
                        <div className="flashcard-options">
                          {flashcard.options.map((option, i) => (
                            <button
                              key={i}
                              className={`option-btn ${
                                answered &&
                                (option === flashcard.correctAnswer
                                  ? "correct"
                                  : selectedOption === option
                                  ? "wrong"
                                  : "")
                              }`}
                              onClick={() =>
                                handleOptionSelect(
                                  option,
                                  flashcard.correctAnswer
                                )
                              }
                              disabled={answered}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )
              )}
          </div>
          {answered && (
            <div className="quiz-navigation">
              <button className="quiz-btn" onClick={handleNextQuestion}>
                Next
              </button>
              <button className="quiz-btn" onClick={handleSkipQuestion}>
                Skip
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
