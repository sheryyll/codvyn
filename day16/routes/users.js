const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];


router.get("/", (req, res) => {
  res.status(200).json(users);
});


router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});


router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name required" });
  }

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);
  console.log("New user added:", newUser);

  res.status(201).json(newUser);
});

module.exports = router;
