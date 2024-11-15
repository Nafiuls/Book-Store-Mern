const express = require("express");
const User = require("./user.model");
const router = express.Router();
const jwt = require("jsonwebtoken");

const jwt_secret = process.env.JWT_SECRET;

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
    if (!admin) {
      res.status(404).send({ message: "Admin not found" });
    }
    if (admin.password !== password) {
      res.status(401).send({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
      jwt_secret,
      { expiresIn: "8h" }
    );
    return res.status(200).json({
      message: "Authentication successful",
      token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("failed to login as admin", error);
    res.status(401).send({ message: "failed to login as admin" });
  }
});

module.exports = router;
