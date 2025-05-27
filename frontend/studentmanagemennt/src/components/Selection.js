// import React from "react";

// import { Box, ThemeProvider } from "@mui/material";

// import { useNavigate } from "react-router-dom";
// import s from "./signup.module.css";

// // import {bgImage} from 'frontend\studentmanagemennt\src\components\assets\realistic-style-technology-particle-ba'

// const Selection = () => {
//   const navigate = useNavigate();

//   const studentClick = () => {
//     navigate("/studentsignin");
//   };
//   const teacherClick = () => {
//     navigate("/teachersignin");
//   };

//   return (
//     <div className='body1' style={{height:'50rem'}} >
//       <div className="flex flex-row justify-center mt-20">
//         <h1 style={{ fontSize: "4rem", margin: "1rem 0", fontWeight: "extrabold" , color:'black'}}>
//           Login
//         </h1>
//       </div>
//       <ThemeProvider
//         theme={{
//           palette: {
//             primary: {
//               main: "#007FFF",
//               dark: "#0066CC",
//             },
//           },
//         }}
//       >
//         <Box
//           display={"flex"}
//           flexDirection={"row"}
//           justifyContent={"center"}
//           marginTop={20}
//           gap={20}
//         >
//           <span onClick={studentClick}>
//             <Box
//               // sx={{
//               //   width: 300,
//               //   height: 150,
//               //   borderRadius: 2,
//               //   bgcolor: "primary.main",
//               //   "&:hover": {
//               //     bgcolor: "primary.dark",
//               //   },
//               //   cursor:'pointer'
//               // }}
//               sx={{
//                 position: 'relative',
//                 // backgroundImage: "url('path/to/your/image.jpg')",
//                 // backgroundSize: 'cover',
//                 // transition: 'backdrop-filter 0.3s ease',
//                 padding:'40px',
//                 border:'1px solid black',
//                 borderRadius:'16px',

//                 '&:hover::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   backgroundColor: 'rgba(255, 255, 255, 0.3)', /* Adjust opacity as needed */
//                   borderRadius:'16px',
//                 },
//                 '&:hover': {
//                   backdropFilter: 'blur(10px)',
//                   cursor:"pointer"
//                 }
//               }}
//               display="flex"
//               backgroundColor={"#6e47b8"}
              
//               alignItems={"center"}
//               justifyContent={"center"}
//               color={"white"}
//               cursor={"pointer"}
//               fontSize={40}
//               fontWeight={"bold"}
//             >
//               STUDENT
//             </Box>
//           </span>
//           <span onClick={teacherClick}>
//             <Box
//               sx={{
//                 position: 'relative',
//                 backgroundImage: "url('path/to/your/image.jpg')",
//                 backgroundSize: 'cover',
//                 transition: 'backdrop-filter 0.3s ease',
//                 padding:'40px',
//                 border:'1px solid black',
//                 borderRadius:'16px',
//                 '&:hover::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   backgroundColor: 'rgba(255, 255, 255, 0.3)', /* Adjust opacity as needed */
//                   borderRadius:'16px',
//                 },
//                 '&:hover': {
//                   backdropFilter: 'blur(10px)',
//                   cursor:"pointer"
//                 }
//               }}
//               display="flex"
//               backgroundColor={"#6e47b8"}
//               alignItems={"center"}
//               justifyContent={"center"}
//               color={"white"}
//               // backgroundColor={""}
//               fontSize={40}
//               fontWeight={"bold"}
//             >
//               TEACHER
//             </Box>
//           </span>
//           <span onClick={() => window.location.href = "http://localhost:3001/account"}>
//             <Box
//               sx={{
//                 position: 'relative',
//                 backgroundImage: "url('path/to/your/image.jpg')",
//                 backgroundSize: 'cover',
//                 transition: 'backdrop-filter 0.3s ease',
//                 padding:'40px',
//                 border:'1px solid black',
//                 borderRadius:'16px',
//                 '&:hover::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   backgroundColor: 'rgba(255, 255, 255, 0.3)', /* Adjust opacity as needed */
//                   borderRadius:'16px',
//                 },
//                 '&:hover': {
//                   backdropFilter: 'blur(10px)',
//                   cursor:"pointer"
//                 }
//               }}
//               display="flex"
//               backgroundColor={"#6e47b8"}
//               alignItems={"center"}
//               justifyContent={"center"}
//               color={"white"}
//               // backgroundColor={""}
//               fontSize={40}
//               fontWeight={"bold"}
//             >
//             ALUMNI
//             </Box>
//           </span>
//         </Box>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default Selection;

// import React from "react";
// import { Box, ThemeProvider, createTheme } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const Selection = () => {
//   const navigate = useNavigate();

//   const studentClick = () => navigate("/studentsignin");
//   const teacherClick = () => navigate("/teachersignin");

//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: "#6e47b8",
//         dark: "#56359a",
//       },
//     },
//   });

//   const cardStyle = {
//     position: "relative",
//     padding: "50px 70px",
//     border: "2px solid #6e47b8",
//     borderRadius: "20px",
//     transition: "transform 0.3s, box-shadow 0.3s",
//     backgroundColor: "#6e47b8",
//     color: "#ffffff",
//     fontSize: "2rem",
//     fontWeight: "bold",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//     "&:hover": {
//       transform: "translateY(-10px)",
//       boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
//       cursor: "pointer",
//     },
//   };

//   return (
//     <div className="body1" style={{ minHeight: "100vh", background: "#f5f6fa", padding: "5rem 2rem" }}>
//       <div className="flex justify-center mb-12">
//         <h1 style={{ fontSize: "3.5rem", fontWeight: "900", color: "#2c3e50" }}>Login</h1>
//       </div>

//       <ThemeProvider theme={theme}>
//         <Box
//           display="flex"
//           flexDirection="row"
//           justifyContent="center"
//           gap={10}
//           flexWrap="wrap"
//         >
//           <span onClick={studentClick}>
//             <Box sx={cardStyle}>
//               STUDENT
//             </Box>
//           </span>

//           <span onClick={teacherClick}>
//             <Box sx={cardStyle}>
//               TEACHER
//             </Box>
//           </span>
//         </Box>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default Selection;

import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Selection = () => {
  const navigate = useNavigate();

  const studentClick = () => navigate("/studentsignin");
  const teacherClick = () => navigate("/teachersignin");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#6e47b8",
        dark: "#4a3291",
      },
    },
  });

  const cardStyle = {
    position: "relative",
    width: "250px",
    height: "160px",
    padding: "40px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    color: "#fff",
    fontSize: "1.8rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <div
      className="body1"
      style={{
        minHeight: "100vh",
        padding: "4rem 2rem",
        background: "linear-gradient(135deg, #8e44ad, #3498db)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
      }}
    >
      <h1 style={{ fontSize: "3.5rem", fontWeight: "900", color: "#ffffff" }}>
        Login
      </h1>

      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          gap={10}
          flexWrap="wrap"
        >
          <span onClick={studentClick}>
            <Box sx={cardStyle}>STUDENT</Box>
          </span>

          <span onClick={teacherClick}>
            <Box sx={cardStyle}>TEACHER</Box>
          </span>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Selection;
