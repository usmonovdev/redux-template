import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { Input } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { registerUserFailure, registerUserStart, registerUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)

  const theme = createTheme({
    palette: {
      primary: {
        main: "#e89e27",
      },
    },
  });

  const buttonStyle = () => ({
    boxShadow: 0, 
    marginTop: "8px",
    "&:hover": {
      boxShadow: 'none',
    }
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(registerUserStart())
    const user = { username: name, email, password }
    try {
      const response = await AuthService.userRegister(user)
      console.log(user);
      console.log(response); 
      dispatch(registerUserSuccess())
    } catch (error) {
      dispatch(registerUserFailure())
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <div className="register-box">
          <form className="inner-box">
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
            <LoadingButton
              loading={isLoading}
              type="submit"
              variant="contained"
              sx={buttonStyle}
              disabled={isLoading}
              onClick={handleLogin}
            >
              Sign Up
            </LoadingButton>
            <p className="link">Already registered? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
