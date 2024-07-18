import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectQuestions.css";
import AddProjectModal from "../../components/Modal/AddProjectModal";
import TagSearchBar from "../../components/TagSearchBar/TagSearchBar";
import { projects as sampleProjects } from "../../constants/projects";

const ProjectQuestions = () => {
  const [projects, setProjects] = useState(sampleProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(sampleProjects);
  const navigate = useNavigate();

  const handleAddProject = (newProject) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    setFilteredProjects(updatedProjects);
  };

  const handleTagSelect = (selectedTag) => {
    if (selectedTag === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.techStacks.includes(selectedTag)
      );
      setFilteredProjects(filtered);
    }
  };

  const handleCardClick = (index) => {
    navigate(`/projects/${index}`);
  };

  const tagFrequency = {};
  projects.forEach((project) => {
    project.techStacks.forEach((stack) => {
      tagFrequency[stack] = (tagFrequency[stack] || 0) + 1;
    });
  });

  const sortedTags = Object.entries(tagFrequency)
    .sort(([, a], [, b]) => b - a)
    .map(([tag]) => tag);

  const topTags = sortedTags.slice(0, 7);
  const hasMoreTags = sortedTags.length > 7;

  return (
    <div className="project-questions-container">
      <h1 className="project-questions-title">Project Questions</h1>
      <p className="project-questions-description">
        Prepare for the most common questions asked regarding your projects...
      </p>
      <div className="add-button-container">
        <button
          className="gradient-button"
          onClick={() => setIsModalOpen(true)}
        >
          Add Project
        </button>
      </div>
      <TagSearchBar
        tags={topTags}
        onTagSelect={handleTagSelect}
        hasMoreTags={hasMoreTags}
      />
      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <div
            className="card"
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <h4 className="project-name">{project.projectName}</h4>
            <p className="project-description">{project.shortDescription}</p>
            <div class="projcard-tagbox">
              {project.techStacks.map((stack, idx) => (
                <span className="projcard-tag" key={idx}>
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
