import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import styled from 'styled-components';

import Background from './components/background/Background';
import Navbar from './components/navbar/Navbar';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Container>
      <Router>
        <Nav>
          <Navbar/>
        </Nav>
        <Background/>
        <Wrapper/>
      </Router>
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  width: 100vw;
`);

const Nav = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export default App;
