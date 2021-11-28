import React from "react";
import NewsLogo from "../Images/Logo_TID.svg";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

export default function improvedNavbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={NewsLogo} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/ideas" activeStyle>
            About
          </NavLink>
          <NavLink to="/articles" activeStyle>
            Services
          </NavLink>
          <NavLink to="/staff" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
