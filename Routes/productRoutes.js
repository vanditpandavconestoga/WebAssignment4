const express = require("express");
const {
  getProdctData,
  createProductData,
  updateProductData,
  deleteProductData,
} = require("../Controller/productController");

const router = express.Router();

router.get("/product/:id?", getProdctData);
router.post("/product/createProduct", createProductData);
router.put("/product/updateProduct/:id", updateProductData);
router.delete("/product/deleteProduct/:id", deleteProductData);

module.exports = router;
