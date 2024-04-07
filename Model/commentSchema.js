const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: Number,
  images: [String],
  text: String,
});

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;
