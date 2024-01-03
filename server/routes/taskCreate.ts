import express, { Request, Response } from 'express';
import flexiplannerDB from '../poolDB/flexiplanner';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
  try {
    const {
      task_name,
      task_description,
      task_priority,
      task_due_date,
      task_duration_days,
      task_duration_hours,
      task_duration_minutes,
      task_status,
      user_id,
      category_name,
    } = req.body;

    await flexiplannerDB.query(
      'INSERT INTO tasks (task_name, task_description, task_priority, task_due_date, task_duration_days, task_duration_hours, task_duration_minutes, task_status, user_id, category_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
      [
        task_name,
        task_description,
        task_priority,
        task_due_date,
        task_duration_days,
        task_duration_hours,
        task_duration_minutes,
        task_status,
        user_id,
        category_name,
      ]
    );

    res.status(201).json({ message: 'Task created successfully' });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to create task' });
  }
});

export default router;
