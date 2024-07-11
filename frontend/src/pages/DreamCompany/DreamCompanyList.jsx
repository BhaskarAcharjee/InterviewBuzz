import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DreamCompanyCard from "./DreamCompanyCard";
import { getDreamCompanies, deleteDreamCompany } from "../../services/api";
import "./DreamCompany.css";

const DreamCompanyList = () => {
  const [dreamCompanies, setDreamCompanies] = useState([]);

  useEffect(() => {
    fetchDreamCompanies();
  }, []);

  const fetchDreamCompanies = async () => {
    try {
      const response = await getDreamCompanies();
      setDreamCompanies(response.data);
    } catch (error) {
      console.error("Error fetching dream companies:", error);
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

  return (
    <div className="dream-company-list">
      <div className="header">
        <h2>Dream Companies</h2>
        <Link to="/dream-company/create" className="add-button">
          Add Company
        </Link>
      </div>
      <div className="company-cards">
        {dreamCompanies.map((dreamCompany) => (
          <DreamCompanyCard
            key={dreamCompany._id}
            dreamCompany={dreamCompany}
            onDelete={() => handleDelete(dreamCompany._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DreamCompanyList;
