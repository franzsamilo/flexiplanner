// eslint-disable-next-line @typescript-eslint/no-var-requires
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const flexiplannerDB = new Pool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default flexiplannerDB;
