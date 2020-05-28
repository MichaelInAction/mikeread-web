import React from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import About from './about/MobileAbout';
import Landing from './landing/MobileLanding';
import Personal from './personal/MobilePersonal';

function Wrapper() {
  const location = useLocation();
  return (
    <Container>
      <TransitionGroup className='transition-group'>
        <CSSTransition
          key={ location.key }
          timeout={{ enter: 800, exit: 100 }}
          classNames='fade'
        >
          <section className='route-section'>
            <Switch location={ location }>
              <Route exact path='/' component={Landing}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/personal' component={Personal}/>
              <Route>
                <div>Page Not Found!</div>
              </Route>
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
}

const Container = styled.div`
  .fade-enter {
    opacity: 0;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in 500ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 100ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default Wrapper;
