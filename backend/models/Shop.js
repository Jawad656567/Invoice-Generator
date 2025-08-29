import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
  shopname: { type: String, required: true },
  location: String,
  contact: String,
  email: String,
  owner: String,
  open: String,
  shopType: String,
}, { timestamps: true });

export default mongoose.model("Shop", ShopSchema);
