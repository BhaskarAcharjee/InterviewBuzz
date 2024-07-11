const DreamCompany = require('../models/dreamCompany');
const { getLoginUserId } = require('./userController');

const userId = getLoginUserId(); // Get the user ID using the function

// Fetch all dream companies for a user
exports.getDreamCompanies = async (req, res) => {
  try {
    const dreamCompanies = await DreamCompany.find({ userId });
    res.json(dreamCompanies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new dream company
exports.addDreamCompany = async (req, res) => {
  const dreamCompany = new DreamCompany({
    name: req.body.name,
    description: req.body.description,
    userId: userId,
  });

  try {
    const newDreamCompany = await dreamCompany.save();
    res.status(201).json(newDreamCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a specific dream company by ID
exports.getDreamCompanyById = async (req, res) => {
  try {
    const dreamCompany = await DreamCompany.findById(req.params.id);
    if (!dreamCompany) {
      return res.status(404).json({ message: 'Dream company not found' });
    }
    res.json(dreamCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a dream company by ID
exports.updateDreamCompany = async (req, res) => {
  try {
    const updatedDreamCompany = await DreamCompany.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDreamCompany) {
      return res.status(404).json({ message: 'Dream company not found' });
    }
    res.json(updatedDreamCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a dream company by ID
exports.deleteDreamCompany = async (req, res) => {
  try {
    await DreamCompany.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted dream company' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
