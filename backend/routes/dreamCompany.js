const express = require("express");
const router = express.Router();
const {
  getDreamCompanies,
  addDreamCompany,
  getDreamCompanyById,
  updateDreamCompany,
  deleteDreamCompany,
} = require("../controllers/dreamCompanyController");
const authenticateUser = require("../middleware/authenticateUser");

router.use(authenticateUser); // Apply the authentication middleware to all routes

router.get("/", getDreamCompanies); // GET all dream companies for a user
router.post("/", addDreamCompany); // POST a new dream company
router.get("/:id", getDreamCompanyById); // GET a specific dream company by ID
router.put("/:id", updateDreamCompany); // UPDATE a specific dream company by ID
router.delete("/:id", deleteDreamCompany); // DELETE a specific dream company by ID

module.exports = router;
