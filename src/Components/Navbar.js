import { Navbar, Container, Nav } from "react-bootstrap";
import Parse from "parse";
import { useNavigate, Link } from "react-router-dom";

export function NavigationBar() {
  const navigate = useNavigate();

  function handleSignOut(e) {
    e.preventDefault();
    Parse.User.logOut().then(() => {
      navigate("/");
    });
  }

  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="#home">CoordiNews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={window.location.pathname}>
            {!Parse.User.current() && (
              <>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  LogIn
                </Nav.Link>
              </>
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
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}