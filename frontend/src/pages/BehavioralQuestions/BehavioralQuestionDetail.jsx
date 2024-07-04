import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./BehavioralQuestions.css";
import { deleteQuestion } from "../../services/api";

const BehavioralQuestionDetail = ({ questions, setQuestions }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const question = questions.find((q) => q._id === id);

  if (!question) {
    return <div className="question-detail-container">Question not found.</div>;
  }

  const questionIndex = questions.findIndex((q) => q._id === id);

  const handleNext = () => {
    const nextQuestionId = questions[questionIndex + 1]?._id;
    if (nextQuestionId) {
      navigate(`/behavioral/${nextQuestionId}`);
    }
  };

  const handlePrev = () => {
    const prevQuestionId = questions[questionIndex - 1]?._id;
    if (prevQuestionId) {
      navigate(`/behavioral/${prevQuestionId}`);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteQuestion(question._id);
      setQuestions(questions.filter((q) => q._id !== id)); // Update state
      navigate("/behavioral"); // Redirect to main page
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <div className="question-detail-container">
      <div className="card">
        <div className="card-header">
          <h1>{question.question}</h1>
          <div className="card-buttons">
            <Link
              to={`/behavioral/edit/${question._id}`}
              className="edit-button"
            >
              Edit
            </Link>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
        <p>{question.answer}</p>
      </div>
      <div className="navigation">
        <button
          className="nav-btn"
          onClick={handlePrev}
          disabled={questionIndex === 0}
        >
          Previous
        </button>
        <button className="back-btn" onClick={() => navigate("/behavioral")}>
          Back to Questions
        </button>
        <button
          className="nav-btn"
          onClick={handleNext}
          disabled={questionIndex === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BehavioralQuestionDetail;
