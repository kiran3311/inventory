const express = require("express");
require("./db/config");
const User = require("./db/User");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.passward) {
    let user = await User.findOne(req.body);
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "no user found" });
  }
});

app.listen(5000, () => {
  console.log("server started");
});
