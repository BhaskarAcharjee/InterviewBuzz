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
  hasNext,
  hasPrev,
}) => {
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const getOptionLetter = (index) => {
    return String.fromCharCode(65 + index); // ASCII code for 'A' = 65
  };

  const isCorrect = (option) => {
    return option === correct;
  };

  const renderAnswer = (option, index) => {
    const isOptionSelected = selectedOption === option;
    const correctOption = isCorrect(option);

    let classNames = "quiz-option";
    if (isOptionSelected) {
      classNames += " selected";
    }
    if (answered && !isOptionSelected && correctOption) {
      classNames += " correct";
    }
    if (answered && isOptionSelected && !correctOption) {
      classNames += " incorrect";
    }

    return (
      <li
        key={index}
        className={classNames}
        onClick={() => handleOptionSelect(option)}
      >
        <svg className="tick-svg" width="20" height="20">
          <polyline className="tick" points="4,9 8,13 14,5" />
        </svg>
        <label className="quiz-label">
          {getOptionLetter(index)}. {option}
        </label>
      </li>
    );
  };

  return (
    <div className="quizcard-container">
      <h4 className="quiz_text">{question}</h4>
      <ul className="quiz-options">
        {options.map((option, index) => renderAnswer(option, index))}
      </ul>
      <div className="quiz-nav">
        <div
          className={`prev ${!hasPrev ? "disabled" : ""}`}
          onClick={hasPrev ? onPrevQuestion : null}
        >
          <svg width="80" height="48">
            <polyline
              className="prevline"
              points="57,27 21,27 31,18 21,27 31,38"
            />
          </svg>
        </div>
        <div
          className={`next ${!hasNext ? "disabled" : ""}`}
          onClick={hasNext ? onNextQuestion : null}
        >
          <svg width="80" height="48">
            <polyline
              className="nextline"
              points="21,27 57,27 47,17 57,27 47,37"
            />
          </svg>
        </div>
      </div>
      <span
        className="correct_answer"
        onClick={onCheckAnswer}
        style={{
          backgroundColor: answered
            ? isCorrect(selectedOption)
              ? "rgb(57, 219, 65)" // Correct answer
              : "#f00" // Incorrect answer
            : "#000", // Default background color
          cursor: "pointer",
        }}
      >
        {answered
          ? isCorrect(selectedOption)
            ? `Correct Answer!`
            : `Correct Answer: ${getOptionLetter(options.indexOf(correct))}`
          : "Check Answer"}
      </span>
    </div>
  );
};

export default QuizCard;
