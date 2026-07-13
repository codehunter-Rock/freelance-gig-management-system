const Gig = require("../models/Gig");

// @desc Create a new Gig
// @route POST /api/gigs
const createGig = async (req, res) => {
    try {
        const gig = await Gig.create(req.body);

        res.status(201).json({
            success: true,
            message: "Gig created successfully",
            data: gig,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// @desc Get all Gigs
// @route GET /api/gigs
const getAllGigs = async (req, res) => {
    try {
        const gigs = await Gig.find();

        res.status(200).json({
            success: true,
            count: gigs.length,
            data: gigs,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// @desc Get Single Gig
// @route GET /api/gigs/:id
const getGigById = async (req, res) => {
    try {
        const gig = await Gig.findById(req.params.id);

        if (!gig) {
            return res.status(404).json({
                success: false,
                message: "Gig not found",
            });
        }

        res.status(200).json({
            success: true,
            data: gig,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// @desc Update Gig
// @route PUT /api/gigs/:id
const updateGig = async (req, res) => {
    try {
        const gig = await Gig.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!gig) {
            return res.status(404).json({
                success: false,
                message: "Gig not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Gig updated successfully",
            data: gig,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// @desc Delete Gig
// @route DELETE /api/gigs/:id
const deleteGig = async (req, res) => {
    try {
        const gig = await Gig.findByIdAndDelete(req.params.id);

        if (!gig) {
            return res.status(404).json({
                success: false,
                message: "Gig not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Gig deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createGig,
    getAllGigs,
    getGigById,
    updateGig,
    deleteGig,
};