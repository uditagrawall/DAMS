const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  branch: {
    type: String,
    required: true,
  },
  Class: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  enroll: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  pass: {
    type: String,
    required: true,
  },
  acadach: [
    {
      title: String,
      year: String,
      sem: String,
    },
  ],
  excurr: [
    {
      title: String,
      year: String,
      sem: String,
    },
  ],
  certificates: [
    {
      name: String,
      domain: String,
      file: {
        type: String,
      },
      dateOfCert: Date,
    },
  ],
});

module.exports = mongoose.model("students", studentSchema);
