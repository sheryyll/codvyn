const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Day 17 MongoDB & Mongoose Fundamentals Part 1");
});

app.get("/test-user", async (req, res) => {
  try {
    const user = await User.create({
      name: "Test User",
      email: "test@example.com",
      age: 25
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
