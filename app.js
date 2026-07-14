require("dotenv").config();

const express = require("express");
const path = require("path");

const connectDB = require("./config/db");

const gigRoutes = require("./routes/gigRoutes");
const authRoutes = require("./routes/authRoutes");

const logger = require("./middleware/loggerMiddleware");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// ===============================
// Connect MongoDB
// ===============================
connectDB();

// ===============================
// Middlewares
// ===============================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger Middleware
app.use(logger);

// Serve Frontend Files
app.use(express.static(path.join(__dirname, "public")));

// ===============================
// Home Route
// ===============================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ===============================
// API Routes
// ===============================
app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigRoutes);

// ===============================
// 404 Route
// ===============================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// ===============================
// Global Error Middleware
// ===============================
app.use(errorHandler);

// ===============================
// Start Server
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server Running at http://localhost:${PORT}`);
});