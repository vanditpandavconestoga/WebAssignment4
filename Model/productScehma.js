const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  description: String,
  image: String,
  pricing: Number,
  shippingCost: Number,
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
