import { Navbar, Container, Nav } from "react-bootstrap";
import Parse from "parse";
import { useNavigate, Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import NewsLogo from "../Images/Logo_TID.svg";
//import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../App.css";

export function NavigationBar() {
  const navigate = useNavigate();

  function handleSignOut(e) {
    e.preventDefault();
    Parse.User.logOut().then(() => {
      navigate("/");
    });
  }

  return (
    <Navbar>
      <Container className="flex--adjustment">
        <Navbar.Brand as={Link} to="/">
          <img src={NewsLogo} width="100" height="auto" alt="Coordinews-Logo" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav activeKey={window.location.pathname}>
            {!Parse.User.current() && (
              <div>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  LogIn
                </Nav.Link>
              </div>
            )}

            {Parse.User.current() && (
              <>
                <Nav.Link as={Link} to="/ideas">
                  Ideas
                </Nav.Link>
                <Nav.Link as={Link} to="/articles">
                  Articles
                </Nav.Link>
                <Nav.Link as={Link} to="/staff">
                  Staff
                </Nav.Link>

                <Nav.Link onClick={handleSignOut} as={Link} to="/">
                  Sign Out
                </Nav.Link>

                <Nav.Link as={Link} to="/a">
                  Name
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
