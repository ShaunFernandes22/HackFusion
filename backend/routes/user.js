const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { JWT_SECRET } = require("../config");
const authMiddleware = require("../authMiddleware");

const userRouter = express.Router();

//signup
const signupBody = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
  role: zod.enum(["teacher", "student", "admin"]).default("student"),
});

userRouter.post("/signup", async (req, res) => {
  try {
    const { success, data } = signupBody.safeParse(req.body);
    if (!success) {
      return res.status(400).json({ message: "Invalid inputs" });
    }
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }
    const user = new User({
      name: data.name,
      email: data.email,
      role: data.role,
    });
    const hashedPassword = await user.createHash(data.password);
    user.password = hashedPassword;
    const savedUser = await user.save();
    const token = jwt.sign({ userId: savedUser._id }, JWT_SECRET);
    return res
      .status(201)
      .json({ message: "User created successfully", user: savedUser, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// signin
const signinBody = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});
userRouter.post("/signin", async (req, res) => {
  try {
    const { success, data } = signinBody.safeParse(req.body);
    if (!success) {
      return res.status(400).json({ message: "Invalid inputs" });
    }
    const existingUser = await User.findOne({ email: data.email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const validUser = await existingUser.validatePassword(data.password);
    if (validUser) {
      const token = jwt.sign({ userId: validUser._id }, JWT_SECRET);
      return res
        .status(200)
        .json({ message: "User logged in", user: existingUser, token });
    } else {
      return res.status(401).json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// update user
const updateBody = zod.object({
  name: zod.string().optional(),
  email: zod.string().email().optional(),
  role: zod.enum(["teacher", "student", "admin"]).optional(),
  userId: zod.string(),
});

userRouter.put("/", authMiddleware, async (req, res) => {
  try {
    const { success, data } = updateBody.safeParse(req.body);
    if (!success) {
      return res.status(400).json({ message: "Invalid inputs" });
    }

    const updateFields = {};
    if (data.name) updateFields.name = data.name;
    if (data.email) updateFields.email = data.email;
    if (data.role) updateFields.role = data.role;

    const updatedUser = await User.findByIdAndUpdate(
      data.userId,
      updateFields,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// filter user
userRouter.get("/bulk", async (req, res) => {
  try {
    const filter = req.query.filter || "";
    const users = await User.find({
      $or: [
        { name: { $regex: filter, $options: "i" } },
        { email: { $regex: filter, $options: "i" } },
      ],
    });
    return res.status(200).json({
      users: users.map((user) => ({
        name: user.name,
        email: user.email,
        role: user.role,
        _id: user._id,
      })),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = userRouter;
