import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    buyerName: { type: String, required: true },
    email: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    address: { type: String, required: true },
    date: { type: String, required: true },
    phone: { type: String, required: true },
    additionalNotes: { type: String },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
