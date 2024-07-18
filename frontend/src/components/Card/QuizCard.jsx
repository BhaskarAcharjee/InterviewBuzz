import React from "react";
import "./QuizCard.css";

const QuizCard = ({
  question,
  options,
  correct,
  onNextQuestion,
  onPrevQuestion,
  onCheckAnswer,
  answered,
  selectedOption,
  setSelectedOption,
}) => {
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="quizcard-container">
      <h4 className="quiz_text">{question}</h4>
      <ul className="quiz-options">
        {options &&
          options.map((option, index) => (
            <li
              key={index}
              className={`quiz-option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              <svg className="tick-svg" width="20" height="20">
                <polyline className="tick" points="4,9 8,13 14,5" />
              </svg>
              <label className="quiz-label">{option}</label>
            </li>
          ))}
      </ul>
      <div className="quiz-nav">
        <div className="prev" onClick={onPrevQuestion}>
          <svg width="80" height="48">
            <polyline
              className="prevline"
              points="57,27 21,27 31,18 21,27 31,38"
            />
          </svg>
        </div>
        <div className="next" onClick={onNextQuestion}>
          <svg width="80" height="48">
            <polyline
              className="nextline"
              points="21,27 57,27 47,17 57,27 47,37"
            />
          </svg>
        </div>
      </div>
      <span className="correct_answer" onClick={onCheckAnswer}>
        {answered ? `Correct Answer: ${correct}` : "Check Answer"}
      </span>
    </div>
  );
};

export default QuizCard;
