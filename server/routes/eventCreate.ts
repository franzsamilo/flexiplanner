import express, { Request, Response } from 'express';
import flexiplannerDB from '../poolDB/flexiplanner';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
  try {
    const {
      day,
      subject,
      starts,
      ends,
      user_id,
      category_name,
    } = req.body;

    await flexiplannerDB.query(
      'INSERT INTO events (day, subject, starts, ends, user_id, category_name) VALUES ($1, $2, $3, $4, $5, $6)',
      [
        day,
        subject,
        starts,
        ends,
        user_id,
        category_name,
      ]
    );

    res.status(201).json({ message: 'Event created successfully' });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

export default router;
