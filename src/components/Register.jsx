import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { Input } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import AuthServie from "../service/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

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
      boxShadow: "none",
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, username: name, password };
    try {
      const response = await AuthServie.userRegister(user);
      console.log(response);
      dispatch(signUserSuccess());
    } catch (error) {
      console.log(error.response.data.errors);
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <div className="register-box">
          <form className="inner-box">
            <h3>Register</h3>
            <div className="inputs">
              <Input label="Name" type="text" text={name} setText={setName} />
              <Input
                label="Email"
                type="email"
                text={email}
                setText={setEmail}
              />
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
            <p className="link">
              Already registered? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
