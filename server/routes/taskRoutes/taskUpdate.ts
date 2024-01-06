import express, { Request, Response } from 'express';
import flexiplannerDB from '../../poolDB/flexiplanner';

const router = express.Router();

router.put('/update/:task_id', async (req: Request, res: Response) => {
  console.log('Reached task update route');
  const {
    task_name,
    task_priority,
    task_due_date,
    task_duration_days,
    task_duration_hours,
    task_duration_minutes,
    task_status,
  } = req.body;

  const { task_id } = req.params;

  try {
    await flexiplannerDB.query(
      `UPDATE tasks 
       SET 
         task_name = $1, 
         task_priority = $2, 
         task_due_date = $3, 
         task_duration_days = $4, 
         task_duration_hours = $5, 
         task_duration_minutes = $6, 
         task_status = $7 
       WHERE 
         task_id = $8`,
      [
        task_name,
        task_priority,
        task_due_date,
        task_duration_days,
        task_duration_hours,
        task_duration_minutes,
        task_status,
        task_id,
      ]
    );

    res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Failed to update task' });
  }
  console.log('End of task update route');
});

export default router;
