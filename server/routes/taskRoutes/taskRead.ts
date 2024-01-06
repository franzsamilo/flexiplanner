import express, { Request, Response } from 'express';
import flexiplannerDB from '../../poolDB/flexiplanner';

const router = express.Router();

router.get('/read/:user_id', async (req: Request, res: Response) => {
  try {
    const user_id = req.params.user_id;
    const { category_name = '' } = req.query;
    const tasks = await flexiplannerDB.query(
      `SELECT * FROM tasks WHERE user_id = $1 AND category_name = $2`,
      [user_id, category_name]
    );

    res.status(200).json(tasks.rows);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

export default router;
