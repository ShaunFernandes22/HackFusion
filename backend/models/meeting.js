const mongoose = require("mongoose");
const meetingSchema = new mongoose.Schema({
  meetLink: {
    type: String,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  students: {
    type: [String],
    required: true,
  },
});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = {
  Meeting
};
