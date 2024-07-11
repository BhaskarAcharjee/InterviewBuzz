const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Base API route
app.get("/api", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Auth Routes
const authRouter = require("./routes/auth");
app.use("/api/auth", authRouter);

// Behavioral Question Routes
const behavioralQuestionsRouter = require("./routes/behavioralQuestions");
app.use("/api/behavioral-questions", behavioralQuestionsRouter);

// Dream companies Routes
const dreamCompaniesRouter = require("./routes/dreamCompany");
app.use("/api/dream-companies", dreamCompaniesRouter);