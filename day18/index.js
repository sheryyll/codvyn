const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use("/api/users", require("./routes/users"));


app.get("/", (req, res) => {
  res.send("Day 18 MongoDB & Mongoose Fundamentals Part 2");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
