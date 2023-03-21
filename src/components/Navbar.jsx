import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../constants/constants";
import { removeToken } from "../helpers/storage";
import { logoutUser } from "../slice/auth";

function Navbar() {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const style = () => ({
    borderColor: "#000",
    color: "#000",
    "&:hover": {
      borderColor: "#000",
      color: "#000"
    },
  });

  const logOut = () => {
    dispatch(logoutUser())
    removeToken("TOKEN")
    navigate("/login")
  }

  return (
    <>
      <header>
        <Container fixed>
          <div className="box">
            <Link to="/">
              <ul>
                <li>
                  <img src={logo} alt="logo" />
                </li>
                <li>myedu</li>
              </ul>
            </Link>
            {loggedIn ? (
              <ul>
                <li>{user.username}</li>
                <li>
                  <Button onClick={logOut} variant="outlined" sx={style}>
                    LogOut
                  </Button>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            )}
          </div>
        </Container>
      </header>
    </>
  );
}

export default Navbar;
