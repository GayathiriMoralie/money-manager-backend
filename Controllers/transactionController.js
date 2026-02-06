import Transaction from "../models/Transaction.js";

// Create new transaction
export const createTransaction = async (req, res) => {
  try {
    const txn = new Transaction(req.body);
    const savedTxn = await txn.save();
    res.status(201).json(savedTxn);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch all transactions
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Edit transaction
export const updateTransaction = async (req, res) => {
  try {
    const updated = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete transaction
export const deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
