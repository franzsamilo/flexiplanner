import express, { Request, Response } from "express";
import flexiplannerDB from "../../poolDB/flexiplanner";

const router = express.Router();

router.get("/read", async (req: Request, res: Response) => {
  try {
    const events = await flexiplannerDB.query(
      "SELECT * FROM events WHERE user_id = 1 AND category_name = '' "
    );

    res.status(200).json(events.rows);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

export default router;
