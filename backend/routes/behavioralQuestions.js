const express = require("express");
const router = express.Router();
const {
  createQuestion,
  importQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
  getAllQuestions,
} = require("../controllers/behavioralQuestionController");

router.get("/", getAllQuestions); // Get all questions
router.post("/", createQuestion); // Create a new question
router.post("/import", importQuestions); // Import multiple questions
router.get("/:id", getQuestionById); // Get a question by ID
router.patch("/:id", updateQuestion); // Update a question
router.delete("/:id", deleteQuestion); // Delete a question by ID

module.exports = router;
