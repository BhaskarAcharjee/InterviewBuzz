const mongoose = require("mongoose");

const BehavioralQuestionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    isFavorite: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const BehavioralQuestion = mongoose.model(
  "BehavioralQuestion",
  BehavioralQuestionSchema
);

module.exports = BehavioralQuestion;
