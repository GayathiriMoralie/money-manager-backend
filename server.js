import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import transactionRoutes from "./routes/transactionRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/transactions", transactionRoutes);

// Port
const PORT = process.env.PORT || 5000;

// MongoDB connection (fix for Mongoose v7+)
mongoose
  .connect(process.env.MONGO_URI)  // ✅ remove useNewUrlParser and useUnifiedTopology
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
