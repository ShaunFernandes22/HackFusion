const express = require("express");
const zod = require("zod");
const { Meeting } = require("../models/meeting");
const authMiddleware = require("../authMiddleware");

const meetingRouter = express.Router();

// create a meeting
const createMeetingBody = zod.object({
  meetLink: zod.string(),
  teacherId: zod.string(),
  startTime: zod.string(),
  endTime: zod.string(),
  students: zod.array(zod.string()),
});

meetingRouter.post("/", authMiddleware, async (req, res) => {
  try {
    const { success, data } = createMeetingBody.safeParse(req.body);
    if (!success) {
      return res.status(400).json({ message: "Invalid inputs" });
    }
    if (data.teacherId !== req.userId) {
      return res
        .status(403)
        .json({ message: "Unauthorized to create meeting" });
    }
    const meeting = new Meeting({
      meetLink: data.meetLink,
      teacherId: data.teacherId,
      startTime: new Date(data.startTime),
      endTime: new Date(data.endTime),
      students: data.students,
    });
    const savedMeeting = await meeting.save();
    return res
      .status(201)
      .json({ message: "Meeting created successfully", meeting: savedMeeting });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// all meeting route
meetingRouter.get("/", authMiddleware, async (req, res) => {
  try {
    const meetings = await Meeting.find({ teacherId: req.userId });
    return res.status(200).json({ meetings });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// get students in meeting room
meetingRouter.get("/:meetingId/students", authMiddleware, async (req, res) => {
  try {
    const { meetingId } = req.params;
    const meeting = await Meeting.findById(meetingId);
    if (!meeting) {
      return res.status(404).json({ message: "Meeting not found" });
    }
    return res.status(200).json({ students: meeting.students });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// update meeting
const updateMeetingBody = zod.object({
  meetLink: zod.string().optional(),
  startTime: zod.string().optional(),
  endTime: zod.string().optional(),
  students: zod.array(zod.string()).optional(),
});

meetingRouter.put("/:meetingId", authMiddleware, async (req, res) => {
  try {
    const { meetingId } = req.params;
    const { success, data } = updateMeetingBody.safeParse(req.body);
    if (!success) {
      return res.status(400).json({ message: "Invalid inputs" });
    }
    const meeting = await Meeting.findById(meetingId);
    if (!meeting) {
      return res.status(404).json({ message: "Meeting not found" });
    }
    if (meeting.teacherId.toString() !== req.userId) {
      return res
        .status(403)
        .json({ message: "Unauthorized to update meeting" });
    }
    if (data.meetLink) meeting.meetLink = data.meetLink;
    if (data.startTime) meeting.startTime = new Date(data.startTime);
    if (data.endTime) meeting.endTime = new Date(data.endTime);
    if (data.students) meeting.students = data.students;
    const updatedMeeting = await meeting.save();
    return res.status(200).json({
      message: "Meeting updated successfully",
      meeting: updatedMeeting,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// delete meeting route
meetingRouter.delete("/:meetingId", authMiddleware, async (req, res) => {
  try {
    const { meetingId } = req.params;
    const meeting = await Meeting.findById(meetingId);
    if (!meeting) {
      return res.status(404).json({ message: "Meeting not found" });
    }
    if (meeting.teacherId.toString() !== req.userId) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete meeting" });
    }
    await Meeting.findByIdAndDelete(meetingId);
    return res.status(200).json({ message: "Meeting deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = meetingRouter;
