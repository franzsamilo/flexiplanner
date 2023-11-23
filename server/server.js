const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 6969;

app.get("/api/login", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.json({ message: "FLEXIPLANNER" });
});

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
