import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Wrapper from './components/MobileWrapper';

function MobileApp() {
  return (
    <Router>
      <Sidebar/>
      <Wrapper/>
    </Router>
  );
}

export default MobileApp;
