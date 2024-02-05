const { User } = require("../../models/index");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const { subscription } = user;
  if (!user) {
    return res.status(401).json({ message: "Email or password is wrong" });
  }
  const passwordCompare = await bcryptjs.compare(password, user.password);
  if (!passwordCompare) {
    return res.status(401).json({ message: "Password is wrong" });
  }
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  res.json({
    token,
    user: { email, subscription },
  });
};

module.exports = login;
