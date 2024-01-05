import express, { Request, Response } from "express";
import flexiplannerDB from "../../poolDB/flexiplanner";

const router = express.Router();

router.delete("/delete", async (req: Request, res: Response) => {
  try {
    const subject = req.body.subject;

    const deleteEvent = await flexiplannerDB.query(
      "DELETE FROM events WHERE subject= $1",
      [subject]
    );

    res.json("event was deleted!");
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ error: "Failed to deleting event" });
  }
});

export default router;
