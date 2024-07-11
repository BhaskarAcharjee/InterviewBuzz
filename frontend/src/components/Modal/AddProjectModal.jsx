import React, { useState } from "react";
import "./AddProjectModal.css";

const AddProjectModal = ({ onClose, onAddProject }) => {
  const [newProject, setNewProject] = useState({
    projectName: "",
    projectLink: "",
    githubLink: "",
    shortDescription: "",
    techStacks: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = () => {
    const projectToAdd = {
      ...newProject,
      techStacks: newProject.techStacks.split(",").map((stack) => stack.trim()),
    };
    onAddProject(projectToAdd);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Project</h2>
        <input
          type="text"
          name="projectName"
          placeholder="Project Name"
          value={newProject.projectName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="projectLink"
          placeholder="Project Live Link"
          value={newProject.projectLink}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="githubLink"
          placeholder="GitHub Link"
          value={newProject.githubLink}
          onChange={handleInputChange}
        />
        <textarea
          name="shortDescription"
          placeholder="Short Description"
          value={newProject.shortDescription}
          onChange={handleInputChange}
        ></textarea>
        <input
          type="text"
          name="techStacks"
          placeholder="Tech Stacks (comma separated)"
          value={newProject.techStacks}
          onChange={handleInputChange}
        />
        <button className="submit-btn" onClick={handleAddProject}>
          Add Project
        </button>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddProjectModal;
