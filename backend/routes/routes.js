const express = require("express");
const router = express.Router();

const {
  signinst,
  registerStudent,
  registerTeacher,
  signinte,
  fetchstudents,
  editprofile,
  addMessage,
  getMessage,
  fetchsinglestudent,
  upload,
  addCertificate,
  addexcurr,
  addachivement,
  deletest,
  deleteExcurr,
  deleteAcadach,
  findteachername,
  deletemsg,
} = require("../controllers/controller");

router.post("/student_signin", signinst);
router.post("/student_signup", registerStudent);
router.post("/teacher_signup", registerTeacher);
router.post("/teacher_signin", signinte);
router.get("/fetch_student", fetchstudents);
router.put("/edit_stud/:id", editprofile);
router.post("/send_message/:TeacherID", addMessage);
router.get("/get_message/:id", getMessage);
router.get("/fetch_singlestudent/:id", fetchsinglestudent);
router.post("/add_excurr/:id", addexcurr);
router.post("/add_achivement/:id", addachivement);
router.delete("/delete_student/:id", deletest);
router.delete("/delete_extracurr", deleteExcurr);
router.delete("/delete_acadach", deleteAcadach);
router.delete("delete_msg/:id",deletemsg);
router.get("/fetch_teachername/:id", findteachername);


router.post("/addCertificate/:id", upload.single("pdf"), addCertificate);
// router.get("/teach", signinteach);
// router.get("/getdetails", studentdet);
module.exports = router;
