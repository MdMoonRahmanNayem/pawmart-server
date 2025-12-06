/*db.js*/
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
  dbName: "pawmart"
});
    console.log("Connected DB:", mongoose.connection.name)
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
