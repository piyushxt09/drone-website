const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User"); // Import your User model
const jwt = require("jsonwebtoken");

const router = express.Router();

// Signup Route
// Signup Route
router.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered!" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ firstName, lastName, email, password: hashedPassword });
        await newUser.save();

        // Generate JWT Token
        const token = jwt.sign({ id: newUser._id }, "your_secret_key", { expiresIn: "1h" });

        res.status(201).json({ message: "User registered successfully!", token, user: newUser });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Server error!" });
    }
});



// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password." });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password." });
        }

        // Generate JWT Token
        const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

        res.json({ message: "Login successful", token, user });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
});



module.exports = router;
