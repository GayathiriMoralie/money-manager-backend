const Transaction = require("../models/Transaction");

module.exports = async (req, res, next) => {
  const transaction = await Transaction.findById(req.params.id);
  const diffHours =
    (Date.now() - new Date(transaction.createdAt)) / (1000 * 60 * 60);

  if (diffHours > 12) {
    return res.status(403).json({ message: "Editing not allowed after 12 hours" });
  }
  next();
};
