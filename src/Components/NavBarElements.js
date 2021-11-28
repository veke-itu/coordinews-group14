import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #8d519a;
  height: 128px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  font-size: 18px;
`;

export const NavLink = styled(Link)`
  color: #f5f4f5;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: 0.6em;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #4a1256;
    border-radius: 4px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #978f99;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContainerLogOut = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  background: #f5f4f5;
  padding: 10px 22px;
  color: #8d519a;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #4a1256;
    color: #f5f4f5;
  }
`;

export const NavBtnLink2 = styled(Link)`
  border-radius: 4px;
  background: #4a1256;
  padding: 10px 22px;
  color: #f5f4f5;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f5f4f5;
    color: #8d519a;
  }
`;
