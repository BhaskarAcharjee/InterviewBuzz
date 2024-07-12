import React from "react";
import "./InterviewExperiences.css";

const InterviewExperiences = () => {
  const experiences = [
    {
      company: "TechGiant Inc.",
      position: "Software Engineer",
      date: "July 2023",
      experience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ligula quis lobortis placerat. Integer congue tellus quis nisi dictum placerat.",
    },
    {
      company: "SoftDev Solutions",
      position: "Frontend Developer",
      date: "June 2022",
      experience:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eu urna in velit tincidunt lacinia ut et nisl.",
    },
    {
      company: "WebTech Startups",
      position: "Full Stack Developer",
      date: "May 2021",
      experience:
        "Nullam ut ex in enim venenatis rutrum sed in felis. Curabitur a nulla a mauris fermentum ullamcorper. Ut pellentesque arcu non tincidunt sollicitudin.",
    },
  ];

  return (
    <div className="interview-experiences-container">
      <h1 className="interview-experiences-title">Interview Experiences</h1>
      <p className="interview-experiences-description">
        Learn from your previous interview experience...
      </p>
      <button className="add-project-btn">Add Company</button>
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
