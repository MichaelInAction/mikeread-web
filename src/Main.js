import './App.css';
import React, { useState } from 'react';
import Body from './Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Main() {
  const [page, setPage] = useState('landing');
  let dropdown = [];
  if(page === 'landing') {
    dropdown = [{link: '#head', text: 'Welcome'},
      {link: '#whoami', text: 'Who Am I?'},
      {link: '#skills', text: 'Skills'},
      {link: '#experience', text: 'Experience'},
      {link: '#education', text: 'Education'}];
  } else if(page === 'projects') {
    dropdown = [{link: '#Chatbot-Deployment', text: 'Deployment and Hyper-Parameter Optimization of Chatbots'},];
  } else if(page === 'personal') {
    dropdown = [{link: '#head', text: 'Top'},
      {link: '#bio', text: 'About Me'},
      {link: '#marvel', text: 'Marvel'},
      {link: '#music', text: 'Music'}];
  }
  return (
    <div>
      <Header dropdown={dropdown} setPage={setPage} />
      <Body page={page} />
      <Footer />
    </div>
  );
}

export default Main;
