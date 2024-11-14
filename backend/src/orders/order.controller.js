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

module.exports = {
  createOrder,
};
