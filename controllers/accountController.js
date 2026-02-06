const Account = require("../models/Account");

exports.createAccount = async (req, res, next) => {
  try {
    const account = await Account.create(req.body);
    res.status(201).json(account);
  } catch (error) {
    next(error);
  }
};

exports.getAccounts = async (req, res, next) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    next(error);
  }
};
