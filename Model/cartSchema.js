const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  quantities: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;
