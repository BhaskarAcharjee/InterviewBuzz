import React from "react";
import "./ProjectQuestions.css";

const ProjectQuestions = () => {
  const questions = [
    {
      question:
        "Describe a challenging project you worked on. How did you overcome it?",
      category: "General",
    },
    {
      question:
        "Explain a technical decision you made in one of your projects and why you chose it.",
      category: "Technical",
    },
    {
      question:
        "Discuss a project where you worked with a team. How did you collaborate and resolve conflicts?",
      category: "Teamwork",
    },
    {
      question:
        "Share an example of a project where you implemented innovative features or solutions.",
      category: "Innovation",
    },
  ];

  return (
    <div className="project-questions-container">
      <h1 className="project-questions-title">Project Questions</h1>
      <p className="project-questions-description">
        Prepare for the most common questions asked regarding your projects...
      </p>

      <div className="questions-list">
        {questions.map((q, index) => (
          <div className="question" key={index}>
            <h2 className="question-text">{q.question}</h2>
            <p className="question-category">Category: {q.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectQuestions;
