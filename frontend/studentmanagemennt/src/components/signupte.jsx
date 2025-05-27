import s from "./signup.module.css";
import { Button, Box, TextField, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherSignup = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [one_password, setOnePassword] = useState("");
  const [two_password, setTwo_Password] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  function checkPassword() {
    if (one_password === two_password) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  }
  async function SignupButton() {
    if (checkPassword()) {
      const payload = { email: email, pass: two_password, name: name };
      const response = await axios.post(
        "http://localhost:5000/api/teacher_signup",
        payload
      );
      console.log(response);
      window.alert("Signup Successful");
      if (response.status === 201) {
        nav("/teachersignin");
      }
    }
  }

  return (
    <div>
      <h1 className={s.heading}>Teacher SignUp</h1>

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
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
              onChange={(e) => setOnePassword(e.target.value)}
            />
            <TextField
              error={error}
              helperText={error ? "Passwords don't match" : ""}
              id="outlined-basic"
              type="password"
              label="Repeat Password"
              variant="outlined"
              onChange={(e) => setTwo_Password(e.target.value)}
            />
          </Box>
          <Stack
            direction="row"
            display={"flex"}
            justifyContent={"center"}
            marginTop={4}
          >
            <Button variant="contained" onClick={SignupButton}>
              SignUp
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default TeacherSignup;
