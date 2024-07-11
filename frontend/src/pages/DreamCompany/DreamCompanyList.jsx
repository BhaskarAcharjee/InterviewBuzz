import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DreamCompanyCard from "./DreamCompanyCard";
import { getDreamCompanies, deleteDreamCompany } from "../../services/api";
import "./DreamCompany.css";

const DreamCompanyList = () => {
  const [dreamCompanies, setDreamCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [hasError, setHasError] = useState(false); // Error state

  useEffect(() => {
    fetchDreamCompanies();
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
    return <span className="loader"></span>; // Show loader while loading
  }

  if (hasError) {
    return <p>Error loading data. Please try again later.</p>;
  }

  return (
    <div className="dream-company-list">
      <div className="header">
        <h2>Dream Companies</h2>
        <Link to="/dream-company/create" className="add-button">
          Add Company
        </Link>
      </div>
      {dreamCompanies.length === 0 ? (
        <p>No data. Create data by clicking the "Add Company" button above.</p>
      ) : (
        <div className="company-cards">
          {dreamCompanies.map((dreamCompany) => (
            <DreamCompanyCard
              key={dreamCompany._id}
              dreamCompany={dreamCompany}
              onDelete={() => handleDelete(dreamCompany._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DreamCompanyList;
