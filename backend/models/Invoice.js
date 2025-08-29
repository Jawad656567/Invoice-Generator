import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  quantity: Number,
  total: Number,
  description: String,
});

const InvoiceSchema = new mongoose.Schema({
  customer: {
    name: String,
    address: String,
    invoiceDate: String,
  },
  products: [ProductSchema],
}, { timestamps: true });

export default mongoose.model("Invoice", InvoiceSchema);
