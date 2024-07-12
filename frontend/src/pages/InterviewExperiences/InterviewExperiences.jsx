import React from "react";
import "./InterviewExperiences.css";
import { experiences } from "../../constants/interview";

const InterviewExperiences = () => {
  return (
    <div className="interview-experiences-container">
      <h1 className="interview-experiences-title">Interview Experiences</h1>
      <p className="interview-experiences-description">
        Learn from your previous interview experience...
      </p>
      <button className="gradient-button">Add Experience</button>
      <div className="experiences-list">
        {experiences.map((exp, index) => (
          <div className="experience" key={index}>
            <div className="experience-header">
              <h2 className="experience-company">{exp.company}</h2>
              <p className="experience-date">{exp.date}</p>
            </div>
            <h3 className="experience-position">{exp.position}</h3>
            <p className="experience-text">{exp.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewExperiences;
