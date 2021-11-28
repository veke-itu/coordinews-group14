// import { Navbar, Container, Nav } from "react-bootstrap";
import Parse from "parse";
import { useNavigate } from "react-router-dom";
import NewsLogo from "../Images/Logo_TID.svg";

import { ContainerLogOut, Nav, NavBtnLink2 } from "./NavBarElements";
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
      <Nav activeKey={window.location.pathname}>
        <NavLink to="/">
          <img src={NewsLogo} alt="logo" width="100" height="auto" />
        </NavLink>
        <Bars />

        {!Parse.User.current() && (
          <ContainerLogOut>
            <NavBtn>
              <NavBtnLink to="/signup">Sign Up</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="/login">Log In</NavBtnLink>
            </NavBtn>
          </ContainerLogOut>
        )}

        {Parse.User.current() && (
          <>
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
              <NavBtnLink onClick={handleSignOut} to="/">
                Sign Out
              </NavBtnLink>
            </NavBtn>
          </>
        )}
      </Nav>
    </>

    /*{ <div>
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
        </div> }*/

    //     <Navbar.Toggle />
    //     <Navbar.Collapse>
    //       <Nav activeKey={window.location.pathname}>
    //         {!Parse.User.current() && (
    //           <div>
    //   <NavMenu>
    //   <NavLink to="/ideas" activeStyle>
    //     Ideas
    //   </NavLink>
    //   <NavLink to="/articles" activeStyle>
    //     Articles
    //   </NavLink>
    //   <NavLink to="/staff" activeStyle>
    //     Staff
    //   </NavLink>
    // </NavMenu>
    // <NavBtn>
    //   <NavBtnLink to="/signin">Sign Out</NavBtnLink>
    // </NavBtn>
    // </div>
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
