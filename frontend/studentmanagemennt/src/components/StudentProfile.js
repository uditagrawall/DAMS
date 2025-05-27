// import React, { useState, useEffect, useLocation } from "react";
// import pdf from "./pdficon.png";
// import { useParams, useNavigate } from "react-router-dom";
// import "./signup.module.css";


// const StudentProfile = () => {
//   // const location = useLocation();
//   // const id = location.state.id;
//   const navigate = useNavigate();
//   const { id, idte } = useParams();
//   const [student, setStudent] = useState(null);
//   const [note, setNote] = useState("");

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/fetch_singlestudent/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setStudent(data);
//         console.log(data);
//       })
//       .catch((error) => console.error("Error fetching student data:", error));
//   }, [id]);

//   if (!student) {
//     return (
//       <div>
//         Loading...
//         {console.log(id)}
//       </div>
//     );
//   }

//   // Function to handle changes in the input field

//   const handleInputChange = (event) => {
//     setNote(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("save note hit");
//     sendNote(); // Call the sendNote function directly when form is submitted
//   };
//   const sendNote = async () => {
//     try {
//       const data = {
//         studID: id,
//         message: note,
//       };

//       fetch(`http://localhost:5000/api/send_message/${idte}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })
//         .then((res) => res.json())
//         .then((dt) => {
//           console.log(dt, "hel");
//         })
//         .catch((err) => console.log(err));

//       // if (!response.ok) {
//       //   throw new Error("Failed to send note");
//       // }

//       // const responseData = await response.json();
//       // console.log(responseData);
//       // console.log("Note sent successfully");

//       setNote("");
//     } catch (error) {
//       console.error("Error sending note:", error);
//     }
//   };

//   return (
//     <div className="bg-gray-100 rounded-lg shadow-md pt-5"  style={{backgroundColor:'#F5F5DC',height:'100%'}}>
//       <h1 className="text-3xl font-semibold mb-4">{student.name}</h1>
//       <div className="grid grid-cols-2 gap-6">
//         <div className="text-left" style={{margin:'50px 200px'}}>
//           {/* <p className="text-lg mb-3">
//             <span className="font-semibold">Class:</span> {student.Class}
//           </p> */}
//           <p className="text-lg mb-3">
//             <span className="font-semibold">Section:</span> {student.section}
//           </p>
//           <p className="text-lg mb-3">
//             <span className="font-semibold">Email:</span> {student.email}
//           </p>
//           <p className="text-lg mb-3">
//             <span className="font-semibold">Branch:</span> {student.branch}
//           </p>
//           <p className="text-lg mb-3">
//             <span className="font-semibold">Enrollment Number:</span>{" "}
//             {student.enroll}
//           </p>
//           <p className="text-lg mb-3">
//             <span className="font-semibold">College Year:</span> {student.year}
//           </p>
//         </div>
//         <div  className="text-left" style={{margin:'50px 200px'}}>
//           <div className="mb-6">
//             <p className="font-semibold text-lg mb-2">Academic Achievements:</p>
//             <ul className="list-none pl-6">
//               {student.acadach.map((achievement, index) => (
//                 <li key={index} className="text-lg mb-1">
//                   {achievement.title} ({achievement.year}, {achievement.sem}{" "}
//                   sem)
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="mb-6">
//             <p className="font-semibold text-lg mb-2">
//               Extra Curricular Achievements:
//             </p>
//             <ul className="list-none pl-6">
//               {student.excurr.map((achievement, index) => (
//                 <div >
//                   <div>
//                     <li key={index} className="text-lg mb-1">
//                       {achievement.title} ({achievement.year}, {achievement.sem}{" "}
//                       sem)
//                     </li>
//                   </div>
//                 </div>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <p className="font-semibold text-lg mb-2">Certificates:</p>
//             <div className="grid grid-cols-2 gap-4">
//               {student.certificates.map((certificate, index) => (
//                 <a
//                   key={index}
//                   href={certificate.file}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center text-lg mb-3"
//                 >
//                   <div className="w-12 h-12 bg-blue-300 flex justify-center items-center rounded-md mr-2">
//                     <img src={pdf} alt="PDF Icon" className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <span className="block text-lg">{certificate.name}</span>
//                     <p className="text-sm">{certificate.domain}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="text-center">
//         <h2 className="font-semibold text-lg mb-2">Enter Note</h2>
//         <form onSubmit={handleSubmit} className="text-center">
//           <textarea
//             type="text"
//             value={note}
//             onChange={handleInputChange}
//             placeholder="Enter your note..."
//             className="p-2 d-block  mx-auto mb-2"
//             style={{width:'50%',border:'1px solid lightgrey',alignItems:'center'}}
//           />
//           <button
//             type="submit"
//             className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none text-lg mb-2"
//             style={{backgroundColor:'#6e47b8'}}
//           >
//             Save Note
//           </button>
//         </form>
//       </div>
//       { <button
//         onClick={() => {
//           navigate("/");
//         }}
//         className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none text-lg"
//       >
//         Log out
//       </button> }
//     </div>
//   );
// };

// export default StudentProfile;



import React, { useState, useEffect } from "react";
import pdf from "./pdficon.png";
import { useParams, useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const navigate = useNavigate();
  const { id, idte } = useParams();
  const [student, setStudent] = useState(null);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/fetch_singlestudent/${id}`);
        if (!res.ok) throw new Error("Failed to fetch student data");
        const data = await res.json();
        setStudent(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [id]);

  const handleInputChange = (e) => setNote(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!note.trim()) {
      alert("Please enter a note before saving.");
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/send_message/${idte}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studID: id, message: note.trim() }),
      });
      if (!response.ok) throw new Error("Failed to send note");
      const resData = await response.json();
      console.log("Note sent:", resData);
      setNote("");
      alert("Note saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to save note.");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-yellow-50">
        <p className="text-xl font-semibold text-gray-700">Loading student data...</p>
      </div>
    );

  if (!student)
    return (
      <div className="flex justify-center items-center h-screen bg-yellow-50">
        <p className="text-xl font-semibold text-red-600">Student data not found.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-yellow-50 p-8 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-6xl w-full p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-900">{student.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Basic Info */}
          <div className="space-y-4 text-gray-800 text-lg px-6">
            <p>
              <span className="font-semibold">Section:</span> {student.section}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {student.email}
            </p>
            <p>
              <span className="font-semibold">Branch:</span> {student.branch}
            </p>
            <p>
              <span className="font-semibold">Enrollment Number:</span> {student.enroll}
            </p>
            <p>
              <span className="font-semibold">College Year:</span> {student.year}
            </p>
          </div>

          {/* Right Column - Achievements and Certificates */}
          <div className="px-6 text-gray-700">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Academic Achievements</h2>
              {student.acadach.length ? (
                <ul className="list-disc list-inside space-y-1">
                  {student.acadach.map((ach, idx) => (
                    <li key={idx}>
                      {ach.title} ({ach.year}, {ach.sem} sem)
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="italic text-gray-400">No academic achievements available.</p>
              )}
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Extra Curricular Achievements</h2>
              {student.excurr.length ? (
                <ul className="list-disc list-inside space-y-1">
                  {student.excurr.map((ach, idx) => (
                    <li key={idx}>
                      {ach.title} ({ach.year}, {ach.sem} sem)
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="italic text-gray-400">No extra curricular achievements available.</p>
              )}
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Certificates</h2>
              {student.certificates.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {student.certificates.map((cert, idx) => (
                    <a
                      key={idx}
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-indigo-100 rounded-md hover:bg-indigo-200 transition"
                    >
                      <div className="w-12 h-12 bg-indigo-400 flex justify-center items-center rounded-md mr-4 shadow-md">
                        <img src={pdf} alt="PDF Icon" className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-indigo-900">{cert.name}</p>
                        <p className="text-sm text-indigo-800">{cert.domain}</p>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="italic text-gray-400">No certificates available.</p>
              )}
            </section>
          </div>
        </div>

        {/* Note input */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-800">Enter Note</h3>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <textarea
              value={note}
              onChange={handleInputChange}
              placeholder="Enter your note..."
              rows={5}
              className="w-full p-3 border-2 border-indigo-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5"
            />
            <button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-md transition"
            >
              Save Note
            </button>
          </form>
        </div>

        {/* Logout button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/")}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md transition"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
