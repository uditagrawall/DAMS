import s from "./signup.module.css";
import { Button, Box, TextField, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentSignup = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [Class, setClass] = useState("");
  const [sec, setSec] = useState("");
  const [roll, setRoll] = useState("");
  const [year, setYear] = useState(0);
  const [one_password, setOnePassword] = useState("");
  const [two_password, setTwo_Password] = useState("");
  const [error, setError] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@acropolis\.in$/;
  //edit here for mail

  function checkEmail(email) {
    const isValidEmail = emailRegex.test(email);
    if (isValidEmail) {
      return true;
    } else {
      return false;
    }
  }

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
    console.log(
      name,
      email,
      branch,
      Class,
      sec,
      roll,
      year,
      one_password,
      two_password
    );

    if (checkPassword() && checkEmail(email)) {
      const payload = {
        email: email,
        pass: two_password,
        name: name,
        branch: branch,
        Class: Class,
        section: sec,
        enroll: roll,
        year: year,
      };
      const response = await axios.post(
        "http://localhost:5000/api/student_signup",
        payload
      );
      console.log(response);
      window.alert("Signup Successful");
      if (response.status === 201) {
        nav("/studentsignin");
      }
    }
  }

  return (
    <div>
      <h1 className={s.heading}>Student SignUp</h1>

      <div className={s.container}>
        <div className={s.box}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "100ch" },
            }}
            noValidate
            autoComplete="off"
            display={"flex"}
            flexDirection={"column"}
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 2, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
              display={"flex"}
              flexDirection={"row"}
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
                label="Branch"
                variant="outlined"
                onChange={(e) => setBranch(e.target.value)}
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 2, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
              display={"flex"}
              flexDirection={"row"}
            >
              <TextField
                id="outlined-basic"
                label="Class"
                variant="outlined"
                onChange={(e) => setClass(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Section"
                variant="outlined"
                onChange={(e) => setSec(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Enroll No."
                variant="outlined"
                onChange={(e) => setRoll(e.target.value)}
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 2, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
              display={"flex"}
              flexDirection={"row"}
            >
              <TextField
                id="outlined-basic"
                label="Year"
                variant="outlined"
                onChange={(e) => setYear(e.target.value)}
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
          </Box>
          <Stack
            direction="row"
            display={"flex"}
            justifyContent={"center"}
            marginTop={4}
          >
            <Button variant="contained" sx={{ '&:hover':{bgcolor:'#6e47b8'}, bgcolor:'#6e47b8'}} onClick={SignupButton}>
              SignUp
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;
