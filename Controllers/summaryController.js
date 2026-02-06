const Transaction = require("../models/Transaction");

exports.getSummary = async (req, res, next) => {
  try {
    const { filter } = req.query; // week | month | year
    let startDate = new Date();

    if (filter === "week") startDate.setDate(startDate.getDate() - 7);
    if (filter === "month") startDate.setMonth(startDate.getMonth() - 1);
    if (filter === "year") startDate.setFullYear(startDate.getFullYear() - 1);

    const transactions = await Transaction.find({
      date: { $gte: startDate },
    });

    let income = 0;
    let expense = 0;

    transactions.forEach((t) => {
      t.type === "income" ? (income += t.amount) : (expense += t.amount);
    });

    res.json({
      income,
      expense,
      balance: income - expense,
    });
  } catch (error) {
    next(error);
  }
};
