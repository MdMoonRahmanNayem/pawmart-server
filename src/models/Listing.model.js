import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Pets", "Pet Food", "Accessories", "Care Products"],
    },

    price: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    }
  },

  {
    timestamps: true, // ⭐ VERY IMPORTANT — createdAt & updatedAt automatically যোগ হবে
  }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
