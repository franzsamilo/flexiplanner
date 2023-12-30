import express, { Request, Response } from "express";
import cors from "cors";
import flexiplannerDB from "./poolDB/flexiplanner";

const app = express();
const PORT = 6969;

app.use(cors());

app.get("/api/test-connection", async (req: Request, res: Response) => {
  try {
    const client = await flexiplannerDB.connect();
    client.release();

    res.json({ message: "Database connection successful" });
  } catch (error) {
    console.error("Error connecting to database:", error);
    res.status(500).json({ error: "Failed to connect to the database" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
