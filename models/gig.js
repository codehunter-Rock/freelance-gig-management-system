const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Gig title is required"],
            trim: true,
            minlength: 5,
            maxlength: 100,
        },

        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true,
            minlength: 20,
        },

        budget: {
            type: Number,
            required: [true, "Budget is required"],
            min: [1, "Budget must be greater than 0"],
        },

        deadline: {
            type: Date,
            required: [true, "Deadline is required"],
        },

        skills: {
            type: [String],
            required: true,
        },

        duration: {
            type: String,
            required: [true, "Duration is required"],
        },

        status: {
            type: String,
            enum: ["Open", "In Progress", "Completed", "Cancelled"],
            default: "Open",
        },

        createdBy: {
            type: String,
            default: "Admin",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Gig", gigSchema);