import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskCreate';
import taskReadRoutes from './routes/taskRead';
import eventRoutes from './routes/eventCreate';
import eventReadRoutes from './routes/eventRead';

const app = express();
const PORT = 6969;

app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/eventRead', eventReadRoutes);
app.use('/api/taskRead', taskReadRoutes);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
