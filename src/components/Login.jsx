import { useEffect, useState } from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import { Input, ValidError } from "./index";
import AuthServie from "../service/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate()

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
    const user = { email, password };
    try {
      const response = await AuthServie.userLogin(user);
      console.log(response);
      dispatch(signUserSuccess(response.data.user));
      navigate("/")
    } catch (error) {
      console.log(error.response.data.errors);
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/")
    }
  }, [loggedIn])

  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <div className="register-box">
          <form className="inner-box">
            <h3>Login</h3>
            <div className="inputs">
              <ValidError/>
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
              Login
            </LoadingButton>
            <p className="link">
              You need Account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
