const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  division: { type: String, enum: ["office", "personal"], required: true },
});

module.exports = mongoose.model("Category", categorySchema);
