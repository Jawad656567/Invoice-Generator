import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import shopRoutes from "./routes/shop.js";
import invoiceRoutes from "./routes/invoice.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/shops", shopRoutes);
app.use("/api/invoices", invoiceRoutes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error("❌ MongoDB connection error:", err));
