import React, { useState } from "react";
import "./Flashcards.css";
import TabSwitch from "../../components/TabSwitch/TabSwitch";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { flashcards } from "../../constants/flashcard";
import Card from "../../components/Card/Card";
import QuizCard from "../../components/Card/QuizCard";

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
                  <Card
                    key={idx}
                    label="Revise"
                    title="Flashcards"
                    question={flashcard.question}
                    answer={flashcard.answer}
                  />
                ) : (
                  activeTab.label === "Quiz" &&
                  idx === questionIndex && (
                    <QuizCard
                      key={idx}
                      question={flashcard.question}
                      options={flashcard.options}
                      correct={flashcard.correct}
                      onNextQuestion={handleNextQuestion}
                      onPrevQuestion={handlePrevQuestion}
                      onCheckAnswer={handleCheckAnswer}
                      answered={answered}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                    />
                  )
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
