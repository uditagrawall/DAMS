import React, { useState, useEffect } from "react";
import pdf from "./pdficon.png";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import CertificateForm from "./CertificateForm";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Studentdash = () => {
  
  const { state } = useLocation();
  const { id } = state;
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [message, setMessage] = useState([]);
  const [data1, setData1] = useState({
    title: "",
    year: "",
    sem: "",
  });
  const [data2, setData2] = useState({
    title: "",
    year: "",
    sem: "",
  });
  useEffect(() => {
    fetch(`http://localhost:5000/api/fetch_singlestudent/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching student data:", error));
  }, [id]);
  const sendex = () => {
    try {
      fetch(`http://localhost:5000/api/add_excurr/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data1),
      })
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt, "hel");
          alert("excurr added successfully");
        })
        .catch((err) => console.log(err));

    
    } catch (error) {
      console.error("Error sending note:", error);
    }
  };
  const sendacad = () => {
    try {
      fetch(`http://localhost:5000/api/add_achivement/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data2),
      })
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt, "hel acad");
          alert("achivement sent successfully");
        })
        .catch((err) => console.log(err));

     
    } catch (error) {
      console.error("Error sending note:", error);
    }
  };
  
  useEffect(() => {
  const getmsg = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/get_message/${id}`);
      if (!res.ok) {
        throw new Error("Error fetching messages");
      }
      const data = await res.json();
      console.log("Fetched messages:", data);

      // Fetch teacher names for each message
      const messagesWithTeacherNames = await Promise.all(
        data.map(async (msg) => {
          try {
            const teacherRes = await fetch(`http://localhost:5000/api/fetch_teachername/${msg.teacherID}`);
            if (!teacherRes.ok) {
              throw new Error("Error fetching teacher name");
            }
            const teacherData = await teacherRes.json();
            // console.log(teacherData);
            return { ...msg, teacherName: teacherData.name }; // Add teacher name to message
          } catch (error) {
            console.error("Error fetching teacher name:", error);
            return { ...msg, teacherName: "Unknown Teacher" }; // Default fallback
          }
        })
      );
      console.log("Messages with teacher names:", messagesWithTeacherNames);

      setMessage(messagesWithTeacherNames);
    } catch (err) {
      console.log(err);
    }
  };

  getmsg();
}, []);
/////////
  if (!student) {
    return (
      <div>
        Loading...
        {console.log(id)}
      </div>
    );
  }

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setData1({
      ...data1,
      [name]: value,
    });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    // You can use 'data' object here to access the values of title, year, and sem
    console.log("Data submitted:", data1);
    sendex();
    // You can perform further actions like sending data to the server
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setData2({
      ...data2,
      [name]: value,
    });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    // You can use 'data' object here to access the values of title, year, and sem
    console.log("Data submitted:", data2);
    sendacad();
    // You can perform further actions like sending data to the server
  };
  const deleteectracurr = async (excid) => {
    console.log(excid);
    console.log(student._id);
    const requestBody = {
      studentId: student._id,
      excurrId: excid,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/delete_extracurr",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.status === 200) {
        alert("Success");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const { studentId, acadId } = req.body;
  const deleteadacach = async (acadid) => {
    console.log(acadid);
    console.log(student._id);
    const requestBody = {
      studentId: student._id,
      acadId: acadid,
    };
    try {
      const response = await fetch("http://localhost:5000/api/delete_acadach", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.status === 200) {
        alert("Success");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const deletemsg = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/delete_msg/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        console.log("error deleting msg");
      }
      alert("msg deleted successfully");
      console.log("msg successfully deleted");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div style={{ backgroundColor: '#F5F5DC', height: '100%', padding: "60px" }} className="">

      <h1 className="text-2xl font-semibold mb-4">Student Name - {student.name}</h1>

      <div className="row">
        <div className="col-lg-6">
          <Accordion defaultExpanded>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 800,
              }}
            >
              Student Details
              
            </AccordionSummary>
            <div>
              

              </div>
            <AccordionDetails>
              <div className="row">
                <div className="col-lg-10 text-left">
                  <span className="font-semibold">Student Name : </span>
                  <span>{student.name}</span>
                </div>
                <div className="col-lg-2 text-right">
                  <span className="font-semibold mr-2">Year :</span>
                  <span>{student.year}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 text-left">
                  <span className="font-semibold mr-2">Email :</span>
                  <span>{student.email}</span>
                </div>
                <div className="col-lg-6 text-right">
                  <span className="font-semibold">Section : </span>
                  <span>{student.section}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 text-left">
                  <span className="font-semibold mr-2">Enrollment No. :</span>
                  <span>{student.enroll}</span>
                </div>
                <div className="col-lg-3 text-right">
                  <span className="font-semibold">Branch : </span>
                  <span>{student.branch}</span>
                </div>
              </div>
            </AccordionDetails>
          
          </Accordion>
                   
        </div>
 

        <div className="col-lg-6">
          <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Messages</h1>
            <div className="grid gap-4">
              {message.map((msg) => (
                <div
                  key={msg._id}
                  className="border border-gray-300 p-4 rounded-lg shadow-md"
                >
                  <div className="flex gap-64">
                  <div>
                  <div>   <p className="text-gray-700 mb-2">{msg.message}</p>
                  <p className="text-lg font-semibold mb-2">Teacher name:</p>
                  <p className="text-gray-700">{msg.teacherName}</p></div>
               
                </div>
                <div className="mt-8">
                <FontAwesomeIcon
            icon={faTrash}
            className="cursor-pointer"
            onClick={() => deletemsg(msg._id)}
          />
                </div>
                  </div>
                 
                  </div>

              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <p className="text-left m-0" style={{
                fontSize: '1.5rem',
                fontWeight: 800,
              }}>
                Academic Achievements
              </p>
            </div>
            <div className="card-body">
              <div className="row">

                {student.acadach.map((achievement, index) => (
                  <>
                    <div className="text-left mb-3 col-lg-8" key={index}>
                      <span className="font-semibold">Title -</span> <span> {achievement.title}</span><br></br>
                      <span className="font-semibold">Year -</span> <span> {achievement.year}</span><br></br>
                      <span className="font-semibold">Semester - </span> <span> {achievement.sem}</span>
                    </div>
                    <div className="col-lg-4 mt-4">
                      <button
                        className="text-red-500 hover:text-red-700 focus:outline-none ml-2"
                        onClick={() => deleteadacach(achievement?._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                    <hr></hr>
                  </>
                ))}
              </div>
            </div>
          </div>
         
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <p className="text-left m-0" style={{
                fontSize: '1.5rem',
                fontWeight: 800,
              }}>
                Extra Curricular Achievements
              </p>
            </div>
            <div className="card-body">
              <div className="row">

                {student.excurr.map((achievement, index) => (
                  <>
                    <div className="text-left mb-3 col-lg-8" key={index}>
                      <span className="font-semibold">Title -</span> <span> {achievement.title}</span><br></br>
                      <span className="font-semibold">Year -</span> <span> {achievement.year}</span><br></br>
                      <span className="font-semibold">Semester - </span> <span> {achievement.sem}</span>
                    </div>
                    <div className="col-lg-4 mt-4">
                      <button
                        className="text-red-500 hover:text-red-700 focus:outline-none ml-2"
                        onClick={() => deleteectracurr(achievement?._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                    <hr></hr>

                  </>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
     <div className="row justify-content-center">
  <div className="col-lg-8"> {/* Increased width to accommodate three columns */}
    <div className="font-semibold mt-4">
      <p style={{ fontSize: "1.5rem", fontWeight: 800 }}>Certificates</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Grid layout */}
        {student.certificates.map((certificate, index) => (
          <a
            key={index}
            href={certificate.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md w-full"
          >
            <div className="w-12 h-12 bg-blue-300 flex justify-center items-center rounded-md mr-4">
              <img src={pdf} alt="PDF Icon" className="w-6 h-6" />
            </div>
            <div>
              <span className="block">{certificate.name}</span>
              <p className="text-sm text-gray-500">{certificate.domain}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
</div>

      
      
    <button onClick={() => navigate("/studentforms", { state: { id, name: student.name } })}  className="bg-red-500 mt-20 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
      Go to forms
    </button>
    </div>
  );
};

export default Studentdash;
