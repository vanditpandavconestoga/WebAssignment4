const express = require("express");
const {
  getCommentData,
  createCommentData,
  updateCommentData,
  deleteCommentData,
} = require("../Controller/commentController");

const router = express.Router();

router.get("/comment/:id?", getCommentData);
router.post("/comment/createComment", createCommentData);
router.put("/comment/updateComment/:id", updateCommentData);
router.delete("/comment/deleteComment/:id", deleteCommentData);

module.exports = router;
