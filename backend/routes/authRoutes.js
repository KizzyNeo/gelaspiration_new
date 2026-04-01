const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const ADMIN = {
    username: "admin",
    password: "$2b$10$vplBgGgL60MSN3D6fXXdae0vXfadsCH9Mec08AdocC5AAqborjeJu"
};

router.post("/login", async (req, res) => {
    try {
    const { username, password } = req.body;

    if (username !== ADMIN.username) {
        return res.status(401).json({ message: "Invalid username" });
    }

    const isMatch = await bcrypt.compare(password, ADMIN.password);

    if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ token });

    } catch (err) {
        console.log("LOGIN ERROR:", err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
