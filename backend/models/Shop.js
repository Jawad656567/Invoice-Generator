const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  shopname: { type: String, required: true },
  location: { type: String },
  contact: { type: String },
  email: { type: String },
  owner: { type: String },
  open: { type: String },
  shopType: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Shop', shopSchema);
