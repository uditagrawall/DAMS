import s from "./student.module.css";
import { Button, Box, TextField, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const StudentLogin = () => {
  const navigate = useNavigate();

  const gotostsignup = () => {
    navigate("/studentsignup");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signin() {
    console.log(email, password);
    const payload = { email: email, password: password };
    const response = await axios.post(
      "http://localhost:5000/api/student_signin",
      payload
    );
    if (response.status === 200) {
      console.log(response.data.id);

      navigate("/studentdashboard", { state: { id: response.data.id } });
    }
    else if(response.status === 401){
      alert("inv cred");
    }
    else{
      console.log("check credentials");
    }
    console.log(response);
  }

  return (
    <div style={{ margin: " 100px 480px" }}>
       <Box 
      sx={{
        position: 'relative',
        backgroundImage: "url('path/to/your/image.jpg')",
        backgroundSize: 'cover',
        transition: 'backdrop-filter 0.3s ease',
        padding:'5px',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'white', /* Adjust opacity as needed */
        borderRadius:'16px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)',

      }}
      >
      <h1 className={s.heading}>Student Login</h1>

      <div className={s.container}>
        <div className={s.box}>
          <Box
            component="form"
            sx={{ 
              "& > :not(style)": { m: 2, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
            display={"flex"}
            flexDirection={"column"}
           
          >
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Border color when not focused
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // Border color when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'black', // Label color
                },
                '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                  color: 'black', // Label color when shrunk (small)
                },
              }}
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // Border color when not focused
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // Border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // Border color when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'black', // Label color
                },
                '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                  color: 'black', // Label color when shrunk (small)
                },
              }}
            />
          </Box>
          <Stack
            direction="row"
            display={"flex"}
            justifyContent={"center"}
            marginTop={4}
          >
            <Button
            sx={{
              '&:hover': {
                // backdropFilter: 'blur(0px)',
                bgcolor:'#6e47b8',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)',
              },
              p:'10px 30px',
              color:"white",
              bgcolor:'#6e47b8'}}
            variant="" onClick={signin}>
              Login
            </Button>
          </Stack>
        </div>
      </div>
      <div>
        <div className={s.bottom}>
          <Stack spacing={2}>
            <Button sx={{color:'black'}}   onClick={gotostsignup}>Sign Up</Button>
          </Stack>
        </div>
      </div>
      </Box>
    </div>
  );
};

export default StudentLogin;
