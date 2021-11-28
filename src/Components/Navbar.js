// import { Navbar, Container, Nav } from "react-bootstrap";
import Parse from "parse";
import { useNavigate, Link } from "react-router-dom";
import NewsLogo from "../Images/Logo_TID.svg";
// import "../App.css";

import { Nav } from "./NavBarElements";
import { NavLink } from "./NavBarElements";
import { Bars } from "./NavBarElements";
import { NavMenu } from "./NavBarElements";
import { NavBtn } from "./NavBarElements";
import { NavBtnLink } from "./NavBarElements";

export function NavigationBar() {
  const navigate = useNavigate();

  function handleSignOut(e) {
    e.preventDefault();
    Parse.User.logOut().then(() => {
      navigate("/");
    });
  }

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={NewsLogo} alt="logo" width="100" height="auto" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/ideas" activeStyle>
            Ideas
          </NavLink>
          <NavLink to="/articles" activeStyle>
            Articles
          </NavLink>
          <NavLink to="/staff" activeStyle>
            Staff
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
    // <div className="navBar--General">
    //   <Navbar>
    //     <Container>
    //       <Navbar.Brand as={Link} to="/" className="navBar">
    //         <img
    //           src={NewsLogo}
    //           width="100"
    //           height="auto"
    //           alt="Coordinews-Logo"
    //         />
    //       </Navbar.Brand>

    //       <Navbar.Toggle />
    //       <Navbar.Collapse>
    //         <Nav activeKey={window.location.pathname}>
    //           {!Parse.User.current() && (
    //             <div>
    //               <Nav.Link as={Link} to="/signup">
    //                 Sign Up
    //               </Nav.Link>
    //               <Nav.Link as={Link} to="/login">
    //                 LogIn
    //               </Nav.Link>
    //             </div>
    //           )}

    //           {Parse.User.current() && (
    //             <div className="navBar--LoggedIn">
    //               <div className="actionComponents">
    //                 <Nav.Link as={Link} to="/ideas">
    //                   Ideas
    //                 </Nav.Link>
    //                 <Nav.Link as={Link} to="/articles">
    //                   Articles
    //                 </Nav.Link>
    //                 <Nav.Link as={Link} to="/staff">
    //                   Staff
    //                 </Nav.Link>
    //               </div>

    //               <Nav.Link
    //                 onClick={handleSignOut}
    //                 as={Link}
    //                 to="/"
    //                 className="signOut"
    //               >
    //                 Sign Out
    //               </Nav.Link>
    //             </div>
    //           )}
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </div>
  );
}
