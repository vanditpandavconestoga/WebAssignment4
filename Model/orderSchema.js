const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  quantities: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  totalAmount: Number,
  orderDate: { type: Date, default: Date.now },
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
