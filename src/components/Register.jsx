import { Button, Container, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "./index";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#e89e27",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <div className="register-box">
          <div className="inner-box">
            <h3>Register</h3>
            <div className="inputs">
              <Input label="Name" type="text" text={name} setText={setName} />
              <Input label="Email" type="email" text={email} setText={setEmail} />
              <Input
                label="Password"
                text={password}
                setText={setPassword}
                type="password"
              />
            </div>
            <Button variant="contained" sx={{ boxShadow: 0, marginTop: "8px" }}>
              Sign Up
            </Button>
            <p className="link">Already registered? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
