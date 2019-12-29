import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing/Landing';
import Personal from './Personal/Personal';
import Projects from './Projects/Projects';
import React from 'react';

function Body(props) {
  return (
    <div className="content-wrap">
      <Router>
        <Switch>
          <Route exact path="/"> <Landing setPage={props.setPage}/> </Route>
          <Route path="/personal"> <Personal setPage={props.setPage}/> </Route>
          <Route path="/projects"> <Projects setPage={props.setPage}/> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Body;
