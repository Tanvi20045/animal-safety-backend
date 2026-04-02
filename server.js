console.log("FILE IS RUNNING");
console.log("🚀 Starting Server...");

// Load environment variables FIRST
const dotenv = require("dotenv");
dotenv.config();

// Imports
const express = require("express");
const cors = require("cors"); 
const connectDB = require("./config/db");

// Connect MongoDB Atlas
connectDB();

// Create app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// IMPORT ROUTES
const authRoutes = require("./routes/authRoutes");
const reportRoutes = require("./routes/reportRoutes");

// CONNECT ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});