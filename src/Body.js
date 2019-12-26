import Landing from './Landing/Landing';
import Personal from './Personal/Personal';
import Projects from './Projects/Projects';
import React from 'react';

function Body(props) {
  let content = '';
  if(props.page === 'landing') {
    content = <Landing />;
  } else if(props.page === 'projects') {
    content = <Projects />;
  } else if(props.page === 'personal') {
    content = <Personal />;
  }
  return (
    <div className="content-wrap">
      {content}
    </div>
  );
}

export default Body;
