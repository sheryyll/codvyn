const express = require("express");
const usersRouter = require("./routes/users");

const app = express();
const PORT = 3000;


app.use(express.json());

// Routes
app.use("/api/users", usersRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Day 16 Node.js & Express Fundamentals Part 2" );
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
