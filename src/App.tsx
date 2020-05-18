import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

import Landing from './components/landing/Landing';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Container>
      <Router>
        <Nav>
          <Navbar/>
        </Nav>
        <Switch>
          <Route exact path='/'>
            <Landing/>
          </Route>
          <Route path='/about'>
            <div>About</div>
          </Route>
          <Route path='/personal'>
            <div>Personal</div>
          </Route>
          <Route path='/Projects'>
            <div>Projects</div>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  background-color: ${ theme.colors.background };
  width: 100vw;
`);

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export default App;
