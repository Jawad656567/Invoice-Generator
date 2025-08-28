import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import shopRoutes from "./routes/shop.js";
import invoiceRoutes from "./routes/invoice.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/shops", shopRoutes);
app.use("/api/invoices", invoiceRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
