import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./DreamCompany.css";
import { sampleDreamCompanies } from "../../constants/companies";
import { isLoggedIn } from "../../services/auth";
import Loader from "../../components/Loader/Loader";
import { QuestionsContext } from "../../context/QuestionsContext";
import {
  deleteDreamCompany,
  createDreamCompany,
  updateDreamCompany,
} from "../../services/api";
import CommonModal from "../../components/Modal/CommonModal";

const DreamCompanyList = () => {
  const { dreamCompanies, setDreamCompanies, isDreamCompanyLoading } =
    useContext(QuestionsContext);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create"); // or "edit"
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleModalOpen = (mode, data = {}) => {
    setModalMode(mode);
    setFormData(data);
    setErrorMessage(""); // Clear error message when opening the modal
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDreamCompany(id);
      setDreamCompanies(dreamCompanies.filter((company) => company._id !== id));
    } catch (error) {
      console.error("Error deleting dream company:", error);
    }
  };

  const handleSubmit = async () => {
    if (formData.name.length > 200) {
      setErrorMessage("Company name cannot exceed 200 characters.");
      return;
    }

    try {
      if (modalMode === "create") {
        const response = await createDreamCompany(formData);
        setDreamCompanies([...dreamCompanies, response.data]);
      } else if (modalMode === "edit") {
        const response = await updateDreamCompany(formData._id, formData);
        setDreamCompanies(
          dreamCompanies.map((company) =>
            company._id === formData._id ? response.data : company
          )
        );
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving dream company:", error);
    }
  };

  const handleCreateNewClick = () => {
    handleModalOpen("create", { name: "", description: "" });
  };

  const handleEditClick = (company) => {
    handleModalOpen("edit", company);
  };

  const renderDreamCompanies = isUserLoggedIn
    ? dreamCompanies
    : sampleDreamCompanies;

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
          <div className="dream-company-list">
            {renderDreamCompanies.map((dreamCompany) => (
              <Card
                key={dreamCompany._id}
                label={dreamCompany.name}
                title="Dream Company"
                question={dreamCompany.name}
                answer={dreamCompany.description}
                onEdit={() => handleEditClick(dreamCompany)}
                onDelete={() => handleDelete(dreamCompany._id)}
              />
            ))}
          </div>
        )}

        <CommonModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleSubmit}
          title={
            modalMode === "create"
              ? "Add New Dream Company"
              : "Edit Dream Company"
          }
        >
          <form>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Company Name"
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (e.target.value.length > 200) {
                  setErrorMessage("Company name cannot exceed 200 characters.");
                } else {
                  setErrorMessage("");
                }
              }}
              required
            />
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <textarea
              id="description"
              name="description"
              value={formData.description}
              placeholder="Description"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={4}
              required
            />
          </form>
        </CommonModal>
      </div>
    </div>
  );
};

export default DreamCompanyList;
