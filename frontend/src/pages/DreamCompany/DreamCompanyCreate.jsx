import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDreamCompany } from "../../services/api";
import "./DreamCompany.css";

const DreamCompanyCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.length > 500) {
      setError("Company name cannot be more than 500 characters");
      return;
    }
    try {
      await createDreamCompany(formData);
      navigate("/dream-company");
    } catch (error) {
      console.error("Error creating dream company:", error);
    }
  };

  return (
    <div className="dream-company-create">
      <h2>Add New Dream Company</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {error && <p className="error">{error}</p>}
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
        />
        <button type="submit" className="submit-button">
          Add Company
        </button>
      </form>
    </div>
  );
};

export default DreamCompanyCreate;
