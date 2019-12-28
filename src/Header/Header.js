import animateScrollTo from 'animated-scroll-to';
import Button from 'react-bootstrap/Button';
import { FaBars } from 'react-icons/fa';
import logo from '../logo.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import styled from 'styled-components';

function Header(props) {
  const dropdownItems = props.dropdown.map((element) =>
    (<button className="dropdown-item btn btn-link" onClick={() => animateScrollTo(document.querySelector(element.link).offsetTop - 60)} key={element.link}>{element.text}</button>)
  );
  return (
    <MyNavbar sticky="top">
      <Navbar.Brand>
        <BrandImg src={logo} width="30" height="30" className="d-inline-block align-top profilePicture" alt=""></BrandImg>
        Michael Read
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end nav" justify="true">
        <Nav className="justify-content-end">
          <MyNavLink onClick={() => {props.setPage('landing'); animateScrollTo(0);}}>Home</MyNavLink>
          <MyNavLink onClick={() => {props.setPage('projects'); animateScrollTo(0);}}>Projects</MyNavLink>
          <MyNavLink onClick={() => {props.setPage('personal'); animateScrollTo(0);}}>Personal</MyNavLink>
          <div className="dropdown dropleft">
            <MyNavLink id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FaBars />
            </MyNavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              {dropdownItems}
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </MyNavbar>
  );
}

const MyNavbar = styled(Navbar)`
  ${props => props.theme.fonts.main}
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 5px 10px black;
`;

const MyNavLink = styled(Button)`
  color: ${props => props.theme.text.link};
  background: ${props => props.theme.colors.white};
  border: 0px solid ${props => props.theme.colors.white};
  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.darkBlue};
  }
  &:focus {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.darkBlue};
    border: 0px solid ${props => props.theme.colors.black};
    outline: none !important;
    border: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  &:active {
    background: ${props => props.theme.colors.white} !important;
    color: ${props => props.theme.colors.highlight} !important;
    border: 0px solid ${props => props.theme.colors.black} !important;
  }
`;

const BrandImg = styled.img`
  padding-right: ${props => props.theme.spacings.tiny};
  width: 30px;
  height: 30px;
`;

export default Header;
