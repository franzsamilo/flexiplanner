import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import flexiplannerDB from "../../poolDB/flexiplanner";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { user_name, password } = req.body;

    const user = await flexiplannerDB.query(
      "SELECT * FROM users WHERE username = $1",
      [user_name]
    );

    if (user.rows.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const storedPassword = user.rows[0].password;

    const isPasswordValid = await bcrypt.compare(password, storedPassword);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { user_id: user.rows[0].user_id },
      "your_secret_key",
      { expiresIn: "1h" }
    );

    res.cookie("sessionToken", token, { httpOnly: false });


    res.status(200).json({ message: "Login successful", token, user: { user_id: user.rows[0].user_id } });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Failed to login" });
  }
});

export default router;
