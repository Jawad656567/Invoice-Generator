import express from "express";
import Shop from "../models/Shop.js";

const router = express.Router();

// Get all shops
router.get("/", async (req, res) => {
  try {
    const shops = await Shop.find();
    res.json(shops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new shop
router.post("/", async (req, res) => {
  try {
    const shop = new Shop(req.body);
    const savedShop = await shop.save();
    res.status(201).json(savedShop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update existing shop
router.put("/:id", async (req, res) => {
  try {
    const updatedShop = await Shop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedShop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
