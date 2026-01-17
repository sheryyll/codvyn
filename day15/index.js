const express = require("express");
const usersRouter = require("./routes/users");

const app = express();
const PORT = 3000;

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
