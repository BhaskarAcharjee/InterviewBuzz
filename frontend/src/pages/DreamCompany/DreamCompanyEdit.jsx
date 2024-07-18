import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDreamCompany, updateDreamCompany } from "../../services/api";
import { QuestionsContext } from "../../context/QuestionsContext";
import "./DreamCompany.css";
import Loader from "../../components/Loader/Loader";

const DreamCompanyEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dreamCompanies, setDreamCompanies, isDreamCompanyLoading } =
    useContext(QuestionsContext);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [error, setError] = useState("");

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
      }
    };

    fetchDreamCompany();
  }, [id]);

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
      const response = await updateDreamCompany(id, formData);
      setDreamCompanies(
        dreamCompanies.map((company) =>
          company._id === id ? response.data : company
        )
      );
      navigate("/dream-company");
    } catch (error) {
      console.error("Error updating dream company:", error);
    }
  };

  if (isDreamCompanyLoading) {
    return <Loader />;
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
          Update Company
        </button>
      </form>
    </div>
  );
};

export default DreamCompanyEdit;
