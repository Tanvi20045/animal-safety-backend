const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log("📩 Adoption Request:", req.body);
    res.json({ message: "Adoption request received successfully" });
});

module.exports = router;