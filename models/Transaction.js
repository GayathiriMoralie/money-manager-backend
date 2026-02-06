import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  type: { type: String, required: true },       // "income" or "expense"
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  division: { type: String, required: true },
  account: { type: String, default: "Cash" },   // Cash / Bank / Wallet
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
