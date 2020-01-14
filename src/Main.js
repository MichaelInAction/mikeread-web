import React, { useState } from 'react';
import Body from './Body';
import { ThemeProvider } from 'styled-components';

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

  const myTheme = {
    fonts: {
      main: 'font-family: "Bebas Neue", cursive;',
    },
    colors: {
      black: '#0E0E13',
      white: '#FFFFFF',
      blue: '#5AB9EA',
      lightgrey: '#C1C8E4',
      darkblue: '#191921',
    },
    spacings: {
    },
    sizes: {
      font: [
        '20px',
        '24px',
        '30px',
        '40px',
        '50px',
        '60px',
        '72px',
        '90px',
        '100px',
      ],
    },
    image: {
    },
  };

  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <Body page={page} setPage={setPage} />
      </ThemeProvider>
    </div>
  );
}

export default Main;
