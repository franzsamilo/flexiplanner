import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import flexiplannerDB from '../../poolDB/flexiplanner';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await flexiplannerDB.query('SELECT * FROM users WHERE email = $1', [email]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await flexiplannerDB.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

export default router;
