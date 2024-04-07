const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  //   purchaseHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  shippingAddress: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
