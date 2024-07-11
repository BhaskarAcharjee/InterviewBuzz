const BehavioralQuestion = require("../models/behavioralQuestion");

// Get all questions
exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await BehavioralQuestion.find({ userId: req.userId });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new question
exports.createQuestion = async (req, res) => {
  const { question, answer, isFavorite } = req.body;

  try {
    const newQuestion = new BehavioralQuestion({
      question,
      answer,
      isFavorite: isFavorite || false,
      userId: req.userId,
    });

    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Import multiple questions
exports.importQuestions = async (req, res) => {
  const { questions } = req.body;

  try {
    // Ensure each question includes the userId field
    const questionsWithUserId = questions.map(question => ({
      ...question,
      userId: req.userId
    }));

    const newQuestions = await BehavioralQuestion.insertMany(questionsWithUserId);
    res.status(201).json(newQuestions);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a question by ID
exports.getQuestionById = async (req, res) => {
  try {
    const question = await BehavioralQuestion.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: "Cannot find question" });
    }
    res.json(question);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a question
exports.updateQuestion = async (req, res) => {
  try {
    const question = await BehavioralQuestion.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: "Cannot find question" });
    }

    if (req.body.question != null) {
      question.question = req.body.question;
    }
    if (req.body.answer != null) {
      question.answer = req.body.answer;
    }
    if (req.body.isFavorite != null) {
      question.isFavorite = req.body.isFavorite;
    }

    const updatedQuestion = await question.save();
    res.json(updatedQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a question by ID
exports.deleteQuestion = async (req, res) => {
  try {
    const question = await BehavioralQuestion.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: "Cannot find question" });
    }

    await BehavioralQuestion.deleteOne({ _id: req.params.id });
    res.json({ message: "Question deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete question", error: err.message });
  }
};
