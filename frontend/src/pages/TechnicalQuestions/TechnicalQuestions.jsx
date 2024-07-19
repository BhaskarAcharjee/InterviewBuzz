import React, { useState } from "react";
import "./TechnicalQuestions.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TabSwitch from "../../components/TabSwitch/TabSwitch";
import { categories } from "../../constants/technical";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const TechnicalQuestions = () => {
  const options = [
    { label: "Theoretical", direction: "left" },
    { label: "Coding", direction: "right" },
  ];

  const [activeTab, setActiveTab] = useState(options[0]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const navigate = useNavigate();

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
      <div className="add-button-container">
        <button className="gradient-button">Add Question</button>
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
            <h2 className="category-name">{categories[categoryIndex].name}</h2>
            <FaArrowRight className="nav-icon" onClick={handleNextCategory} />
          </div>
          <div className="flashcards-grid">
            {categories[categoryIndex].questions
              .filter(
                (question) => question.type === activeTab.label.toLowerCase()
              )
              .map((question, idx) => (
                <Card
                  key={idx}
                  label={categories[categoryIndex].name}
                  title="Technical Question"
                  question={question.question}
                  answer={question.answer}
                  onClick={() =>
                    navigate(
                      `/technical/${categories[
                        categoryIndex
                      ].name.toLowerCase()}/${question.type}/${idx}`
                    )
                  }
                  onEdit={() => console.log(`Edit experience ${idx}`)}
                  onDelete={() => console.log(`Delete experience ${idx}`)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalQuestions;
