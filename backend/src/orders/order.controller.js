const Order = require("./order.model");

// place a order
const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (error) {
    console.log("error creating order", error);
    res.status(500).send({ message: "Error creating order!" });
  }
};

// get order by user email
const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    if (!orders) {
      return res.status(404).send({ message: "orders not found !" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("erro fetching order", error);
    res.status(500).send({ message: "Failed to fetch orders" });
  }
};

module.exports = {
  createOrder,
  getOrderByEmail,
};
