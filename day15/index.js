const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Day 15 Express server is running");
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from API"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
