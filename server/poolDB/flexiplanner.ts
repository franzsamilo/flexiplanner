import * as dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const flexiplannerDB = new Pool({
  user: process.env.DATABASE_USER as string,
  password: process.env.DATABASE_PASSWORD as string,
  host: process.env.DATABASE_HOST as string,
  port: process.env.DATABASE_PORT as unknown as number,
  database: process.env.DATABASE_NAME as string,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default flexiplannerDB;
