import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";
import Loader from "../../components/Loader/Loader";
import { getDreamCompany } from "../../services/api";
import { sampleDreamCompanies } from "../../constants/companies";
import { isLoggedIn } from "../../services/auth";
import { QuestionsContext } from "../../context/QuestionsContext";
import "./DreamCompany.css";

const DreamCompanyDetail = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dreamCompanies } = useContext(QuestionsContext);
  const isUserLoggedIn = isLoggedIn();

  useEffect(() => {
    const fetchCompany = async () => {
      if (isUserLoggedIn) {
        try {
          const response = await getDreamCompany(id);
          setCompany(response.data);
          setIsLoading(false);
        } catch (error) {
          setError("Error fetching dream company");
          setIsLoading(false);
        }
      } else {
        // Fetch sample data
        const sampleCompany = sampleDreamCompanies.find(
          (company) => company._id === id
        );
        if (sampleCompany) {
          setCompany(sampleCompany);
        } else {
          setError("Dream Company not found.");
        }
        setIsLoading(false);
      }
    };

    fetchCompany();
  }, [id, isUserLoggedIn]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!company) {
    return <div className="error-message">Dream Company not found.</div>;
  }

  return (
    <div className="dream-company-detail-container">
      <div className="header">
        <h1>{company.name}</h1>
        <p>{company.description}</p>
      </div>
      <Tabs>
        <div label="Basic Info">
          <div className="tab-content">
            <p>
              <strong>Target Job Role:</strong> {company.targetJobRole}
            </p>
            <p>
              <strong>Upcoming Interviews:</strong> {company.upcomingInterviews}
            </p>
            <p>
              <strong>Applied Status:</strong> {company.appliedStatus}
            </p>
          </div>
        </div>
        <div label="Company Specific Questions">
          <div className="tab-content">
            {company.questions && company.questions.length > 0 ? (
              company.questions.map((question, index) => (
                <div key={index}>
                  <p>
                    <strong>Q:</strong> {question.question}
                  </p>
                  <p>
                    <strong>A:</strong> {question.answer}
                  </p>
                </div>
              ))
            ) : (
              <p>No specific questions available.</p>
            )}
          </div>
        </div>
        <div label="Referrer Info">
          <div className="tab-content">
            <button onClick={() => alert("Add Referrer")}>Add Referrer</button>
            {company.referrers && company.referrers.length > 0 ? (
              company.referrers.map((referrer) => (
                <div key={referrer._id} className="referrer">
                  <p>
                    <strong>Name:</strong> {referrer.name}
                  </p>
                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      href={referrer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {referrer.linkedin}
                    </a>
                  </p>
                  <p>
                    <strong>Referral Message:</strong> {referrer.message}
                  </p>
                  <button onClick={() => alert("Edit Referrer")}>Edit</button>
                  <button onClick={() => alert("Delete Referrer")}>
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p>No referrers available.</p>
            )}
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default DreamCompanyDetail;
