import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import express from "express";  
import cors from "cors";  

dotenv.config();
connectDB();

app.use("/uploads", express.static("public/uploads"));


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);

app.use(cors());

});
