import express, { Request, Response } from 'express';
import flexiplannerDB from '../../poolDB/flexiplanner';

const router = express.Router();

router.put('/update/:event_id', async (req: Request, res: Response) => {
  console.log('Reached event update route');
  const { day, subject, starts, ends } = req.body;
  const { event_id } = req.params;
  try {
    await flexiplannerDB.query(
      `UPDATE events
        SET
          day = $1,
          subject = $2,
          starts =$3,
          ends = $4
        WHERE
          event_id = $5`,
      [day, subject, starts, ends, event_id]
    );

    res.status(200).json({ message: 'Event updated successfully' });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Failed to update event' });
  }
  console.log('End of event update route');
});

export default router;
