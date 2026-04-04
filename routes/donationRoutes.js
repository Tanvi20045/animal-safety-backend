const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log("💰 Donation Request:", req.body);
    res.json({ message: "Donation received successfully" });
});

module.exports = router;