const express = require("express");
const {
  createAccount,
  getAccounts,
} = require("../Controllers/accountController");

const router = express.Router();

router.post("/", createAccount);
router.get("/", getAccounts);

module.exports = router;
