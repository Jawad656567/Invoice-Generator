import express from "express";
import Invoice from "../models/Invoice.js";

const router = express.Router();

// GET all invoices
router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    console.error("GET /api/invoices error:", err);
    res.status(500).json({ message: err.message });
  }
});

// POST create invoice
router.post("/", async (req, res) => {
  try {
    const payload = req.body;

    // Basic validation
    if (!payload.customer || !payload.products || payload.products.length === 0) {
      return res.status(400).json({ message: "Customer and products are required" });
    }

    // Ensure numbers and trim strings
    const products = payload.products.map((p) => ({
      productName: (p.productName || "").trim(),
      price: Number(p.price || 0),
      quantity: Number(p.quantity || 0),
      description: (p.description || "").trim(),
      total: Number(p.total || (Number(p.price || 0) * Number(p.quantity || 0))),
    }));

    const invoice = new Invoice({
      customer: {
        name: (payload.customer.name || "").trim(),
        address: (payload.customer.address || "").trim(),
        invoiceDate: (payload.customer.invoiceDate || "").trim(),
      },
      products,
    });

    const saved = await invoice.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("POST /api/invoices error:", err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
