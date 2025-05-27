// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import pdf from "./pdficon.png";
// import image22 from "./certificates11.jpg";
// import image23 from "./assets/extra curricular.jpg";
// import image24 from "./assets/track your progress.jpg";
// import image25 from "./assets/blogg.jpg";
// import image26 from "./assets/Agile.jpeg";
// import image27 from "./assets/labsCSIT.jpeg";
// import image28 from "./assets/labsCSIT2.jpeg";
// import image29 from "./assets/college.jpg";
// const Home = () => {
//   const nav = useNavigate();

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       className="m-5 text-left"
//     >
//       {/* Header Section */}
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//         <div className="flex justify-center gap-32">
//           <div className="mt-12">
//             <img
//               src="https://aitr.ac.in/wp-content/uploads/2023/03/unnamed-1-768x152.png"
//               alt="AITR Logo"
//               className="w-36 mx-auto mb-4 "
//             />
//           </div>
//           <div className="w-[800px]"></div>
//           <div>
//             <img
//               src="https://media.licdn.com/dms/image/v2/C4E03AQGm5EI0q2xQAg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1643365928196?e=2147483647&v=beta&t=HKtxRBHvv5V51e_zStqdZArbWFQ7clot4UC1E8xUG84"
//               alt="Profile"
//               className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <p className="text-4xl font-bold">
//             Department Achievement Management System
//           </p>
//         </div>
//       </motion.div>

//       {/* Feature Cards */}
//       <div className="flex justify-center gap-6 p-6">
//         {/* Box 1 */}
//         <div className="flex-1 border-4 border-indigo-500 rounded-xl p-6 shadow-lg text-center">
//           <div className="space-y-6">
//             {[
//               { image: image22, title: "Upload Certificates", text: "Students can easily upload their academic transcripts, certificates of achievement, participation in extracurricular activities, and any global certificates they've earned." },
//               { image: image23, title: "Showcase Extra Curricular Achievements", text: "This platform allows students to showcase their extracurricular achievements so appropriate authorities can connect with them for relevant competitions and opportunities." },
//               { image: image24, title: "Track Your Progress", text: "Students can upload their academic progress, set goals, and track milestones while faculty members monitor their progress reports." },
//               { image: image25, title: "Blog for the Community", text: "The blogging feature creates a collaborative community by connecting students, teachers, and alumni. Students share experiences, alumni provide mentorship, and teachers contribute guidance." }
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="items-center bg-purple-700 text-white p-4 rounded-lg shadow-lg border border-black"
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: false }}
//               >
//                 <div className="flex justify-center">
//                   <img src={feature.image} alt={feature.title} className="w-60 h-60 object-cover rounded-lg" />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
//                   <p className="text-lg leading-relaxed">{feature.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Box 2 */}
//         <div className="flex-1 border-4 border-indigo-500 rounded-xl p-6 shadow-lg text-center">
//           <div className="space-y-6">
//             {[
//               { image: image26, title: "Software Engineering and Agile Workspace", text: "Software Engineering and Agile Workspace for students gives them space to think out of the box and motivation to perform their best" },
//               { image: image27, title: "IoT lab", text: "IoT lab is equipped with all the necessary digital devices like Arduino board, sensors and cables" },
//               { image: image28, title: "Database Management Systems Lab", text: "Database Management Systems Lab is well equipped with 30 highly configured systems and softwares like Oracle 10g, Oracle 11g, SQLLite." },
//               { image: image29, title: "Acropolis Institute of Technology and Research (AITR)", text: "Acropolis Institute of Technology and Research (AITR), is a private college established in 2005, by Teach for India Education and Research Samiti in Indore, Madhya Pradesh. It is affiliated with Rajiv Gandhi Proudyogiki Vishwa Vidyalaya for BTech, Diploma, BE, BPharm, and MPharm courses. AITR Indore is also accredited by the NBA. According to AITR Ranking 2023, NIRF placed it at 151st out of 312 colleges in the overall category." }
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="items-center bg-purple-700 text-white p-4 rounded-lg shadow-lg border border-black"
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: false }}
//               >
//                 <div className="flex justify-center">
//                   <img src={feature.image} alt={feature.title} className="w-60 h-60 object-cover rounded-lg" />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
//                   <p className="text-lg leading-relaxed">{feature.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Notice Box (Resized) */}
//         <div className="w-1/3 border-4 border-indigo-500 rounded-xl p-6 shadow-lg text-center flex flex-col justify-center h-full">
//           <h2 className="text-lg font-semibold text-indigo-700 border-b-2 pb-2">Notice</h2>
//           <p className="text-gray-600 mt-2">End-semester exams will commence from 21st of April 2025. Students must carry their ID cards and hall tickets. Ensure timely submission of assignments and adhere to the exam schedule. For any queries, contact the examination department. Best of luck!</p>
//         </div>
//       </div>

//       {/* Upload Certificate Button */}
//       <motion.div className="flex justify-center mt-10" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
//         <button
//           className="bg-gray-900 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
//           onClick={() => nav("/studentsignin")}
//         >
//           Upload Your Certificates
//         </button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Home;


import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import image22 from "./certificates11.jpg";
import image23 from "./assets/extra curricular.jpg";
import image24 from "./assets/track your progress.jpg";
import image25 from "./assets/blogg.jpg";
import image26 from "./assets/Agile.jpeg";
import image27 from "./assets/labsCSIT.jpeg";
import image28 from "./assets/labsCSIT2.jpeg";
import image29 from "./assets/college.jpg";

const Home = () => {
  const nav = useNavigate();

  const features1 = [
    {
      image: image22,
      title: "Upload Certificates",
      text: "Upload academic transcripts, achievement certificates, and more with ease."
    },
    {
      image: image23,
      title: "Showcase Extra Curricular Achievements",
      text: "Display extracurricular success and connect with relevant opportunities."
    },
    {
      image: image24,
      title: "Track Your Progress",
      text: "Set academic goals, monitor growth, and view progress reports."
    },
    {
      image: image25,
      title: "Blog for the Community",
      text: "Engage with students, alumni, and faculty via interactive blogs."
    }
  ];

  const features2 = [
    {
      image: image26,
      title: "Software Engineering & Agile Workspace",
      text: "Collaborative space for creative, agile-driven learning experiences."
    },
    {
      image: image27,
      title: "IoT Lab",
      text: "Hands-on lab with Arduino boards, sensors, and other IoT devices."
    },
    {
      image: image28,
      title: "DBMS Lab",
      text: "Equipped with modern tools like Oracle 11g, SQLite, and more."
    },
    {
      image: image29,
      title: "About AITR",
      text: "Established in 2005, AITR is a top-tier institution ranked by NIRF."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-12 px-6"
    >
      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <img
          src="https://aitr.ac.in/wp-content/uploads/2023/03/unnamed-1-768x152.png"
          alt="AITR Logo"
          className="w-48 mb-4"
        />
        {/* <img
          src="https://media.licdn.com/dms/image/v2/C4E03AQGm5EI0q2xQAg/profile-displayphoto-shrink_200_200/0/1643365928196?e=2147483647&v=beta&t=HKtxRBHvv5V51e_zStqdZArbWFQ7clot4UC1E8xUG84"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
        /> */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mt-4 text-indigo-700">
          Department Achievement Management System
        </h1>
      </div>

      {/* Feature Sections */}
      <div className="grid md:grid-cols-2 gap-8 px-4 md:px-16">
        {[features1, features2].map((featureList, idx) => (
          <div key={idx} className="space-y-6">
            {featureList.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white border border-indigo-300 p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-xl mb-3"
                />
                <h2 className="text-xl font-semibold text-indigo-700 mb-1">{feature.title}</h2>
                <p className="text-gray-700 text-base">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        ))}

        {/* Notice Section */}
        <div className="md:col-span-2">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-bold text-yellow-700 mb-2">📢 Notice</h2>
            <p className="text-gray-800">
              End-semester exams will commence from <strong>21st April 2025</strong>. Carry your ID cards & hall tickets. Submit assignments on time. For queries, contact the exam department. Good luck!
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <motion.button
          onClick={() => nav("/studentsignin")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Upload Your Certificates
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Home;
