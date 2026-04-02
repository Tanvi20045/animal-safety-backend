const express = require("express");
const router = express.Router();

const Report = require("../models/Report");
const auth = require("../middleware/auth");

// CREATE REPORT
router.post("/", async (req, res) => {
  try {
    const report = await Report.create(req.body);
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL REPORTS
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;