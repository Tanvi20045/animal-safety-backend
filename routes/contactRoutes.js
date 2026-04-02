const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Create contact message
router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      message: "Message sent successfully",
      data: contact,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error sending message",
      error: err.message,
    });
  }
});

// Get all contact messages
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete contact message
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;