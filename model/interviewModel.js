// interview.js
const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  companyName: String,
  date: Date,
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  results: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
      result: String,
    },
  ],
});

const interviewModel = mongoose.model("Interview", interviewSchema);

module.exports = interviewModel;