import express from "express";

const router = express.Router();

router.post("/logout", (req, res) => {
 res.clearCookie("sessionToken");

 res.json({ message: "User Logged Out / Session Ended" });
});
export default router;