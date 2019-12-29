import React, { useState } from 'react';
import Body from './Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';
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
    backgroundColor: '#D5E2E2',
    text: {
      main: '#000000',
      light: '#FFFFFF',
      link: '#449DD1',
      highlight: '#39C7DF',
    },
    fonts: {
      main: 'font-family: "Raleway", sans-serif;font-size: 16px;',
      secondary: 'font-size: 1.2rem;font-family: "PT Sans Narrow", sans-serif;',
      code: 'font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;',
      heavy: 'font-family: "Raleway", sans-serif;font-weight: bolder;',
      huge: 'font-size: 5rem;',
      large: 'font-size: 2rem;',
      normal: 'font-size: 1.2rem;',
    },
    colors: {
      lightBlue: '#449DD1',
      darkBlue: '#001F54',
      highlight: '#39C7DF',
      light: '#D5E2E2',
      white: '#FFFFFF',
      black: '#000000',
    },
    spacings: {
      quote: 'padding-left: 5%;padding-right: 5%;',
      tiny: '4px',
      small: '8px',
      medium: '24px',
      margin: '100px',
    },
    sizes: {
      full: 'height: 105vh;width: 100%;',
      carouselHeight: '500px',
    },
    image: {
      inline: 'width: auto;height: auto; overflow: auto;',
      inlineRight: 'float: right;padding-left: 10px;',
      inlineLeft: 'float: left;padding-right: 10px;',
      medium: 'max-width: 15%;',
      rounded: 'border-radius: 20%;object-fit: cover;',
    },
    banner: 'object-fit: cover;object-position: 100% 0;',
    footer: 'width: 100%;bottom: 0px;margin-bottom: -16px;padding-top: 10px;',
  };

  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <Header dropdown={dropdown} setPage={setPage} />
        <Body page={page} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Main;
