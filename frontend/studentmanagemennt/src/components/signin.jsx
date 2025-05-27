import s from "./teacher.module.css";
import { Button, Box, TextField, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const TeacherLogin = () => {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginButton() {
    console.log(email, password);
    const payload = { email: email, pass: password };

    try {
      axios
        .post("http://localhost:5000/api/teacher_signin", payload)
        .then((response) => {
          console.log(response);
          console.log("Response status:", response.status);
    
          if (response.status === 200) {
            console.log("User ID:", response.data.id);
            console.log("Teacher Name:", response.data.teacher.name);
    
            nav("/teacherdashboard", {
              state: {
                idte: response.data.id,
                namet: response.data.teacher.name,
              },
            });
          } else if (response.status === 401) {
            console.log("Status 401: Invalid credentials");
            console.log("hue hue");
            alert("Invalid credentials");
          } else {
            console.log("Unhandled status code:", response.status);
          }
        })
        .catch((error) => {
          console.error("Error occurred while logging in:", error);
          if (error.response && error.response.status === 401) {
            alert("Invalid credentials");
          } else {
            console.error("An unexpected error occurred:", error);
          }
        });
    } catch (error) {
      // Handle errors here
      console.error("Error occurred while logging in:", error);
    }
  }
  const gotosignup = () => {
    nav("/teachersignup");
  };
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
        <h1 className={s.heading}>Teacher Login</h1>

        <div className={s.container}>
          <div className={s.box}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 2, width: "35ch" },
                // border:'1px solid red',
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
                }}
              />
            </Box>
            <Stack
              direction="row"
              display={"flex"}
              justifyContent={"center"}
              marginTop={4}
            >
              <Button variant="" sx={{
                '&:hover': {
                  // backdropFilter: 'blur(0px)',
                  bgcolor:'#6e47b8',
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)',

                },
                p:'10px 30px',
                color:'white',
                bgcolor:'#6e47b8'}} onClick={loginButton}>
                Login
              </Button>
            </Stack>
          </div>
        </div>
        <div>
          <div className={s.bottom}>
            <Stack spacing={2}>
              <Button sx={{color:'black'}} onClick={gotosignup}>Sign Up</Button>
            </Stack>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default TeacherLogin;
