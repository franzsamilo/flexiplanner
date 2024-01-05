import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes/taskCreate";
import taskReadRoutes from "./routes/taskRoutes/taskRead";
import eventRoutes from "./routes/eventsRoutes/eventCreate";
import eventReadRoutes from "./routes/eventsRoutes/eventRead";
import eventDeleteRoutes from "./routes/eventsRoutes/eventDelete";
import eventUpdateRoutes from "./routes/eventsRoutes/eventUpdate";
import userRegisterRoutes from "./routes/userAuth/userRegister";
import userLoginRoutes from "./routes/userAuth/userLogin";

const app = express();
const PORT = 6969;

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/eventRead", eventReadRoutes);
app.use("/api/taskRead", taskReadRoutes);
app.use("/api/eventDelete", eventDeleteRoutes);
app.use("/api/eventUpdate", eventUpdateRoutes);
app.use("/api/auth", userRegisterRoutes)
app.use("/api/auth", userLoginRoutes)


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
