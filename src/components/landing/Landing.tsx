import React from 'react';
import styled from 'styled-components';

import backgroundImg from '../../images/banner.jpg';
import Resume from '../../MichaelReadResume.pdf';

function Landing() {
  return (
    <Container>
      <Heading>
        <Upper>
          Hi! My name's
        </Upper>
        <Name>
          Michael Read
        </Name>
        <Lower>
          Welcome!
        </Lower>
        <Buttons>
          <a href='mailto:michael.read.75@gmail.com'>
            <Button>Contact</Button>
          </a>
          <a href={ Resume } download="MichaelReadResume.pdf" target="_blank" rel="noopener noreferrer">
            <Button>Resume</Button>
          </a>
        </Buttons>
      </Heading>
      <BackgroundImg/>
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  padding-left: calc(20% + (100vw - 1920px));
  display: flex;
  align-items: center;
  height: 100vh;
`);

const Heading = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  width: max-content;
`);

const Upper = styled.div(({ theme }) => `
  color: ${ theme.colors.background };
  font-size: ${ theme.fontSizes[4] };
  text-shadow: 5px 5px 5px ${ theme.colors.shadow };
`);

const Name = styled.div(({ theme }) => `
  color: ${theme.colors.main};
  font-size: ${ theme.fontSizes[6] };
  text-shadow: 5px 5px 5px ${ theme.colors.shadow };
`);

const Lower = styled.div(({ theme }) => `
  color: ${ theme.colors.background };
  font-size: ${ theme.fontSizes[4] };
  text-align: right;
  text-shadow: 5px 5px 5px ${ theme.colors.shadow };
`);

const Buttons = styled.div(({ theme }) => `
  padding-top: ${ theme.spacings[5] };
  display: flex;
  justify-content: space-between;
`);

const Button = styled.button(({ theme }) => `
  background-color: ${ theme.colors.blue };
  border: 3px solid ${ theme.colors.background };
  color: ${ theme.colors.background };
  padding: ${ theme.spacings[1] } ${ theme.spacings[3] };
  font-size: ${ theme.fontSizes[3] };
  cursor: pointer;
  border-radius: 200px;
  transition: transform 10ms linear;
  :hover {
    transform: scale(1.1);
    border: 3px solid ${ theme.colors.main };
    color: ${ theme.colors.main };
  }
`);

const BackgroundImg = styled.div(({ theme }) => `
  background-image: linear-gradient(black, black), url(${ backgroundImg });
  background-size: cover;
  background-blend-mode: saturation;
  z-index: -40;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(calc(100vw - 525px) 0, 100% 0, 100% 100%, calc(100vw - 1000px) 100%);
`);

export default Landing;
