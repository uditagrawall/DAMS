import logo from "./logo.svg";
import "./App.css";
import Doctordash from "./components/Doctordash";
import { Route, Routes } from "react-router-dom";
import StudentProfile from "./components/StudentProfile";
import CertificateForm from "./components/CertificateForm";
import Studentdash from "./components/Studentdash";
import TeacherLogin from "./components/signin";
import StudentSignup from "./components/signup";
import TeacherSignup from "./components/signupte";
import Selection from "./components/Selection";
import StudentLogin from "./components/signInst";
// import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Navbar1 from "./components/Navbar";

import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Studentforms from "./components/Studentforms";
function App() {
  return (
    <div className="App">
    <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        
          
        
        <Route path="/login" element={<Selection />} />
        <Route path="/teachersignin" element={<TeacherLogin />} />
        <Route path="/teacherdashboard" element={<Doctordash />} />
        <Route path="/studentprofile/:id/:idte" element={<StudentProfile />} />
        <Route path="/addcertificate" element={<CertificateForm />} />
        <Route path="/studentdashboard" element={<Studentdash />} />
        <Route path="/studentsignup" element={<StudentSignup />} />
        <Route path="/teachersignup" element={<TeacherSignup />} />
        <Route path="/studentsignin" element={<StudentLogin />} />
        <Route path="/studentforms" element={<Studentforms />} />
        {/* { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" }, */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
