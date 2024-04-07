const express = require("express");
const {
  getCartData,
  createCartData,
  updateCartData,
  deleteCartData,
} = require("../Controller/cartController");

const router = express.Router();

router.get("/cart/:id?", getCartData);
router.post("/cart/createCart", createCartData);
router.put("/cart/updateCart/:id", updateCartData);
router.delete("/cart/deleteCart/:id", deleteCartData);

module.exports = router;
