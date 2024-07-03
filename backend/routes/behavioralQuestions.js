const express = require("express");
const router = express.Router();
const BehavioralQuestion = require("../models/BehavioralQuestion");

// Get all questions
router.get("/", async (req, res) => {
  try {
    const questions = await BehavioralQuestion.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new question
router.post("/", async (req, res) => {
  const question = new BehavioralQuestion({
    question: req.body.question,
    answer: req.body.answer,
    isFavorite: req.body.isFavorite || false,
  });

  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a question by ID
router.get("/:id", getQuestion, (req, res) => {
  res.json(res.question);
});

// Update a question
router.patch("/:id", getQuestion, async (req, res) => {
  if (req.body.question != null) {
    res.question.question = req.body.question;
  }
  if (req.body.answer != null) {
    res.question.answer = req.body.answer;
  }
  if (req.body.isFavorite != null) {
    res.question.isFavorite = req.body.isFavorite;
  }

  try {
    const updatedQuestion = await res.question.save();
    res.json(updatedQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a question
router.delete("/:id", getQuestion, async (req, res) => {
  try {
    await res.question.remove();
    res.json({ message: "Question deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get a question by ID
async function getQuestion(req, res, next) {
  let question;
  try {
    question = await BehavioralQuestion.findById(req.params.id);
    if (question == null) {
      return res.status(404).json({ message: "Cannot find question" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.question = question;
  next();
}

module.exports = router;