import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

//Register a new User
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password, confirmPassword } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    userName,
    email,
    password,
    confirmPassword,
  });

  if (newUser) {
    generateToken(res, newUser._id);
    res.status(201).json({
      _id: newUser._id,
      userName: newUser.userName,
      password: newUser.password,
      confirmPassword: newUser.confirmPassword,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName });

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "Sorry! User Can't found!",
    });
  }

  // if password are match
  if (password !== user.password) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Credentials!",
    });
  }
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      status: "Success",
      data: user,
    });
  } else {
    res.status(401);
    throw new Error("Internal server error");
  }
});


export { registerUser, loginUser };

