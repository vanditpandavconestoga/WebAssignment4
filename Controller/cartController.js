const Cart = require("../Model/cartSchema");

module.exports.getCartData = async (req, res) => {
  try {
    const id = req.params.id
      ? {
          _id: req.params.id,
        }
      : {};

    const result = await Cart.find(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.createCartData = async (req, res) => {
  try {
    const cartData = req.body;

    const cart = new Cart(cartData);
    await cart.save();
    res.status(200).send(cart);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports.updateCartData = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const updatedCart = await Cart.findByIdAndUpdate(id, data, { new: true });
    res.status(200).send(updatedCart);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.deleteCartData = async (req, res) => {
  try {
    const id = req.params.id;
    await Cart.findByIdAndDelete(id);
    res.status(200).send({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
