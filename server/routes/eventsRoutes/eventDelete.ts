import express, { Request, Response } from 'express';
import flexiplannerDB from '../../poolDB/flexiplanner';

const router = express.Router();

router.delete('/delete/:event_id', async (req: Request, res: Response) => {
  console.log('Reached delete route');

  const { event_id } = req.params;

  try {
    await flexiplannerDB.query('DELETE FROM events WHERE event_id=$1', [
      event_id,
    ]);

    res.json('event was deleted!');
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Failed to delete event' });
  }

  console.log('End of event delete route');
});

export default router;
