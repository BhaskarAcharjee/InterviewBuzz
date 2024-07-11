import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDreamCompany, updateDreamCompany } from "../../services/api";
import "./DreamCompany.css";

const DreamCompanyEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchDreamCompany = async () => {
      try {
        const response = await getDreamCompany(id);
        setFormData({
          name: response.data.name,
          description: response.data.description,
        });
      } catch (error) {
        console.error("Error fetching dream company:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDreamCompany();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDreamCompany(id, formData);
      navigate("/dream-company");
    } catch (error) {
      console.error("Error updating dream company:", error);
    }
  };

  if (isLoading) {
    return <span className="loader"></span>;
  }

  if (hasError) {
    return <p>Error loading data. Please try again later.</p>;
  }

  return (
    <div className="dream-company-create">
      <h2>Edit Dream Company</h2>
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
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
        />
        <button type="submit" className="submit-button">Update Company</button>
      </form>
    </div>
  );
};

export default DreamCompanyEdit;
