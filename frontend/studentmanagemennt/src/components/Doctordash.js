// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// import pdf from "./pdficon.png";

// const Doctordash = () => {
//   const { state } = useLocation();
//   const { idte, namet } = state;
//   const navigate = useNavigate();

//   const [studentsa, setStudents] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/fetch_student");
//         if (!res.ok) {
//           console.log("error fetching students");
//         }
//         const data = await res.json();
//         console.log(data);
//         setStudents(data);
//         console.log(idte);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchStudents();
//   }, []);

//   const deleteStudent = async (id) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/delete_student/${id}`,
//         {
//           method: "DELETE",
//         }
//       );
//       if (!res.ok) {
//         console.log("error deleting student");
//       }
//       alert("student deleted successfully");
//       console.log("student successfully deleted");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredStudents = studentsa.filter(
//     (student) =>
//       student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       student.enroll.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       student.branch.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       student.certificates.some((cert) =>
//         cert.name.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//   );

//   return (
//     <div style={{ backgroundColor: "#F5F5DC", height: "45rem" }} className="pt-5">
//       <h1 className="text-3xl font-bold underline mt-5">Hello {namet}!</h1>
//       <input
//         type="text"
//         placeholder="Search students..."
//         value={searchQuery}
//         onChange={handleInputChange}
//         className="px-4 py-2 mt-14 border border-gray-300 rounded-md focus:outline-none focus:border-black-500 mb-4 mx-12"
//         style={{ border: "2px solid black", width: "600px" }}
//       />
//       <div className="flex px-20 mx-12 my-2 items-center space-x-4 py-2 border-b border-gray-200">
//         <h1 className="flex-none font-bold text-lg">Serial No.</h1>
//         <h1 className="flex-1 font-bold text-lg">Student Name</h1>
//         <h1 className="flex-1 font-bold text-lg">Enroll No.</h1>
//         <h1 className="flex-1 font-bold text-lg">Email</h1>
//         <h1 className="flex-1 font-bold text-lg">Branch</h1>
//         <h1 className="flex-1 font-bold text-lg">Certificates</h1>
//         <h1 className="flex-1 font-bold text-lg">Profile</h1>
//         <FontAwesomeIcon icon={faTrash} className="text-white " />
//       </div>

//       {filteredStudents.map((student, index) => (
//         <div
//           key={student._id}
//           className="flex mx-12 px-20 items-center space-x-4 py-2 border-b border-gray-200"
//         >
//           <h1 style={{ fontSize: "16px" }} className="flex-none">
//             Serial No. {index + 1}
//           </h1>
//           <h1 style={{ fontSize: "16px" }} className="flex-1">
//             {student.name}
//           </h1>
//           <h1 style={{ fontSize: "16px" }} className="flex-1">
//             {student.enroll}
//           </h1>
//           <h1 style={{ fontSize: "16px" }} className="flex-1">
//             {student.email}
//           </h1>
//           <h1 style={{ fontSize: "16px" }} className="flex-1">
//             {student.branch}
//           </h1>

//      <div className="flex-1">
//   {/* If no search query, show certificate count */}
//   {!searchQuery ? (
//     <p className="text-gray-700 text-sm">
//       Certificates: {student.certificates.length}
//     </p>
//   ) : (
//     // If there's a search query, show filtered certificates
//     <>
//       {student.certificates
//         .filter((certificate) =>
//           certificate.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//         .map((certificate, certIndex) => (
//           <a
//             key={certIndex}
//             href={certificate.file}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center bg-gray-100 border border-gray-300 p-2 rounded-md shadow-md my-1 w-full"
//           >
//             <div className="w-8 h-8 bg-blue-300 flex justify-center items-center rounded-md mr-2">
//               <img src={pdf} alt="PDF Icon" className="w-4 h-4" />
//             </div>
//             <div>
//               <span className="block text-sm font-medium">
//                 {certificate.name}
//               </span>
//               <p className="text-xs text-gray-500">{certificate.domain}</p>
//             </div>
//           </a>
//         ))}

//       {/* Show "No Certificates Found" if query is present but no matches */}
//       {searchQuery &&
//         student.certificates.filter((certificate) =>
//           certificate.name.toLowerCase().includes(searchQuery.toLowerCase())
//         ).length === 0 && (
//           <p className="text-gray-500 text-sm">No certificates found</p>
//         )}
//     </>
//   )}
// </div>

//           <button className="flex-1">
//             <Link to={`/studentprofile/${student._id}/${idte}`}>View Profile</Link>
//           </button>

//           <FontAwesomeIcon
//             icon={faTrash}
//             className="cursor-pointer"
//             onClick={() => deleteStudent(student._id)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Doctordash;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Doctordash = () => {
  const { state } = useLocation();
  const { idte, namet } = state;
  const navigate = useNavigate();

  const [studentsa, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/fetch_student");
        if (!res.ok) throw new Error("Error fetching students");
        const data = await res.json();
        setStudents(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/delete_student/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error deleting student");
      alert("Student deleted successfully");
      setStudents((prev) => prev.filter((student) => student._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const filteredStudents = studentsa.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.enroll.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.branch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.certificates.some((cert) =>
        cert.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="bg-yellow-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Hello {namet}!
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search students..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full max-w-xl border-2 border-black rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-blue-100 text-left">
            <tr className="text-md font-semibold">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Enroll No.</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Branch</th>
              <th className="px-4 py-2">Certificates</th>
              <th className="px-4 py-2">Profile</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr
                key={student._id}
                className="border-t hover:bg-gray-50 transition duration-200"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{student.name}</td>
                <td className="px-4 py-3">{student.enroll}</td>
                <td className="px-4 py-3">{student.email}</td>
                <td className="px-4 py-3">{student.branch}</td>
                <td className="px-4 py-3">
                  {!searchQuery ? (
                    <p className="text-sm text-gray-700">
                      {student.certificates.length} Certificates
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {student.certificates
                        .filter((cert) =>
                          cert.name.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((cert, i) => (
                          <a
                            key={i}
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-2 border rounded-md bg-gray-100 hover:bg-gray-200"
                          >
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                              alt="PDF Icon"
                              className="w-5 h-5 mr-2"
                            />
                            <div>
                              <p className="text-sm font-medium">{cert.name}</p>
                              <p className="text-xs text-gray-500">{cert.domain}</p>
                            </div>
                          </a>
                        ))}
                      {student.certificates.filter((cert) =>
                        cert.name.toLowerCase().includes(searchQuery.toLowerCase())
                      ).length === 0 && (
                        <p className="text-sm text-gray-500">No certificates found</p>
                      )}
                    </div>
                  )}
                </td>
                <td className="px-4 py-3">
                  <Link
                    to={`/studentprofile/${student._id}/${idte}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Profile
                  </Link>
                </td>
                <td className="px-4 py-3 text-red-600">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="cursor-pointer hover:text-red-800"
                    onClick={() => deleteStudent(student._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctordash;

