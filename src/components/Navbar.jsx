import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logo } from "../constants/constants";

function Navbar() {
  const { loggedIn, user } = useSelector((state) => state.auth);

  const style = () => ({
    borderColor: "#000",
    color: "#000",
    "&:hover": {
      borderColor: "#000",
      color: "#000"
    },
  });

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
                  <Button variant="outlined" sx={style}>
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
