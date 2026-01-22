const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

module.exports.signup_post = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = createToken(user._id);

    res.status(201).json({ user: user._id, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) throw Error("Invalid email");

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) throw Error("Invalid password");

    const token = createToken(user._id);
    res.status(200).json({ user: user._id, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
