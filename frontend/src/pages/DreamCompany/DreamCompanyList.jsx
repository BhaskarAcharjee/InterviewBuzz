import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DreamCompanyCard from "./DreamCompanyCard";
import { getDreamCompanies, deleteDreamCompany } from "../../services/api";
import "./DreamCompany.css";
import { sampleDreamCompanies } from "../../constants/companies";
import { isLoggedIn } from "../../services/auth";

const DreamCompanyList = () => {
  const [dreamCompanies, setDreamCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [hasError, setHasError] = useState(false); // Error state
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Logged-in state
  const navigate = useNavigate();

  useEffect(() => {
    fetchDreamCompanies();
    setIsUserLoggedIn(isLoggedIn()); // Check if user is logged in
  }, []);

  const fetchDreamCompanies = async () => {
    try {
      const response = await getDreamCompanies();
      setDreamCompanies(response.data);
    } catch (error) {
      console.error("Error fetching dream companies:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDreamCompany(id);
      setDreamCompanies(dreamCompanies.filter((company) => company._id !== id));
    } catch (error) {
      console.error("Error deleting dream company:", error);
    }
  };

  if (isLoading) {
    return <div className="loader"></div>; // Show loader while loading
  }

  const renderDreamCompanies = isUserLoggedIn
    ? dreamCompanies
    : sampleDreamCompanies;

  const handleCreateNewClick = () => {
    navigate("/dream-company/create");
  };

  return (
    <div className="dream-companies-container">
      <div className="behavioral-questions-container">
        <h1>Dream Companies</h1>
        <p>The goal of your interview preparation...</p>

        <button className="add-project-btn" onClick={handleCreateNewClick}>
          Add Company
        </button>

        <div className="dream-company-list question-list grid">
          {renderDreamCompanies.length === 0 ? (
            <p>
              No data. Create data by clicking the "Add Company" button above.
            </p>
          ) : (
            <div className="card-container">
              {renderDreamCompanies.map((dreamCompany) => (
                <DreamCompanyCard
                  key={dreamCompany._id}
                  dreamCompany={dreamCompany}
                  onDelete={() => handleDelete(dreamCompany._id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DreamCompanyList;
