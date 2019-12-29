import animateScrollTo from 'animated-scroll-to';
import Button from 'react-bootstrap/Button';
import logo from '../logo.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import styled from 'styled-components';

function Header(props) {
  const dropdownItems = props.dropdown.map((element) =>
    (<NavDropdown.Item onClick={() => animateScrollTo(document.querySelector(element.link).offsetTop - 60)} key={element.link}>
      <DropdownSpan>{element.text}</DropdownSpan>
    </NavDropdown.Item>)
  );
  return (
    <MyNavbar sticky="top" expand="lg">
      <Navbar.Brand>
        <BrandImg src={logo} width="30" height="30" className="d-inline-block align-top profilePicture" alt=""></BrandImg>
        Michael Read
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar" className="justify-content-end nav" justify="true">
        <Nav className="justify-content-end">
          <MyNavLink href='/'>Home</MyNavLink>
          <MyNavLink href='/projects'>Projects</MyNavLink>
          <MyNavLink href='/personal'>Personal</MyNavLink>
          <NavDropdown title={
            <DropdownSpan>Sections</DropdownSpan>
          } id="basic-nav-dropdown">
            {dropdownItems}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </MyNavbar>
  );
}

const MyNavbar = styled(Navbar)`
  ${props => props.theme.fonts.main}
  background: ${props => props.theme.colors.light};
  box-shadow: 0px 5px 10px black;
`;

const MyNavLink = styled(Button)`
  color: ${props => props.theme.text.link};
  background: ${props => props.theme.colors.light};
  border: 0px solid ${props => props.theme.colors.light};
  &:hover {
    background: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.darkBlue};
  }
  &:focus {
    background: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.darkBlue};
    border: 0px solid ${props => props.theme.colors.black};
    outline: none !important;
    border: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  &:active {
    background: ${props => props.theme.colors.light} !important;
    color: ${props => props.theme.colors.highlight} !important;
    border: 0px solid ${props => props.theme.colors.black} !important;
  }
`;

const DropdownSpan = styled.span`
  color: ${props => props.theme.text.link} !important;
`;

const BrandImg = styled.img`
  padding-right: ${props => props.theme.spacings.tiny};
  width: 30px;
  height: 30px;
`;

export default Header;
