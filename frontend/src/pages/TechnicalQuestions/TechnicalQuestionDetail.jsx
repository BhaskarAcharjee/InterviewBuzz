import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./TechnicalQuestions.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { categories } from "../../constants/technical";

const TechnicalQuestionDetail = () => {
  const { categoryId, type, questionId } = useParams();
  const category = categories.find(
    (cat) => cat.name.toLowerCase() === categoryId.toLowerCase()
  );
  const filteredQuestions = category?.questions.filter(
    (q) => q.type === type && q
  );
  const question = filteredQuestions[questionId];
  const navigate = useNavigate();

  const handleNext = () => {
    const nextQuestionId = parseInt(questionId) + 1;
    if (nextQuestionId < filteredQuestions.length) {
      navigate(`/technical/${categoryId}/${type}/${nextQuestionId}`);
    }
  };

  const handlePrev = () => {
    const prevQuestionId = parseInt(questionId) - 1;
    if (prevQuestionId >= 0) {
      navigate(`/technical/${categoryId}/${type}/${prevQuestionId}`);
    }
  };

  if (!question) {
    return <div className="question-detail-container">Question not found.</div>;
  }

  return (
    <div className="question-detail-container">
      <div className="preview-card">
        <div className="card-header">
          <p style={{ fontStyle: "italic" }}>
            {category.name} - Technical Question ({question.type})
          </p>
        </div>
        <div className="detail-content">
          <h1>{question.question}</h1>
          <p>{question.answer}</p>
        </div>
      </div>
      <div className="navigation">
        <button
          className="nav-btn"
          onClick={handlePrev}
          disabled={parseInt(questionId) === 0}
        >
          <FaChevronLeft />
        </button>
        <button className="back-btn" onClick={() => navigate("/technical")}>
          Back to List
        </button>
        <button
          className="nav-btn"
          onClick={handleNext}
          disabled={parseInt(questionId) === filteredQuestions.length - 1}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TechnicalQuestionDetail;
