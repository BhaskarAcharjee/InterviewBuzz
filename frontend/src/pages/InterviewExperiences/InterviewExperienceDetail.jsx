import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { experiences } from "../../constants/interview";
import Tabs from "../../components/Tabs/Tabs";
import "./InterviewExperiences.css";

const InterviewExperienceDetail = () => {
  const { id } = useParams();
  const experience = experiences.find((exp, index) => index === parseInt(id));
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
        <p>{experience.description}</p>
        <p>{experience.date}</p>
      </header>
      <Tabs>
        <div label="Basic Info">
          <div className="basic-info">
            <p>Position: {experience.position}</p>
            <p>Date of Interview: {experience.date}</p>
            <p>Duration: {experience.duration}</p>
            <p>Panelist: {experience.panelist}</p>
            <p>Location: {experience.location}</p>
            <p>Outcome: {experience.outcome}</p>
          </div>
        </div>
        <div label="Interview Questions">
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
        </div>
        <div label="Future Improvements">
          <div className="improvements">
            <p>{experience.improvements}</p>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default InterviewExperienceDetail;
