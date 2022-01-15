const mongoose = require("mongoose");
const JOI = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

/* CREATING USER SCHEMA */

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024,
  },
  email: {
    type: String,
    maxlength: 1024,
    unique: true,
    required: true,
    minlength: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  biz: {
    type: Boolean,
    required: true,
  },
});
// add a function to userSchema that returns a token
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({
    _id: this._id,
    biz: this.biz
  }, config.get("jwtKey"));
  return token;
};

/*  CREATING A MODEL FOR A USER/FORM */
const User = mongoose.model("User", userSchema);

/* VALIDATION VIA JOI */
function validateUser(user) {
  const schema = JOI.object({
    firstName: JOI.string().min(2).max(1024).required(),
    lastName: JOI.string().min(2).max(1024).required(),
    email: JOI.string().min(2).max(1024).required().email(),
    password: JOI.string().min(5).max(1024).required(),
    biz: JOI.boolean().required(),
  });
  return schema.validate(user);
}

const userModelExports = {
  validateUser,
  User,
};
module.exports = userModelExports;