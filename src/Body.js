import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing/Landing';
import React from 'react';

function Body(props) {
  return (
    <div className="content-wrap">
      <Router>
        <Switch>
          <Route exact path="/"> <Landing setPage={props.setPage}/> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Body;
