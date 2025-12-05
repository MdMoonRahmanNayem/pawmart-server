import express from "express";
import cors from "cors";
import listingRoutes from "./routes/listingRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/listings", listingRoutes);
app.use("/api/orders", orderRoutes);

export default app;
