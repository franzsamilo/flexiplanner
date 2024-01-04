import express, { Request, Response } from "express";
import flexiplannerDB from "../../poolDB/flexiplanner";

const router = express.Router();

router.put("/update", async (req: Request, res: Response) => {
  try {
    const { subject, attribute, newValue } = req.body;

    const updateEvent = await flexiplannerDB.query(
      `UPDATE events SET ${attribute} = $1 WHERE subject = $2`,
      [newValue, subject]
    );

    res.json("Event was updated!");
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ error: "Failed to update event" });
  }
});

export default router;