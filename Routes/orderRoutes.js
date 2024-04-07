const express = require("express");
const {
  getOrderData,
  createOrderData,
  updateOrderData,
  deleteOrderData,
} = require("../Controller/orderController");

const router = express.Router();

router.get("/order/:id?", getOrderData);
router.post("/order/createOrder", createOrderData);
router.put("/order/updateOrder/:id", updateOrderData);
router.delete("/order/deleteOrder/:id", deleteOrderData);

module.exports = router;
