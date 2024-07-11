import React, { useState } from "react";
import "./Flashcards.css";
import TabSwitch from "../../components/TabSwitch/TabSwitch";

const Flashcards = () => {
  const options = [
    { label: "Revise", direction: "left" },
    { label: "Quiz", direction: "right" },
  ];

  const [activeTab, setActiveTab] = useState(options[0]);

  const flashcards = {
    javascript: [
      {
        question: "What is closure in JavaScript?",
        answer:
          "Closure is the combination of a function and the lexical environment within which that function was declared.",
        type: "revise",
      },
      {
        question:
          "What is the difference between 'undefined' and 'null' in JavaScript?",
        answer:
          "'Undefined' means a variable has been declared but has not yet been assigned a value, whereas 'null' is an assignment value that means no value.",
        type: "revise",
      },
      {
        question: "What are higher-order functions in JavaScript?",
        answer:
          "Higher-order functions are functions that take other functions as arguments or return functions as their results.",
        type: "revise",
      },
      {
        question:
          "Is JavaScript a statically typed or dynamically typed language?",
        type: "yesno",
      },
      {
        question: "Which of the following is not a JavaScript data type?",
        options: ["Number", "String", "Boolean", "Class"],
        correctAnswer: "Class",
        type: "mcq",
      },
    ],
    react: [
      // Add react flashcards here
    ],
    css: [
      // Add css flashcards here
    ],
  };

  const handleOptionClick = (option) => {
    setActiveTab(option);
  };

  return (
    <div className="flashcards-container">
      <h1 className="flashcards-title">Flashcards</h1>
      <p className="flashcards-description">
        To help prepare for conceptual questions...
      </p>
      <TabSwitch
        options={options}
        activeOption={activeTab}
        onOptionClick={handleOptionClick}
      />
      <div className="flashcards-categories">
        {Object.keys(flashcards).map((category, index) => (
          <div key={index} className="flashcards-category">
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="flashcards-grid">
              {flashcards[category]
                .filter((flashcard) => {
                  if (
                    activeTab.label === "Revise" &&
                    flashcard.type === "revise"
                  )
                    return true;
                  if (
                    activeTab.label === "Quiz" &&
                    (flashcard.type === "yesno" || flashcard.type === "mcq")
                  )
                    return true;
                  return false;
                })
                .map((flashcard, idx) => (
                  <div className="flashcard" key={idx}>
                    <div className="flashcard-question">
                      {flashcard.question}
                    </div>
                    {flashcard.type === "revise" && (
                      <div className="flashcard-answer">{flashcard.answer}</div>
                    )}
                    {flashcard.type === "yesno" && (
                      <div className="flashcard-options">
                        <button className="option-btn">Yes</button>
                        <button className="option-btn">No</button>
                      </div>
                    )}
                    {flashcard.type === "mcq" && (
                      <div className="flashcard-options">
                        {flashcard.options.map((option, i) => (
                          <button key={i} className="option-btn">
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
