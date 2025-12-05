import Order from "../models/Order.model.js";

// ➤ Create Order
export const addOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ➤ Get Orders by User Email
export const getOrdersByEmail = async (req, res) => {
  try {
    const orders = await Order.find({ email: req.params.email });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ➤ Get ALL Orders (Admin use)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
