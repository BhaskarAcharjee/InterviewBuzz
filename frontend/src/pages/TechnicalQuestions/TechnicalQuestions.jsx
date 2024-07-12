import React, { useState } from "react";
import "./TechnicalQuestions.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TabSwitch from "../../components/TabSwitch/TabSwitch";

const TechnicalQuestions = () => {
  const options = [
    { label: "Theoretical", direction: "left" },
    { label: "Coding", direction: "right" },
  ];

  const [activeTab, setActiveTab] = useState(options[0]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const categories = [
    {
      name: "Frontend Development",
      questions: [
        {
          question: "Explain the concept of Virtual DOM.",
          answer:
            "The Virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM by a library such as React.",
          type: "theoretical",
        },
        {
          question:
            "What are the differences between state and props in React?",
          answer:
            "State is a component’s local state, whereas props are inputs passed from a parent component to a child component.",
          type: "theoretical",
        },
        {
          question: "How does CSS specificity work?",
          answer:
            "CSS specificity determines which CSS rule is applied by the browser when multiple rules could apply to the same element.",
          type: "theoretical",
        },
        {
          question: "Implement a debounce function in JavaScript.",
          answer:
            "function debounce(func, wait) {let timeout; return function(...args) { clearTimeout(timeout); timeout = setTimeout(() => func.apply(this, args), wait); }; }",
          language: "javascript",
          type: "coding",
        },
      ],
    },
    {
      name: "Backend Development",
      questions: [
        {
          question: "What is RESTful API?",
          answer:
            "RESTful API is an architectural style for building APIs, using HTTP requests to access and use data.",
          type: "theoretical",
        },
        {
          question: "Explain the difference between PUT and PATCH methods.",
          answer:
            "PUT updates a resource completely, while PATCH applies partial modifications to a resource.",
          type: "theoretical",
        },
        {
          question: "How does database indexing work?",
          answer:
            "Database indexing improves the speed of data retrieval operations on a database table at the cost of additional storage and maintenance overhead.",
          type: "theoretical",
        },
        {
          question: "Write a basic CRUD application in Node.js.",
          answer:
            "// Code snippet to perform CRUD operations in Node.js using Express and MongoDB",
          language: "javascript",
          type: "coding",
        },
      ],
    },
    {
      name: "Database Management",
      questions: [
        {
          question: "What are ACID properties in database transactions?",
          answer:
            "ACID properties ensure reliable processing of database transactions: Atomicity, Consistency, Isolation, and Durability.",
          type: "theoretical",
        },
        {
          question: "Explain the difference between SQL and NoSQL databases.",
          answer:
            "SQL databases are relational and use structured query language for defining and manipulating data, while NoSQL databases are non-relational and can store unstructured data.",
          type: "theoretical",
        },
        {
          question: "What is database normalization?",
          answer:
            "Database normalization is the process of structuring a database to reduce redundancy and improve data integrity.",
          type: "theoretical",
        },
        {
          question:
            "Write a SQL query to find the second highest salary in a table.",
          answer:
            "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);",
          language: "sql",
          type: "coding",
        },
      ],
    },
  ];

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
