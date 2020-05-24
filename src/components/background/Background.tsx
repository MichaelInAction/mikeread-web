import React from 'react';
import {
  useLocation
} from 'react-router-dom';
import styled from 'styled-components';

function Background() {
  let location = useLocation().pathname;
  return (
    <BackgroundContainer>
      <BackgroundDesign currentPage={ location }/>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div(({ theme }) => `
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -2;
`)

const BackgroundDesign = styled.div<{currentPage: string}>(({ theme, currentPage }) => `
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${ theme.colors.blue };
  z-index: -2;
  transition: all 400ms ease-in-out 100ms;
  ${ currentPage === '/' ? `
    position: absolute;
    -webkit-clip-path: polygon(calc(100vw - 1600px) 0, calc(100vw - 525px) 0, calc(100vw - 1000px) 100%, calc(100vw - 2125px) 100%);
    clip-path: polygon(calc(100vw - 1600px) 0, calc(100vw - 525px) 0, calc(100vw - 1000px) 100%, calc(100vw - 2125px) 100%);
  ` : ''}
  ${ currentPage === '/about' ? `
    position: absolute;
    -webkit-clip-path: polygon(calc(100vw - 560px) 0, calc(100vw - 390px) 0, calc(100vw + 170px) 100%, 100% 100%);
    clip-path: polygon(calc(100vw - 560px) 0, calc(100vw - 390px) 0, calc(100vw + 170px) 100%, 100% 100%);
  ` : ''}
  ${ currentPage === '/personal' ? `
    position: fixed;
    -webkit-clip-path: polygon(calc(100vw - 390px) 0, calc(100vw - 220px) 0, calc(100vw - 220px) 100%, calc(100vw - 390px) 100%);
    clip-path: polygon(calc(100vw - 390px) 0, calc(100vw - 220px) 0, calc(100vw - 220px) 100%, calc(100vw - 390px) 100%);
  ` : ''}
  ${ currentPage.includes('/projects') ? `
    position: absolute;
    -webkit-clip-path: polygon(calc(100vw - 250px) 0, 100% 0, 150% 100%, 150% 100%);
    clip-path: polygon(calc(100vw - 250px) 0, 100% 0, 130% 100%, 130% 100%);
  ` : ''}
`);

export default Background;