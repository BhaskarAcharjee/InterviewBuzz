import React, { useState } from "react";
import "./TechnicalQuestions.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TabSwitch from "../../components/TabSwitch/TabSwitch";
import { categories } from "../../constants/technical";

const TechnicalQuestions = () => {
  const options = [
    { label: "Theoretical", direction: "left" },
    { label: "Coding", direction: "right" },
  ];

  const [activeTab, setActiveTab] = useState(options[0]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const handleOptionClick = (option) => {
    setActiveTab(option);
  };

  const handlePrevCategory = () => {
    setCategoryIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  const handleNextCategory = () => {
    setCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  return (
    <div className="technical-questions-container">
      <h1 className="technical-questions-title">Technical Questions</h1>
      <p className="technical-questions-description">
        Keep a record of technical questions you prepared to revise later...
      </p>
      <button className="gradient-button">Add Question</button>
      <TabSwitch
        options={options}
        activeOption={activeTab}
        onOptionClick={handleOptionClick}
      />
      <div className="flashcards-categories">
        <div className="flashcards-category">
          <div className="category-header">
            <FaArrowLeft className="nav-icon" onClick={handlePrevCategory} />
            <h2 className="category-name">{categories[categoryIndex].name}</h2>
            <FaArrowRight className="nav-icon" onClick={handleNextCategory} />
          </div>
          <div className="flashcards-grid">
            {categories[categoryIndex].questions
              .filter(
                (question) => question.type === activeTab.label.toLowerCase()
              )
              .map((question, idx) => (
                <div className="flashcard" key={idx}>
                  <div className="flashcard-question">{question.question}</div>
                  {question.type === "coding" && (
                    <div className="flashcard-language">
                      Language: {question.language}
                    </div>
                  )}
                  <div className="flashcard-answer">{question.answer}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalQuestions;
