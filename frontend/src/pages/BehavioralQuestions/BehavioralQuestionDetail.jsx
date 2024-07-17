import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { getQuestions } from "../../services/api";
import "./BehavioralQuestions.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Loader from "../../components/Loader/Loader";

const BehavioralQuestionDetail = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const question = questions.find((q) => q._id === id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getQuestions();
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const formattedCreatedAt = question ? new Date(question.createdAt).toLocaleString() : '';
  const formattedUpdatedAt = question ? new Date(question.updatedAt).toLocaleString() : '';

  if (loading) {
    return <Loader/>;
  }

  if (!question) {
    return <div className="question-detail-container">Question not found.</div>;
  }

  return (
    <div className="question-detail-container">
      <div className="preview-card">
        <div className="card-header">
          <h1>{question.question}</h1>
        </div>
        <MDEditor.Markdown source={question.answer} />
        <div className="timestamps">
          <p>Created at: {formattedCreatedAt}</p>
          <p>Modified at: {formattedUpdatedAt}</p>
        </div>
      </div>
      <div className="navigation">
        <button
          className="nav-btn"
          onClick={handlePrev}
          disabled={questionIndex === 0}
        >
          <GrPrevious />
        </button>
        <button className="back-btn" onClick={() => navigate("/behavioral")}>
          Back to Home
        </button>
        <button
          className="nav-btn"
          onClick={handleNext}
          disabled={questionIndex === questions.length - 1}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default BehavioralQuestionDetail;
