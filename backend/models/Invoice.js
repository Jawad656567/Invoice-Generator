import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productName: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, default: "", trim: true },
  total: { type: Number, required: true },
});

const InvoiceSchema = new mongoose.Schema(
  {
    customer: {
      name: { type: String, required: true, trim: true },
      address: { type: String, required: true, trim: true },
      invoiceDate: { type: String, required: true, trim: true },
    },
    products: { type: [ProductSchema], required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Invoice", InvoiceSchema);
