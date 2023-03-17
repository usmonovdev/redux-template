import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { logo } from "../constants/constants";

function Navbar() {
  return (
    <>
      <header>
        <Container fixed>
          <div className="box">
            <Link to="/">
              <ul>
                <li>
                  <img
                    src={logo}
                    alt="logo"
                  />
                </li>
                <li>myedu</li>
              </ul>
            </Link>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Navbar;
