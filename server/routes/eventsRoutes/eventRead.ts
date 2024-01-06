import express, { Request, Response } from 'express';
import flexiplannerDB from '../../poolDB/flexiplanner';

const router = express.Router();

router.get('/read', async (req: Request, res: Response) => {
  try {
    const user_id = req.query.user_id;
    const events = await flexiplannerDB.query(
      'SELECT * FROM events WHERE user_id = $1',
      [user_id]
    );

    res.status(200).json(events.rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

export default router;
