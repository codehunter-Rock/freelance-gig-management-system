const express = require("express");
const router = express.Router();

const {
    createGig,
    getAllGigs,
    getGigById,
    updateGig,
    deleteGig,
} = require("../controllers/gigController");

// Create a new Gig
router.post("/", createGig);

// Get all Gigs
router.get("/", getAllGigs);

// Get a single Gig by ID
router.get("/:id", getGigById);

// Update a Gig
router.put("/:id", updateGig);

// Delete a Gig
router.delete("/:id", deleteGig);

module.exports = router;