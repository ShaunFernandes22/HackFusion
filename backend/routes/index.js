const express = require("express");
const userRouter = require("./user");
const meetingRouter = require("./meeting");

const versionRouter = express.Router();
versionRouter.use("/user", userRouter);
versionRouter.use("/meet", meetingRouter);
module.exports = versionRouter;
