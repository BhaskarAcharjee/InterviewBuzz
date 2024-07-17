import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaPlus } from "react-icons/fa";
import MDEditor from "@uiw/react-md-editor";
import "./ProjectQuestions.css";
import { projects } from "../../constants/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id];
  const [questions, setQuestions] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleAddQuestion = () => {
    const question = { question: newQuestion, answer: newAnswer };
    setQuestions([...questions, question]);
    setNewQuestion("");
    setNewAnswer("");
    setIsFormVisible(false);
  };

  return (
    <div className="project-detail-container">
      <h1 className="project-name">{project.projectName}</h1>
      <p className="project-description">{project.shortDescription}</p>
      <div className="tech-stacks">
        {project.techStacks.map((stack, idx) => (
          <span className="tech-stack" key={idx}>
            {stack}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt /> View Project
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub /> View on GitHub
        </a>
      </div>
      <div className="questions-section">
        <h2>Project Questions</h2>
        <button
          className="add-question-btn"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          <FaPlus /> Add Question
        </button>
        {isFormVisible && (
          <div className="add-question-form">
            <input
              type="text"
              placeholder="Question"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
            <MDEditor
              value={newAnswer}
              onChange={setNewAnswer}
              height={200}
              preview="edit"
            />
            <button onClick={handleAddQuestion}>Save</button>
          </div>
        )}
        <div className="questions-list">
          {questions.map((qa, index) => (
            <div className="question-card" key={index}>
              <h3 className="question">{qa.question}</h3>
              <MDEditor.Markdown source={qa.answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
