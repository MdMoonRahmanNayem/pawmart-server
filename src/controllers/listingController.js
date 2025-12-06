import Listing from "../models/Listing.model.js";

// Create Listing
export const addListing = async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    const saved = await newListing.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get recent listings (limit optional)
export const getListings = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 0;

    const listings = await Listing.find({})
      .sort({ createdAt: -1 })
      .limit(limit);

    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by category
export const getListingsByCategory = async (req, res) => {
  try {
    const category = req.params.categoryName;

    const items = await Listing.find({ category });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get listing details
export const getListingById = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Listing.findById(id);

    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
  // Get listings by user email
export const getListingsByEmail = async (req, res) => {
  try {
    const email = req.query.email;
    const data = await Listing.find({ email });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const deleteListing = async (req, res) => {
  try {
    const id = req.params.id;
    await Listing.findByIdAndDelete(id);
    res.json({ message: "Listing deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const updateListing = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Listing.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

