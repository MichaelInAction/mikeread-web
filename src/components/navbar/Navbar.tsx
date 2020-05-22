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
      <StyledLink isCurrentPage={ location === '/' } to='/'>Home</StyledLink>
      <StyledLink isCurrentPage={ location === '/about' } to='/about'>About Me</StyledLink>
      <StyledLink isCurrentPage={ location === '/personal' } to='/personal'>Personal</StyledLink>
      <StyledLink isCurrentPage={ location === '/projects' } to='/projects'>Projects</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledLink = styled(Link)<{isCurrentPage: boolean}>(({ theme, isCurrentPage }) => `
  color: ${ isCurrentPage ? theme.colors.main : theme.colors.secondary };
  text-decoration: 'none';
  font-size: ${ isCurrentPage ? theme.fontSizes[2] : theme.fontSizes[0] };
  margin-right: ${ theme.spacings[2] };
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:hover {
    ${ !isCurrentPage && `color: ${ theme.colors.blue };` }
  }
`);

export default Navbar;
