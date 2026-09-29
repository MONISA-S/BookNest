const express = require("express");
const Book = require("../models/Book");
const protect = require("../middleware/authMiddleware");
const router = express.Router();


// CREATE BOOK
router.post("/", async (req, res) => {
    try {
        const book = await Book.create(req.body);

        res.status(201).json({
            message: "Book created successfully",
            book
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.delete("/:bookId", protect, async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        await Book.findByIdAndDelete(req.params.bookId);

        res.status(200).json({
            message: "Book deleted successfully"
        });

    } catch (error) {
        console.error("DELETE BOOK ERROR:", error);

        res.status(500).json({
            message: error.message
        });
    }
});


// GET ALL BOOKS
// GET ALL BOOKS + SEARCH + FILTER + PAGINATION
router.get("/", protect, async (req, res) => {
    try {
        const {
            search,
            category,
            status,
            page = 1,
            limit = 5
        } = req.query;

        let filter = {};

        // Search by title or author
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: "i" } },
                { author: { $regex: search, $options: "i" } }
            ];
        }

        // Filter by category
        if (category) {
            filter.category = category;
        }

        // Filter by status
        if (status) {
            filter.status = status;
        }

        const skip = (page - 1) * limit;

        const books = await Book.find(filter)
            .skip(skip)
            .limit(Number(limit));

        const totalBooks = await Book.countDocuments(filter);

        res.status(200).json({
            page: Number(page),
            limit: Number(limit),
            totalBooks,
            totalPages: Math.ceil(totalBooks / limit),
            books
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// GET SINGLE BOOK

// UPDATE BOOK
router.put("/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book updated successfully",
            book
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});


// DELETE BOOK
router.delete("/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            message: "Invalid book ID"
        });
    }
});


module.exports = router;