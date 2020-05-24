import React from 'react';
import {
  Link,
  useLocation
} from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  let location = useLocation().pathname;
  return (
    <Container>
      <StyledLink iscurrentpage={ location === '/' ? 1 : 0 } to='/'>Home</StyledLink>
      <StyledLink iscurrentpage={ location === '/about' ? 1 : 0 } to='/about'>About Me</StyledLink>
      <StyledLink iscurrentpage={ location === '/personal' ? 1 : 0 } to='/personal'>Personal</StyledLink>
      <StyledLink iscurrentpage={ location.includes('/projects') ? 1 : 0 } to='/projects'>Projects</StyledLink>
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  background: linear-gradient(${ theme.colors.background }, rgba(0,0,0,0));
`);

const StyledLink = styled(Link)<{iscurrentpage: number}>(({ theme, iscurrentpage }) => `
  color: ${ iscurrentpage ? theme.colors.main : theme.colors.secondary };
  text-decoration: 'none';
  font-size: ${ iscurrentpage ? theme.fontSizes[2] : theme.fontSizes[0] };
  text-shadow: 2px 2px 2px ${ theme.colors.shadow };
  margin-right: ${ theme.spacings[5] };
  cursor: ${ iscurrentpage ? 'default' : 'pointer' };
  ${ iscurrentpage ? 'pointer-events: none;' : '' };
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:hover {
    ${ !iscurrentpage && `color: ${ theme.colors.blue };` }
  }
`);

export default Navbar;
