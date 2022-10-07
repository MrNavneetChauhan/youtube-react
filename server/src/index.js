const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("./config/passport");
const session = require("express-session");
const userController = require("./controllers/user.controller");
// middlewares
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// serealizing and deserealizing
passport.serializeUser(function (user, done) {
  done(null, user);
});

// used to deserialize the user
passport.deserializeUser(function (user, done) {
  done(null, user);
});

// routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    return res.status(200).send({ user: req.user.user });
  }
);

app.get("/auth/google/failure", (req, res) => {
  try {
    return res.send("failure");
  } catch (err) {
    return res.send(err.message);
  }
});

app.use("/users", userController);

// exporting
module.exports = app;
