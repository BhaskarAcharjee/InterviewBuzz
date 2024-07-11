import React from "react";
import { deleteDreamCompany } from "../../services/api";
import "./DreamCompany.css";
import { useNavigate } from "react-router-dom";

const DreamCompanyCard = ({ dreamCompany, onDelete }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await deleteDreamCompany(dreamCompany._id);
      onDelete();
    } catch (error) {
      console.error("Error deleting dream company:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/dream-company/edit/${dreamCompany._id}`);
  };

  return (
    <div className="dream-company-card">
      <h3>{dreamCompany.name}</h3>
      <p>{dreamCompany.description}</p>
      <div className="card-buttons">
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DreamCompanyCard;
