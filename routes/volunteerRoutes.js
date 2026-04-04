const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log("🙋 Volunteer Request:", req.body);
    res.json({ message: "Volunteer request received successfully" });
});

module.exports = router;