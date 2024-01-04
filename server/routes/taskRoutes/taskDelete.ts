import express, { Request, Response } from 'express';
import flexiplannerDB from '../../poolDB/flexiplanner';

const router = express.Router();

router.delete('/delete/:task_id', async (req: Request, res: Response) => {
  console.log('Reached delete route');

  const { task_id } = req.params;

  try {
    await flexiplannerDB.query(`DELETE FROM tasks WHERE task_id = $1`, [
      task_id,
    ]);

    res.json('task was deleted!');
  } catch (error) {
    console.error('Error deleting events:', error);
    res.status(500).json({ error: 'Failed to delete tasks' });
  }

  console.log('End of delete route');
});

export default router;
