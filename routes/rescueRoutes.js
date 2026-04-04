const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log("🚨 Rescue Request:", req.body);
    res.json({ message: "Rescue request received successfully" });
});

module.exports = router;