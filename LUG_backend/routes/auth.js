const JOI = require("joi");
const bcrypt = require("bcrypt");
const {
  User
} = require("../models/userSchema");
const router = require("express").Router();
/*   AUTH ROUTE  checks user data with JOI and checks mongo for the unique email,
  if all conditions are met triggers "generateAuthToken" a function that creates a token for the user (front - signin component) */
router.post("/", async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) return res.status(400).send("Invalid email or password");
  let user = await User.findOne({
    email: req.body.email
  });
  if (!user) return res.status(400).send("Invalid email or password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");

  res.json({
    token: user.generateAuthToken()
  });
});

function validate(req) {
  const schema = JOI.object({
    email: JOI.string().min(6).max(1024).required().email(),
    password: JOI.string().min(6).max(1024).required(),
  });
  return schema.validate(req);
}

module.exports = router;