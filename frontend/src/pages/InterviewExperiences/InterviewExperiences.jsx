import React from "react";
import "./InterviewExperiences.css";
import { experiences } from "../../constants/interview";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const InterviewExperiences = () => {
  const navigate = useNavigate();
  return (
    <div className="interview-experiences-container">
      <h1 className="interview-experiences-title">Interview Experiences</h1>
      <p className="interview-experiences-description">
        Learn from previous interview experiences...
      </p>
      <div className="add-button-container">
        <button className="gradient-button">Add Experience</button>
      </div>

      <div className="experiences-list">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            label={exp.company}
            title={exp.date}
            question={exp.position}
            answer={exp.experience}
            onClick={() => navigate(`/interview-experiences/${index}`)}
            onEdit={() => console.log(`Edit experience ${index}`)}
            onDelete={() => console.log(`Delete experience ${index}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default InterviewExperiences;
