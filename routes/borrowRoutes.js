const express = require("express");
const Borrow = require("../models/Borrow");
const Book = require("../models/Book");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// BORROW BOOK
router.post("/:bookId", protect, async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        if (book.status !== "available") {
            return res.status(400).json({
                message: "Book is not available"
            });
        }

        const borrow = await Borrow.create({
            user: req.user.id,
            book: book._id
        });

        book.status = "issued";
        await book.save();

        res.status(201).json({
            message: "Book borrowed successfully",
            borrow
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// GET MY BORROWED BOOKS
router.get("/my-books", protect, async (req, res) => {
    try {
        const borrows = await Borrow.find({
            user: req.user.id
        }).populate("book");

        res.status(200).json({
            count: borrows.length,
            borrows
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// RETURN BOOK
router.put("/return/:borrowId", protect, async (req, res) => {
    try {
        const borrow = await Borrow.findById(req.params.borrowId);

        if (!borrow) {
            return res.status(404).json({
                message: "Borrow record not found"
            });
        }

        if (borrow.user.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You cannot return this book"
            });
        }

        if (borrow.status === "returned") {
            return res.status(400).json({
                message: "Book already returned"
            });
        }

        borrow.status = "returned";
        borrow.returnedAt = new Date();

        await borrow.save();

        await Book.findByIdAndUpdate(borrow.book, {
            status: "available"
        });

        res.status(200).json({
            message: "Book returned successfully",
            borrow
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


module.exports = router;