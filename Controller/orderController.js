const Order = require("../Model/orderSchema");

exports.getOrderData = async (req, res) => {
  try {
    const id = req.params.id ? { _id: req.params.id } : {};
    const orders = await Order.find(id);
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.createOrderData = async (req, res) => {
  try {
    const orderData = req.body;

    const order = new Order(orderData);
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.updateOrderData = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(id, data, { new: true });
    res.status(200).send(updatedOrder);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.deleteOrderData = async (req, res) => {
  try {
    const id = req.params.id;
    await Order.findByIdAndDelete(id);
    res.status(200).send({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
