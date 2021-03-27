import React from 'react';
import styled from 'styled-components';

import Resume from '../../MichaelReadResume.pdf';

function MobileLanding() {
  return (
    <Container>
      <Top/>
      <HeadingContainer>
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
        </Heading>
      </HeadingContainer>
      <Buttons>
        <a href='mailto:michael.read.75@gmail.com'>
          <Button>Contact</Button>
        </a>
        <a href={ Resume } target="_blank" rel="noopener noreferrer">
          <Button>Resume</Button>
        </a>
      </Buttons>
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  background-color: ${ theme.colors.secondary };
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
`);

const Top = styled.div(({ theme }) => `
  background-color: ${ theme.colors.background };
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 35vh;
`);

const HeadingContainer = styled.div(({ theme }) => `
  background-color: ${ theme.colors.blue };
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${ theme.spacings[4] } 0;
  margin-top: 20vh;
  -webkit-clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);
  z-index: 1;
`);

const Heading = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: max-content;
`);

const Upper = styled.div(({ theme }) => `
  font-size: 8vw;
  color: ${ theme.colors.background };
`);

const Name = styled.div(({ theme }) => `
  font-size: 20vw;
  color: ${ theme.colors.main };
`);

const Lower = styled.div(({ theme }) => `
  font-size: 8vw;
  color: ${ theme.colors.background };
  align-self: flex-end;
`);

const Buttons = styled.div(({ theme }) => `
  background-color: ${ theme.colors.secondary };
  z-index: 0;
  width: 100%;
  padding-top: ${ theme.spacings[1] };
  display: flex;
  justify-content: space-around;
`);

const Button = styled.button(({ theme }) => `
  background-color: ${ theme.colors.secondary };
  border: 3px solid ${ theme.colors.background };
  color: ${ theme.colors.background };
  padding: 2vw 5vw;
  font-size: 8vw;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  :hover {
    border: 3px solid ${ theme.colors.main };
    color: ${ theme.colors.main };
  }
`);

export default MobileLanding;
