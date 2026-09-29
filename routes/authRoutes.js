const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();


// REGISTER
router.post("/register", async (req, res) => {
    try {
        console.log("REGISTER:", req.body);

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const oldUser = await User.findOne({
            email: email.toLowerCase()
        });

        if (oldUser) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "student"
});
        await user.save();

        console.log("USER CREATED:", user.email);

        res.status(201).json({
            message: "Registration successful"
        });

    } catch (error) {
        console.error("REGISTER ERROR:", error);

        res.status(500).json({
            message: error.message
        });
    }
});


// LOGIN
router.post("/login", async (req, res) => {
    try {
        console.log("LOGIN REQUEST:", req.body);

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({
            email: email.toLowerCase()
        });

        console.log("USER FOUND:", user ? user.email : "NO USER");

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        console.log("PASSWORD FROM REQUEST:", password);
        console.log("PASSWORD FROM DATABASE:", user.password);

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        console.log("PASSWORD MATCH:", passwordMatch);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error("LOGIN ERROR:", error);

        res.status(500).json({
            message: error.message
        });
    }
});


module.exports = router;