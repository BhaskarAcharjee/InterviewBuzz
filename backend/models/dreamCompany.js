const mongoose = require("mongoose");

const dreamCompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const DreamCompany = mongoose.model("DreamCompany", dreamCompanySchema);

module.exports = DreamCompany;
