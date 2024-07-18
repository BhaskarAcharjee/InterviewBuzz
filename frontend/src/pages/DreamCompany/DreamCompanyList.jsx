import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DreamCompanyCard from "./DreamCompanyCard";
import "./DreamCompany.css";
import { sampleDreamCompanies } from "../../constants/companies";
import { isLoggedIn } from "../../services/auth";
import Loader from "../../components/Loader/Loader";
import { QuestionsContext } from "../../context/QuestionsContext";
import { deleteDreamCompany } from "../../services/api";

const DreamCompanyList = () => {
  const { dreamCompanies, setDreamCompanies, isDreamCompanyLoading } =
    useContext(QuestionsContext);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn());
  const navigate = useNavigate();

  useEffect(() => {
    setIsUserLoggedIn(isLoggedIn()); // Check if user is logged in
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDreamCompany(id);
      setDreamCompanies(dreamCompanies.filter((company) => company._id !== id));
    } catch (error) {
      console.error("Error deleting dream company:", error);
    }
  };

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
        <div className="add-button-container">
          <button className="gradient-button" onClick={handleCreateNewClick}>
            Add Company
          </button>
        </div>

        {renderDreamCompanies.length === 0 ? (
          <div className="no-questions">
            {isDreamCompanyLoading ? (
              <Loader />
            ) : (
              "No data. Create data by clicking the 'Add Company' button above."
            )}
          </div>
        ) : (
          <div className="dream-company-list question-list grid">
            <div className="card-container">
              {renderDreamCompanies.map((dreamCompany) => (
                <DreamCompanyCard
                  key={dreamCompany._id}
                  dreamCompany={dreamCompany}
                  onDelete={() => handleDelete(dreamCompany._id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DreamCompanyList;
