import React from "react";
import "./Flashcards.css";

const Flashcards = () => {
  const flashcards = {
    javascript: [
      {
        question: "What is closure in JavaScript?",
        answer:
          "Closure is the combination of a function and the lexical environment within which that function was declared.",
      },
      {
        question:
          "What is the difference between 'undefined' and 'null' in JavaScript?",
        answer:
          "'Undefined' means a variable has been declared but has not yet been assigned a value, whereas 'null' is an assignment value that means no value.",
      },
      {
        question: "What are higher-order functions in JavaScript?",
        answer:
          "Higher-order functions are functions that take other functions as arguments or return functions as their results.",
      },
    ],
    react: [
      {
        question: "What is JSX in React?",
        answer:
          "JSX is a syntax extension for JavaScript that allows expressing HTML-like syntax within JavaScript code.",
      },
      {
        question: "What are props in React?",
        answer:
          "Props (short for properties) are inputs to components that allow passing data from one component to another.",
      },
      {
        question: "What is the virtual DOM in React?",
        answer:
          "The virtual DOM is a lightweight copy of the real DOM that React keeps in memory and syncs with the real DOM via efficient diffing algorithms.",
      },
    ],
    css: [
      {
        question: "What is the box model in CSS?",
        answer:
          "The box model in CSS describes the rectangular boxes that are generated for elements in the document tree.",
      },
      {
        question: "What is flexbox in CSS?",
        answer:
          "Flexbox is a one-dimensional layout method for laying out items in rows or columns, making it easier to design responsive layouts.",
      },
      {
        question: "What is CSS Grid Layout?",
        answer:
          "CSS Grid Layout is a two-dimensional layout system for the web that allows defining layout using rows and columns.",
      },
    ],
  };

  return (
    <div className="flashcards-container">
      <h1 className="flashcards-title">Flashcards</h1>
      <p className="flashcards-description">
        To help prepare for conceptual questions...
      </p>

      <div className="flashcards-categories">
        {Object.keys(flashcards).map((category, index) => (
          <div key={index} className="flashcards-category">
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="flashcards-grid">
              {flashcards[category].map((flashcard, idx) => (
                <div className="flashcard" key={idx}>
                  <div className="flashcard-question">{flashcard.question}</div>
                  <div className="flashcard-answer">{flashcard.answer}</div>
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
