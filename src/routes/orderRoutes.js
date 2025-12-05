import express from "express";
import {
  addOrder,
  getOrdersByEmail,
  getAllOrders,
} from "../controllers/orderController.js";

const router = express.Router();

// POST Order
router.post("/", addOrder);

// Get orders of a specific user
router.get("/:email", getOrdersByEmail);

// Get all orders (optional)
router.get("/", getAllOrders);

export default router;
