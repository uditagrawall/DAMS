const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Assuming teacher IDs are unique
  },
  pass: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("teachers", teacherSchema);
