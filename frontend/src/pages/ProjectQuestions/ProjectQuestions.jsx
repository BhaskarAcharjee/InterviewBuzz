import React, { useState } from "react";
import "./ProjectQuestions.css";
import AddProjectModal from "../../components/Modal/AddProjectModal";

const ProjectQuestions = () => {
  const [projects, setProjects] = useState([
    {
      projectName: "E-commerce Website",
      projectLink: "https://ecommerce.com",
      githubLink: "https://github.com/user/ecommerce",
      shortDescription:
        "A full-featured e-commerce website built with React and Node.js.",
      techStacks: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      projectName: "Social Media App",
      projectLink: "https://socialmedia.com",
      githubLink: "https://github.com/user/socialmedia",
      shortDescription:
        "A social media application with real-time chat and news feed features.",
      techStacks: ["React", "Firebase", "Redux"],
    },
    {
      projectName: "Project Management Tool",
      projectLink: "https://projectmanagement.com",
      githubLink: "https://github.com/user/projectmanagement",
      shortDescription:
        "A tool to manage projects, tasks, and teams efficiently.",
      techStacks: ["Vue", "Node.js", "GraphQL"],
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div className="project-questions-container">
      <h1 className="project-questions-title">Project Questions</h1>
      <p className="project-questions-description">
        Prepare for the most common questions asked regarding your projects...
      </p>
      <button className="add-project-btn" onClick={() => setIsModalOpen(true)}>
        Add Project
      </button>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-name">{project.projectName}</h2>
            <p className="project-description">{project.shortDescription}</p>
            <div className="tech-stacks">
              {project.techStacks.map((stack, idx) => (
                <span className="tech-stack" key={idx}>
                  {stack}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProject={handleAddProject}
      />
    </div>
  );
};

export default ProjectQuestions;
