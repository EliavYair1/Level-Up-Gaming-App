const jwt = require("jsonwebtoken");
const config = require("config");
/* A MIDDLEWARE that checks if user has a token and verify the token if everything checks out we go to the next() endpoint  */
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) return res.status(401).send("Access Denied. No Token Provided.");

  try {
    const decoded = jwt.verify(token, config.get("jwtKey"));
    req.user = decoded;
    next();
  } catch {
    res.status(400).send("Invalid Token");
  }
};