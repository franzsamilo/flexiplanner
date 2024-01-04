import express, { Request, Response } from "express";
import flexiplannerDB from "../../poolDB/flexiplanner";

const router = express.Router();

router.put("/update", async (req, res) => {
  try {
    const { day, subject, start, ends, event_id } = req.body;

    let updateField = "";
    let updateValue = "";

    if (day !== undefined) {
      updateField = "day";
      updateValue = day;
    } else if (subject !== undefined) {
      updateField = "subject";
      updateValue = subject;
    } else if (start !== undefined) {
      updateField = "start";
      updateValue = start;
    } else if (ends !== undefined) {
      updateField = "ends";
      updateValue = ends;
    } else {
      return res.status(400).json({ error: "No valid update field provided" });
    }

    const updateEvent = await flexiplannerDB.query(
      `UPDATE events SET ${updateField} = $1 WHERE id = $2`,
      [updateValue, event_id]
    );

    res.json(`Event ${updateField} was updated!`);
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ error: "Failed to update event" });
  }
});

export default router;
