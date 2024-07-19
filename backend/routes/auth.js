const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getCandidateCount,
} = require("../controllers/userController");

router.post("/register", signup);
router.post("/login", login);
router.get("/candidate-count", getCandidateCount); // Get candidate count

module.exports = router;
