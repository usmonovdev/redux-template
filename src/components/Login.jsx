import { Container, createTheme, ThemeProvider } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUserStart } from "../slice/auth";
import { Input } from "./index";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)
  console.log(isLoading);

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

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(loginUserStart())
  }

  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <div className="register-box">
          <form className="inner-box">
            <h3>Login</h3>
            <div className="inputs">
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
              Login
            </LoadingButton>
            <p className="link">You need Account? <Link to="/register">Register</Link></p>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
