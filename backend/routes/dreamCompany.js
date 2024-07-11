const express = require("express");
const router = express.Router();
const {
  getDreamCompanies,
  addDreamCompany,
  deleteDreamCompany,
} = require("../controllers/dreamCompanyController");

router.get("/", getDreamCompanies); // GET all dream companies for a user
router.post("/", addDreamCompany); // POST a new dream company
router.delete("/:id", deleteDreamCompany); // DELETE a dream company

module.exports = router;
