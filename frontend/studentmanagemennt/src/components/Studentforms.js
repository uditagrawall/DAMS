// import React, { useState, useEffect } from "react";
// import CertificateForm from "./CertificateForm";
// import { useLocation, useNavigate } from "react-router-dom";

// const Studentforms = () => {
//      const location = useLocation();
//   const {id,name} = location.state || {}; // Extract the id
//  const { state } = useLocation();
 
//   const navigate = useNavigate();

//   const [student, setStudent] = useState(null);
//   const [message, setMessage] = useState([]);
//   const [data1, setData1] = useState({
//     title: "",
//     year: "",
//     sem: "",
//   });
//   const [data2, setData2] = useState({
//     title: "",
//     year: "",
//     sem: "",
//   });
//   useEffect(() => {
//     fetch(`http://localhost:5000/api/fetch_singlestudent/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setStudent(data);
//         console.log(data);
//       })
//       .catch((error) => console.error("Error fetching student data:", error));
//   }, [id]);
//   const sendex = () => {
//     try {
//       fetch(`http://localhost:5000/api/add_excurr/${id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data1),
//       })
//         .then((res) => res.json())
//         .then((dt) => {
//           console.log(dt, "hel");
//           alert("excurr added successfully");
//         })
//         .catch((err) => console.log(err));

//       // if (!response.ok) {
//       //   throw new Error("Failed to send note");
//       // }

//       // const responseData = await response.json();
//       // console.log(responseData);
//       // console.log("Note sent successfully");
//     } catch (error) {
//       console.error("Error sending note:", error);
//     }
//   };
//   const sendacad = () => {
//     try {
//       fetch(`http://localhost:5000/api/add_achivement/${id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data2),
//       })
//         .then((res) => res.json())
//         .then((dt) => {
//           console.log(dt, "hel acad");
//           alert("achivement sent successfully");
//         })
//         .catch((err) => console.log(err));

//       // if (!response.ok) {
//       //   throw new Error("Failed to send note");
//       // }

//       // const responseData = await response.json();
//       // console.log(responseData);
//       // console.log("Note sent successfully");
//     } catch (error) {
//       console.error("Error sending note:", error);
//     }
//   };
//   // useEffect(() => {
//   //   const getmsg = async () => {
//   //     try {
//   //       const res = await fetch(`http://localhost:5000/api/get_message/${id}`);
//   //       if (!res.ok) {
//   //         throw new Error("Error fetching students");
//   //       }
//   //       const data = await res.json();
//   //       console.log("hue hue");
//   //       console.log(data);
//   //       setMessage(data);
//   //     } catch (err) {
//   //       console.log(err);
//   //     }
//   //   };
//   //   getmsg();
//   // }, []);
//   useEffect(() => {
//   const getmsg = async () => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/get_message/${id}`);
//       if (!res.ok) {
//         throw new Error("Error fetching messages");
//       }
//       const data = await res.json();
//       console.log("Fetched messages:", data);

//       // Fetch teacher names for each message
//       const messagesWithTeacherNames = await Promise.all(
//         data.map(async (msg) => {
//           try {
//             const teacherRes = await fetch(`http://localhost:5000/api/fetch_teachername/${msg.teacherID}`);
//             if (!teacherRes.ok) {
//               throw new Error("Error fetching teacher name");
//             }
//             const teacherData = await teacherRes.json();
//             // console.log(teacherData);
//             return { ...msg, teacherName: teacherData.name }; // Add teacher name to message
//           } catch (error) {
//             console.error("Error fetching teacher name:", error);
//             return { ...msg, teacherName: "Unknown Teacher" }; // Default fallback
//           }
//         })
//       );
//       console.log("Messages with teacher names:", messagesWithTeacherNames);

//       setMessage(messagesWithTeacherNames);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   getmsg();
// }, []);
// /////////
//   if (!student) {
//     return (
//       <div>
//         Loading...
//         {console.log(id)}
//       </div>
//     );
//   }

//   const handleChange1 = (e) => {
//     const { name, value } = e.target;
//     setData1({
//       ...data1,
//       [name]: value,
//     });
//   };

//   const handleSubmit1 = (e) => {
//     e.preventDefault();
//     // You can use 'data' object here to access the values of title, year, and sem
//     console.log("Data submitted:", data1);
//     sendex();
//     // You can perform further actions like sending data to the server
//   };

//   const handleChange2 = (e) => {
//     const { name, value } = e.target;
//     setData2({
//       ...data2,
//       [name]: value,
//     });
//   };

//   const handleSubmit2 = (e) => {
//     e.preventDefault();
//     // You can use 'data' object here to access the values of title, year, and sem
//     console.log("Data submitted:", data2);
//     sendacad();
//     // You can perform further actions like sending data to the server
//   };
//   const deleteectracurr = async (excid) => {
//     console.log(excid);
//     console.log(student._id);
//     const requestBody = {
//       studentId: student._id,
//       excurrId: excid,
//     };
//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/delete_extracurr",
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(requestBody),
//         }
//       );

//       const responseData = await response.json();
//       console.log(responseData);
//       if (responseData.status === 200) {
//         alert("Success");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   // const { studentId, acadId } = req.body;
//   const deleteadacach = async (acadid) => {
//     console.log(acadid);
//     console.log(student._id);
//     const requestBody = {
//       studentId: student._id,
//       acadId: acadid,
//     };
//     try {
//       const response = await fetch("http://localhost:5000/api/delete_acadach", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestBody),
//       });

//       const responseData = await response.json();
//       console.log(responseData);
//       if (responseData.status === 200) {
//         alert("Success");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   const deletemsg = async (id) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/delete_msg/${id}`,
//         {
//           method: "DELETE",
//         }
//       );
//       if (!res.ok) {
//         console.log("error deleting msg");
//       }
//       alert("msg deleted successfully");
//       console.log("msg successfully deleted");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   // useEffect(() => {
//   //   const fetchname = async ()=>{
//   //     try{
//   //       const res = await fetch("http://localhost:5000/api/fetch_teachername");
//   //     if (!res.ok) {
//   //       throw new Error("Error fetching students");
//   //     }
//   //     const data = await res.json();
//   //     console.log(data);
//   //   }
//   //     catch(error) {
//   //       console.log(error);
//   //     }
//   //   }
//   // },[]);
//   // useEffect(() => {
//   //   fetchTeacherName(); // Call fetchTeacherNames on component mount
//   // }, []);

  
//   return (
//     <div>
        

//   {/* <h2>Received ID: {id}</h2> */}
//    <h2> {name}</h2>

//    <div className="row mt-5">
//         <div className="col-lg-3">
//         <div className="justify-center items-center flex">
//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <h1 className="text-2xl font-bold mb-4">Add Acad. achivement</h1>
//             <form onSubmit={handleSubmit2}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Title:
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={data2.title}
//                   onChange={handleChange2}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Year:
//                 </label>
//                 <input
//                   type="text"
//                   name="year"
//                   value={data2.year}
//                   onChange={handleChange2}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Sem:
//                 </label>
//                 <input
//                   type="text"
//                   name="sem"
//                   value={data2.sem}
//                   onChange={handleChange2}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 style={{backgroundColor:'#6e47b8',padding:'10px 30px',color:'white',fontWeight:'1000',fontSize:'20px',marginTop:'20px',
//                 boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)',
//               }}
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//         </div>
//         <div className="col-lg-6">
//        <CertificateForm ids={id} />
//         </div>
//         <div className="col-lg-3">
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <h1 className="text-2xl font-bold mb-4">Add Extra Curricular</h1>
//             <form onSubmit={handleSubmit1}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Title:
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={data1.title}
//                   onChange={handleChange1}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Year:
//                 </label>
//                 <input
//                   type="text"
//                   name="year"
//                   value={data1.year}
//                   onChange={handleChange1}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Sem:
//                 </label>
//                 <input
//                   type="text"
//                   name="sem"
//                   value={data1.sem}
//                   onChange={handleChange1}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 style={{backgroundColor:'#6e47b8',padding:'10px 30px',color:'white',fontWeight:'1000',fontSize:'20px',marginTop:'20px',
//                 boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)',
//               }}
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Studentforms;

// import React, { useState, useEffect } from "react";
// import CertificateForm from "./CertificateForm";
// import { useLocation } from "react-router-dom";

// const Studentforms = () => {
//   const location = useLocation();
//   const { id, name } = location.state || {};
//   const [student, setStudent] = useState(null);
//   const [message, setMessage] = useState([]);
//   const [data1, setData1] = useState({ title: "", year: "", sem: "" });
//   const [data2, setData2] = useState({ title: "", year: "", sem: "" });

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/fetch_singlestudent/${id}`)
//       .then((res) => res.json())
//       .then((data) => setStudent(data))
//       .catch((err) => console.error("Error fetching student:", err));
//   }, [id]);

//   useEffect(() => {
//     const getMessages = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/get_message/${id}`);
//         const data = await res.json();
//         const enrichedMessages = await Promise.all(
//           data.map(async (msg) => {
//             try {
//               const res = await fetch(`http://localhost:5000/api/fetch_teachername/${msg.teacherID}`);
//               const teacherData = await res.json();
//               return { ...msg, teacherName: teacherData.name };
//             } catch {
//               return { ...msg, teacherName: "Unknown" };
//             }
//           })
//         );
//         setMessage(enrichedMessages);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getMessages();
//   }, []);

//   const sendex = () => {
//     fetch(`http://localhost:5000/api/add_excurr/${id}`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data1),
//     })
//       .then((res) => res.json())
//       .then(() => alert("Extracurricular added successfully"))
//       .catch((err) => console.error(err));
//   };

//   const sendacad = () => {
//     fetch(`http://localhost:5000/api/add_achivement/${id}`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data2),
//     })
//       .then((res) => res.json())
//       .then(() => alert("Achievement added successfully"))
//       .catch((err) => console.error(err));
//   };

//   const handleChange = (setter) => (e) => {
//     const { name, value } = e.target;
//     setter((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e, sendFunc) => {
//     e.preventDefault();
//     sendFunc();
//   };

//   if (!student) return <div className="text-center mt-10">Loading student data...</div>;

//   return (
//     <div className="p-8">
//       <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-8">{name}</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Academic Achievement Form */}
//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <h3 className="text-xl font-bold text-gray-800 mb-4">Add Academic Achievement</h3>
//           <form onSubmit={(e) => handleSubmit(e, sendacad)} className="space-y-4">
//             {["title", "year", "sem"].map((field) => (
//               <input
//                 key={field}
//                 type="text"
//                 name={field}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 value={data2[field]}
//                 onChange={handleChange(setData2)}
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
//               />
//             ))}
//             <button
//               type="submit"
//               className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 rounded-xl transition-all"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Certificate Upload */}
//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <h3 className="text-xl font-bold text-gray-800 mb-4">Upload Certificates</h3>
//           <CertificateForm ids={id} />
//         </div>

//         {/* Extracurricular Form */}
//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <h3 className="text-xl font-bold text-gray-800 mb-4">Add Extracurricular</h3>
//           <form onSubmit={(e) => handleSubmit(e, sendex)} className="space-y-4">
//             {["title", "year", "sem"].map((field) => (
//               <input
//                 key={field}
//                 type="text"
//                 name={field}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 value={data1[field]}
//                 onChange={handleChange(setData1)}
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
//               />
//             ))}
//             <button
//               type="submit"
//               className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 rounded-xl transition-all"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Studentforms;

import React, { useState, useEffect } from "react";
import CertificateForm from "./CertificateForm";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Studentforms = () => {
  const location = useLocation();
  const { id, name } = location.state || {};
  const [student, setStudent] = useState(null);
  const [message, setMessage] = useState([]);
  const [data1, setData1] = useState({ title: "", year: "", sem: "" });
  const [data2, setData2] = useState({ title: "", year: "", sem: "" });
  const [extraList, setExtraList] = useState([]);
  const [academicList, setAcademicList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/fetch_singlestudent/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
        setExtraList(data.excurr || []);
        setAcademicList(data.achievements || []);
      })
      .catch((err) => console.error("Error fetching student:", err));
  }, [id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/get_message/${id}`);
        const data = await res.json();
        const enrichedMessages = await Promise.all(
          data.map(async (msg) => {
            try {
              const res = await fetch(`http://localhost:5000/api/fetch_teachername/${msg.teacherID}`);
              const teacherData = await res.json();
              return { ...msg, teacherName: teacherData.name };
            } catch {
              return { ...msg, teacherName: "Unknown" };
            }
          })
        );
        setMessage(enrichedMessages);
      } catch (err) {
        console.error(err);
      }
    };
    getMessages();
  }, []);

  const sendData = async (type) => {
    const endpoint = type === "academic" ? "add_achivement" : "add_excurr";
    const data = type === "academic" ? data2 : data1;
    try {
      await fetch(`http://localhost:5000/api/${endpoint}/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      alert(`${type === "academic" ? "Achievement" : "Extracurricular"} added successfully`);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (!student) return <div className="text-center mt-10">Loading student data...</div>;

  return (
    <div className="p-8 space-y-10">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-4">{name}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Academic Form */}
        <motion.div variants={formVariants} initial="hidden" animate="visible" className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Achievement</h3>
          <form onSubmit={(e) => { e.preventDefault(); sendData("academic"); }} className="space-y-4">
            {["title", "year", "sem"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.toUpperCase()}
                value={data2[field]}
                onChange={handleChange(setData2)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
              />
            ))}
            <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 rounded-xl">Submit</button>
          </form>
        </motion.div>

        {/* Certificate Upload */}
        <motion.div variants={formVariants} initial="hidden" animate="visible" className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Upload Certificate</h3>
          <CertificateForm ids={id} />
        </motion.div>

        {/* Extracurricular Form */}
        <motion.div variants={formVariants} initial="hidden" animate="visible" className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Extracurricular Activity</h3>
          <form onSubmit={(e) => { e.preventDefault(); sendData("extra"); }} className="space-y-4">
            {["title", "year", "sem"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.toUpperCase()}
                value={data1[field]}
                onChange={handleChange(setData1)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400"
              />
            ))}
            <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 rounded-xl">Submit</button>
          </form>
        </motion.div>
      </div>

      {/* Academic & Extracurricular Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={formVariants} initial="hidden" animate="visible" className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">Academic Achievements</h3>
          {academicList.length === 0 ? (
            <p className="text-gray-500">No achievements yet.</p>
          ) : (
            <ul className="list-disc ml-6 space-y-2">
              {academicList.map((item, idx) => (
                <li key={idx} className="text-gray-700">{item.title} ({item.year}, Sem {item.sem})</li>
              ))}
            </ul>
          )}
        </motion.div>

        <motion.div variants={formVariants} initial="hidden" animate="visible" className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">Extracurricular Activities</h3>
          {extraList.length === 0 ? (
            <p className="text-gray-500">No activities yet.</p>
          ) : (
            <ul className="list-disc ml-6 space-y-2">
              {extraList.map((item, idx) => (
                <li key={idx} className="text-gray-700">{item.title} ({item.year} Sem {item.sem})</li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>

      {/* Teacher Messages */}
      <motion.div variants={formVariants} initial="hidden" animate="visible" className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-purple-800">Messages from Teachers</h3>
        {message.length === 0 ? (
          <p className="text-gray-500">No messages received yet.</p>
        ) : (
          <div className="space-y-4">
            {message.map((msg, index) => (
              <div key={index} className="p-4 bg-purple-50 rounded-lg shadow">
                <p className="text-gray-800">{msg.content}</p>
                <p className="text-sm text-gray-500 mt-1">– {msg.teacherName}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Studentforms;

