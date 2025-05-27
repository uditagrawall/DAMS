const express = require("express");
const students = require("../models/Student");
const teachers = require("../models/Teacher");
const Conversations = require("../models/conversation");
const multer = require("multer");
const imagekit = require("imagekit");
exports.signinst = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await students.findOne({ email });
    if (student) {
      if (student.pass === password) {
        // req.student = student;
        res.status(200).json({
          message: "correct password",
          id: student._id,
        });
        console.log("correct password");
      } else {
        res.status(401).json({
          message: "Invalid password",
        });
      }
    } else {
      res.status(401).json({
        message: "Invalid email",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.registerStudent = async (req, res) => {
  try {
    // Retrieve data from request body
    const {
      name,
      email,
      pass,
      branch,
      Class,
      section,
      enroll,
      year,
      academicAchievements,
      excurr,
      certificates,
    } = req.body;

    // Create a new student object
    const newStudent = new students({
      name,
      email,
      pass,
      branch,
      Class,
      section,
      enroll,
      year,
      acadach: academicAchievements,
      excurr,
      certificates,
    });

    // Save the student to the database
    await newStudent.save();

    // Respond with success message
    res.status(201).json({
      message: "Student registered successfully",
      student: newStudent,
    });
  } catch (error) {
    // Handle errors
    console.error("Error registering student:", error);
    res
      .status(500)
      .json({ error: "An error occurred while registering student" });
  }
};

exports.registerTeacher = async (req, res) => {
  try {
    // Retrieve data from request body
    const { name, email, pass } = req.body;
    const newTeacher = new teachers({
      name,
      email,
      pass,
    });
    await newTeacher.save();
    res.status(201).json({
      message: "teacher registered successfully",
      student: newTeacher,
    });
  } catch (error) {
    console.error("Error registering teacher:", error);
    res
      .status(500)
      .json({ error: "An error occurred while registering teacher" });
  }
};
exports.signinte = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const teacher = await teachers.findOne({ email });
    // console.log(teacher);
    if (teacher) {
      if (teacher.pass === pass) {
        res.status(200).json({
          message: "Logged in successfully",
          id: teacher._id,
          teacher: teacher,
        });
      } else {
        res.status(401).json({
          message: "Invalid password",
        });
      }
    } else {
      res.status(401).json({
        message: "Invalid email",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.fetchstudents = async (req, res) => {
  try {
    const students_data = await students.find({});
    res.status(200).send(students_data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.editprofile = async (req, res) => {
  const { stud_class, section, pass } = req.body;
  const { id } = req.params;

  try {
    const stud = await students.updateOne(
      { _id: id },
      { $set: { Class: stud_class, section, pass } }
    );

    res.json({ message: "Document updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.deletest = async (req, res) => {
  try {
    const { id } = req.params;
    await students.deleteOne({ _id: id });
    res.status(200).send("student deleted successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.addMessage = async (req, res) => {
  const { TeacherID } = req.params;
  const { studID, message } = req.body;
  console.log(TeacherID);

  try {
    await Conversations.create({
      studID,
      teacherID: TeacherID,
      message,
    });

    res.json({ message: "Added Conversation" });
  } catch (err) {
    console.log(err);
  }
};
exports.getMessage = async (req, res) => {
  const { id } = req.params;

  try {
    const message = await Conversations.find({ studID: id });
    res.status(200).send(message);

    console.log(message);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//fetchMessagefor student, fetchby studID
//uploadCertif
//FetchSingleStud fetch by id
exports.fetchsinglestudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await students.findOne({ _id: id });
    res.status(200).send(student);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const storageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  }, // path
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const imagekitClient = new imagekit({
  publicKey: "public_lHCPIPNzx8nkNaAePl8fWVSueU0=",
  privateKey: "private_VWp+NHW398EwRBLYwx5Pcq+J1OE=",
  urlEndpoint: "https://ik.imagekit.io/uy8q8zvbf/",
});

exports.upload = multer({
  storage: storageEngine,
});

exports.addCertificate = async (req, res) => {
  const id = req.params.id;
  const { name, domain, dateOfCert } = req.body; // Corrected variable name

  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }
    console.log("entered in upload structure");

    const pdfPath = req.file.path;
    const tm = Date.now();

    const pdfBuffer = require("fs").readFileSync(pdfPath);

    const imageUploadResult = await imagekitClient.upload({
      file: pdfBuffer,
      fileName: req.file.originalname,
      folder: "/reports",
      tags: ["pdf"],
    });

    const pdfURL = imageUploadResult.url;

    const certificate = {
      name,
      domain,
      file: pdfURL,
      dateOfCert, // Corrected variable name
    };

    const kk = await students.findOneAndUpdate(
      { _id: id },
      { $push: { certificates: certificate } },
      { new: true }
    );

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false });
    console.log(error);
  }
};

exports.addexcurr = async (req, res) => {
  const id = req.params.id;
  const { title, year, sem } = req.body;
  const excurr = {
    title,
    year,
    sem,
  };
  try {
    const kk = await students.findOneAndUpdate(
      { _id: id },
      { $push: { excurr: excurr } },
      { new: true }
    );

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false });
    console.log(error);
  }
};

exports.addachivement = async (req, res) => {
  const id = req.params.id;
  const { title, year, sem } = req.body;
  const achivement = {
    title,
    year,
    sem,
  };
  try {
    const kk = await students.findOneAndUpdate(
      { _id: id },
      { $push: { acadach: achivement } },
      { new: true }
    );

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false });
    console.log(error);
  }
};
exports.deleteExcurr = async (req, res) => {
  // const studentId = req.params.studentId;
  // const excurrId = req.params.excurrId;
  const { studentId, excurrId } = req.body;

  try {
    // Find the student by ID
    const student = await students.findOne({ _id: studentId });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Find the index of the excurr object to remove
    const excurrIndex = student.excurr.findIndex(
      (item) => item._id.toString() === excurrId
    );

    if (excurrIndex === -1) {
      return res.status(404).json({ message: "Excurr not found" });
    }

    // Remove the excurr from the student's excurr array
    student.excurr.splice(excurrIndex, 1);

    // Save the updated student object
    await student.save();

    return res
      .status(200)
      .json({ message: "Excurr deleted successfully", student });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
exports.deleteAcadach = async (req, res) => {
  const { studentId, acadId } = req.body;

  try {
    // Find the student by ID
    const student = await students.findOne({ _id: studentId });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Find the index of the acadach object to remove
    const acadIndex = student.acadach.findIndex(
      (item) => item._id.toString() === acadId
    );

    if (acadIndex === -1) {
      return res.status(404).json({ message: "Acadach not found" });
    }

    // Remove the acadach from the student's acadach array
    student.acadach.splice(acadIndex, 1);

    // Save the updated student object
    await student.save();

    return res
      .status(200)
      .json({ message: "Acadach deleted successfully", student });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
exports.deletemsg  = async (req,res) => {
 const {msgID} = req.params;
 try{
  // const msg = Conversations.findOne({_id: magID });
//  try {
//   const { id } = req.params;
//   await students.deleteOne({ _id: id });
//   res.status(200).send("student deleted successfully");
// }
   await Conversations.deleteOne({_id: msgID });
   res.status(200).send("message deleted succefully");
}
 catch(err){
  console.log(err);
 }
 
}
exports.findteachername = async (req, res) => {
  const { id } = req.params;  // Get id from URL parameter
  try {
    const teach = await teachers.findOne({ _id: id });  // Correct the query format
    if (!teach) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(200).json({ name: teach.name });  // Send name as JSON object
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// 65f7475feb5722b167bdcc63
