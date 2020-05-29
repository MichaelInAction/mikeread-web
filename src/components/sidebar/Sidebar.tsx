import React, { useState, useRef } from 'react'
import {
  Link
} from 'react-router-dom';
import styled from 'styled-components';

import { CheckOutsideClick } from './sidebarHelpers';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);
  const closeSidebar = () => {
    setIsOpen(false);
  }
  CheckOutsideClick(wrapperRef, closeSidebar);

  return (
    <Container>
      <Bars onClick={ () => setIsOpen(!isOpen) }/>
      <SidebarContainer ref={wrapperRef} isOpen={ isOpen ? 1 : 0 }>
        <StyledLink onClick={ () => setIsOpen(false) } to='/'>Home</StyledLink>
        <StyledLink onClick={ () => setIsOpen(false) } to='/about'>About Me</StyledLink>
        <StyledLink onClick={ () => setIsOpen(false) } to='/personal'>Personal</StyledLink>
        <StyledLink onClick={ () => setIsOpen(false) } to='/projects'>Projects</StyledLink>
      </SidebarContainer>
      <DarkenScreen isOpen={ isOpen ? 1 : 0 }/>
    </Container>
  )
}

const Container = styled.div(({ theme }) => `
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: flex-end;
  z-index: 10;
  overflow: hidden;
  pointer-events: none;
`);

const Bars = styled.i.attrs({
  className: 'fas fa-bars',
})(({ theme }) => `
  font-size: 8vw;
  color: ${ theme.colors.main };
  padding: ${ theme.spacings[2] };
  z-index: 30;
  pointer-events: auto;
`);

const SidebarContainer = styled.div<{isOpen: number}>(({ theme, isOpen }) => `
  position: absolute;
  top: 0;
  right: ${ isOpen ? '0' : `calc(-30vw - ${ theme.spacings[2] } - ${ theme.spacings[2] })` };
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 ${ theme.spacings[2] };
  height: 100vh;
  width: 30vw;
  background-color: ${ theme.colors.background };
  z-index: 30;
  transition: all .3s ease-in-out;
  pointer-events: auto;
`)

const StyledLink = styled(Link)(({ theme }) => `
  color: ${ theme.colors.secondary };
  text-decoration: 'none';
  font-size: 8vw;
  text-shadow: 2px 2px 2px ${ theme.colors.shadow };
  margin-top: ${ theme.spacings[3] };
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:hover {
   color: ${ theme.colors.blue };
  }
`);

const DarkenScreen = styled.div<{isOpen: number}>(({ theme, isOpen }) => `
  background-color: ${ theme.colors.darkShadow };
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 20;
  opacity: ${ isOpen ? '1' : '0' };
  transition: all .3s ease-in-out;
`);

export default Sidebar;