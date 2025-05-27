const mongoose = require("mongoose");

const convSchema = mongoose.Schema({
  studID: {
    type: String,
    // required: true,
  },
  teacherID: {
    type: String,
    // required: true,
  },
  message: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model("conversation", convSchema);
