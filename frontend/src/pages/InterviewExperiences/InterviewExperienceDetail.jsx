import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { experiences } from "../../constants/interview";
import "./InterviewExperiences.css";

const InterviewExperienceDetail = () => {
  const { id } = useParams();
  const experience = experiences.find((exp, index) => index === parseInt(id));
  const [activeTab, setActiveTab] = useState("basicInfo");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  const handleAddQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion("");
  };

  return (
    <div className="experience-detail-container">
      <header className="experience-detail-header">
        <h1>{experience.company}</h1>
        <p>{experience.date}</p>
        <h2>{experience.position}</h2>
        <p>{experience.shortDescription}</p>
      </header>
      <div className="tabs">
        <button
          className={activeTab === "basicInfo" ? "active" : ""}
          onClick={() => setActiveTab("basicInfo")}
        >
          Basic Info
        </button>
        <button
          className={activeTab === "questions" ? "active" : ""}
          onClick={() => setActiveTab("questions")}
        >
          Interview Questions
        </button>
        <button
          className={activeTab === "improvements" ? "active" : ""}
          onClick={() => setActiveTab("improvements")}
        >
          Future Improvements
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "basicInfo" && (
          <div className="basic-info">
            <p>Date of Interview: {experience.date}</p>
            <p>Duration: {experience.duration}</p>
            <p>Panelist: {experience.panelist}</p>
            <p>Location: {experience.location}</p>
            <p>Outcome: {experience.outcome}</p>
          </div>
        )}
        {activeTab === "questions" && (
          <div className="questions">
            <button className="add-question-button" onClick={handleAddQuestion}>
              Add Question
            </button>
            {questions.length > 0 && (
              <ul>
                {questions.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            )}
            <textarea
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Add a new question"
            />
          </div>
        )}
        {activeTab === "improvements" && (
          <div className="improvements">
            <p>{experience.improvements}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewExperienceDetail;
