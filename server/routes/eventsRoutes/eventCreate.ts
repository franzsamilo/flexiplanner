import express, { Request, Response } from 'express';
import flexiplannerDB from '../../poolDB/flexiplanner';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
  try {
    const { day, subject, starts, ends, user_id } = req.body;

    await flexiplannerDB.query(
      'INSERT INTO events (day, subject, starts, ends, user_id) VALUES ($1, $2, $3, $4, $5)',
      [day, subject, starts, ends, user_id]
    );

    res.status(201).json({ message: 'Event created successfully' });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

export default router;
