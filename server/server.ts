import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskCreate';
import eventRoutes from './routes/eventCreate'; 

const app = express();
const PORT = 6969;

app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);
app.use('/api/events', eventRoutes); 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
