const express = require("express");
const auth = require("../middleware/auth");
const User = require("../models/User");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

module.exports = router;
