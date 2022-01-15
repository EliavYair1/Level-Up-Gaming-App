const router = require("express").Router();
const {
  validateUser,
  User
} = require("../models/userSchema");
const lodash = require("lodash");
const bcrypt = require("bcrypt");
const auth = require('../middleware/auth');

/* POST - takes user details
 check validation and insert it to mongo (front - signup / signupPremium components)  */
router.post("/", async (req, res) => {
  const {
    error
  } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({
    email: req.body.email
  });

  if (user) return res.status(400).send("User Already Registered");

  user = new User(lodash.pick(req.body, ["firstName", "lastName", "email", "password", "biz"]));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  res.send(lodash.pick(user, ["_id", "firstName", "lastName", "email"]));
});
// GET user data by id in url )(front - profile component)
router.get("/:id", async (req, res) => {
  const user = await User.findById({
    _id: req.params.id
  });
  res.send(lodash.pick(user, ["_id", "firstName", "lastName", "email"]));
});


// UPDATE user data by id in url (front - editProfile component)
router.put("/:id", auth, async (req, res) => {
  const {
    error
  } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };

  User.findOneAndUpdate({
      _id: req.params.id
    }, user)
    .then((updatedUser) => {
      res.json(updatedUser.toJSON());
    })
    .catch((err) => console.log(err));

  user = await User.findOne({
    _id: req.params.id
  });

  if (!user) return res.status(404).send("The User With The Given Id Was Not Found");

  res.send(user);
});
// DELETE user data by id in url )(front - editProfile component)

router.delete("/:id", auth, async (req, res) => {
  const user = await User.findOneAndRemove({
    _id: req.params.id
  });
  if (!user) return res.status(404).send("User Not Found");
  res.send(user);
});
module.exports = router;