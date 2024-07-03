import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./BehavioralQuestions.css";

const BehavioralQuestionDetail = ({ questions }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionIndex = questions.findIndex((q) => q.id === parseInt(id));
  const question = questions[questionIndex];

  if (!question) {
    return <div className="question-detail-container">Question not found.</div>;
  }

  const handleNext = () => {
    const nextQuestionId = questions[questionIndex + 1]?.id;
    if (nextQuestionId) {
      navigate(`/behavioral/${nextQuestionId}`);
    }
  };

  const handlePrev = () => {
    const prevQuestionId = questions[questionIndex - 1]?.id;
    if (prevQuestionId) {
      navigate(`/behavioral/${prevQuestionId}`);
    }
  };

  return (
    <div className="question-detail-container">
      <div className="card">
        <div className="card-header">
          <h1>{question.question}</h1>
          <div className="card-icons">
            <Link to={`/edit/${question.id}`}>
              <i className="edit-icon fas fa-edit" title="Edit Question"></i>
            </Link>
            {/* Add labels option */}
            {/* <i className="label-icon fas fa-tags" title="Add Labels"></i> */}
          </div>
        </div>
        <p>{question.answer}</p>
      </div>
      <div className="navigation">
        <button className="nav-btn" onClick={handlePrev} disabled={questionIndex === 0}>
          Previous
        </button>
        <button className="back-btn" onClick={() => navigate("/behavioral")}>
        Back to Questions
      </button>
        <button className="nav-btn" onClick={handleNext} disabled={questionIndex === questions.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BehavioralQuestionDetail;
