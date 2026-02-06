const express = require("express");
const { getSummary } = require("../Controllers/summaryController");

const router = express.Router();

router.get("/", getSummary);

module.exports = router;
