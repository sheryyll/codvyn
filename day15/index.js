const express = require("express");
const usersRouter = require("./routes/users");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Day 15 Express server is running");
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from API"
  });
});

app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
