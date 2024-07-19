import React, { useState } from "react";
import "./InterviewExperiences.css";
import { experiences } from "../../constants/interview";
import Card from "../../components/Card/Card";
import CommonModal from "../../components/Modal/CommonModal";
import { useNavigate } from "react-router-dom";

const InterviewExperiences = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create"); // or "edit"
  const [formData, setFormData] = useState({
    company: "",
    date: "",
    position: "",
    description: "",
  });
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleModalOpen = (mode, index = null) => {
    setModalMode(mode);
    if (mode === "edit" && index !== null) {
      setFormData(experiences[index]);
      setSelectedIndex(index);
    } else {
      setFormData({
        company: "",
        date: "",
        position: "",
        description: "",
      });
      setSelectedIndex(null);
    }
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    if (modalMode === "create") {
      // Add experience logic here
      console.log("Add experience:", formData);
    } else if (modalMode === "edit") {
      // Edit experience logic here
      console.log("Edit experience:", selectedIndex, formData);
    }
    handleModalClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="interview-experiences-container">
      <h1 className="interview-experiences-title">Interview Experiences</h1>
      <p className="interview-experiences-description">
        Learn from previous interview experiences...
      </p>
      <div className="add-button-container">
        <button
          className="gradient-button"
          onClick={() => handleModalOpen("create")}
        >
          Add Experience
        </button>
      </div>

      <div className="experiences-list">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            label={exp.company}
            title={exp.date}
            question={exp.position}
            answer={exp.description}
            onClick={() => navigate(`/interview-experiences/${index}`)}
            onEdit={() => handleModalOpen("edit", index)}
            onDelete={() => console.log(`Delete experience ${index}`)}
          />
        ))}
      </div>

      <CommonModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleSubmit}
        title={
          modalMode === "create" ? "Add New Experience" : "Edit Experience"
        }
      >
        <form>
          <input
            type="text"
            name="company"
            value={formData.company}
            placeholder="Company"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="date"
            value={formData.date}
            placeholder="Date"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="position"
            value={formData.position}
            placeholder="Position"
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            value={formData.description}
            placeholder="Description"
            onChange={handleChange}
            rows={4}
            required
          />
        </form>
      </CommonModal>
    </div>
  );
};

export default InterviewExperiences;
