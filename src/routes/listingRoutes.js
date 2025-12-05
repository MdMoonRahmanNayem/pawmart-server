import express from "express";
import {
  addListing,
  getListings,
  getListingsByCategory,
  getListingById,
  getListingsByEmail,
  deleteListing,
  updateListing
} from "../controllers/listingController.js";

const router = express.Router();

router.get("/", getListings);             // all + recent (limit)
router.get("/my", getListingsByEmail);    // MUST COME BEFORE :id
router.get("/category/:categoryName", getListingsByCategory);
router.get("/:id", getListingById);

router.post("/", addListing);
router.delete("/:id", deleteListing);
router.put("/:id", updateListing);


export default router;
