import express from "express";
import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { registerValidation, loginValidation } from "../validation.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  // Validation
  const { err } = registerValidation(req.body);
  if (err) return res.status(400).send(error.details[0].message);

  //Check if user exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res
      .status(400)
      .send("There is an user with that email already exists");

  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
  res.send("Register");
});

router.post("/login", async (req, res) => {
  // Validation
  const { err } = loginValidation(req.body);
  if (err) return res.status(400).send(error.details[0].message);

  //Check if user exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or password is incorrect");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send("Email or password is incorrect");

  //Create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

export default router;
