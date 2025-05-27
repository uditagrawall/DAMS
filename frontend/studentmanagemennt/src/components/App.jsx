import './App.css'
import StudentLogin from './component/student/signIn/signIn'
import { Box, ThemeProvider } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import TeacherLogin from './component/teacher/signin/signin';
import { useNavigate } from "react-router-dom";
import TeacherSignup from './component/teacher/signup/signup';
import StudentSignup from './component/student/signup/signup';


function Selection() {

  const navigate = useNavigate();

  const studentClick = () => {
    navigate("/student");
  };
  const teacherClick = () => {
    navigate("/teacher");
  }

  return (
    <>
      <div className="heading">
        <h1>Login</h1>
      </div>
      <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
    
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      marginTop={20}
      gap={60}>
        <span onClick={studentClick}>
          <Box
            sx={{
              width: 150,
              height: 150,
              borderRadius: 2,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            fontSize={20}
            fontWeight={"bold"}
          >
            STUDENT
          </Box>
        </span>
        <span onClick={teacherClick}>
          <Box
            sx={{
              width: 150,
              height: 150,
              borderRadius: 2,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            fontSize={20}
            fontWeight={"bold"}
          >
            TEACHER
          </Box>
        </span>
    </Box>

    </ThemeProvider>
    </>
  )
}



function App() {
  return (
    <div >
      <Routes>
        <Route path={"/"} element={<Selection />} />
        <Route path={"/student"} element={<StudentLogin />} />
        <Route path={"/teacher"} element={<TeacherLogin />} />
        <Route path={"/teacher_signup"} element={<TeacherSignup />} />
        <Route path={"/student_signup"} element={<StudentSignup />} />
      </Routes>

    </div>
  )
}

export default App
