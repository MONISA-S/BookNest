const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const borrowRoutes = require("./routes/borrowRoutes");

const app = express();


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(cors());

app.use(express.json());


// =====================================================
// ROUTES
// =====================================================

app.use("/api/auth", authRoutes);

app.use("/api/books", bookRoutes);

// IMPORTANT:
// Frontend uses /api/borrow
app.use("/api/borrow", borrowRoutes);


// =====================================================
// HOME
// =====================================================

app.get("/", (req, res) => {

    res.json({
        message: "BookNest backend is running"
    });

});


// =====================================================
// DATABASE
// =====================================================

mongoose
    .connect(process.env.MONGO_URI)

    .then(() => {

        console.log(
            "MongoDB connected successfully"
        );

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {

            console.log(
                `Server running on http://localhost:${PORT}`
            );

        });

    })

    .catch((error) => {

        console.error(
            "MongoDB connection failed:",
            error.message
        );

    });