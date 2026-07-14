const express = require("express");
const router = express.Router();

const {

    createGig,

    getAllGigs,

    getGigById,

    updateGig,

    deleteGig,

} = require("../controllers/gigController");

const { protect } = require("../middleware/authMiddleware");

// Public Routes
router.get("/", getAllGigs);
router.get("/:id", getGigById);

// Protected Routes
router.post("/", protect, createGig);
router.put("/:id", protect, updateGig);
router.delete("/:id", protect, deleteGig);

module.exports = router;