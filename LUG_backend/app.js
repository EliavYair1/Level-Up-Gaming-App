const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const usersRoute = require("./routes/users");
const auth = require("./routes/auth");
/*  CONNeCTION TO MONGO */
mongoose
  .connect("mongodb://localhost/level_up", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongoDb"))
  .catch((e) => console.log(e, "error in connection"));

app.use(require("morgan")("dev"));
app.use(express.json());
app.use(require("cors")());
//a route to create token for a registered user
app.use("/levelup/auth", auth);
//route for user (crud)
app.use("/levelup/users", usersRoute);

/* LISTEN TO PORT */
app.listen(PORT, () => console.log(`server is running on port :${PORT} `));