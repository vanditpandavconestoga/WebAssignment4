const Product = require("../Model/productScehma");

module.exports.getProdctData = async (req, res) => {
  try {
    const id = req.params.id
      ? {
          _id: req.params.id,
        }
      : {};

    const result = await Product.find(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.createProductData = async (req, res) => {
  try {
    const ProductData = req.body;

    const product = new Product(ProductData);
    await product.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports.updateProductData = async (req, res) => {
  try {
    const id = req.params.id;
    const Data = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send(Data);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.deleteProductData = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
