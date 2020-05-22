import React from 'react';
import styled from 'styled-components';

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
          <Button>Contact</Button>
          <Button>Resume</Button>
        </Buttons>
      </Heading>
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  padding-left: calc(100vw - 1920px);
  width: calc(1920px - 525px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`);

const Heading = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  width: max-content;
  padding-right: calc(20% + (100vw - 1920px));
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
  padding-top: ${ theme.spacings[2] };
  display: flex;
  justify-content: space-between;
`);

const Button = styled.button(({ theme }) => `
  background-color: ${ theme.colors.blue };
  border: 3px solid ${ theme.colors.background };
  color: ${ theme.colors.background };
  padding: ${ theme.spacings[0] } ${ theme.spacings[1] };
  font-size: ${ theme.fontSizes[3] };
  cursor: pointer;
  border-radius: 200px;
  :hover {
    border: 2px solid ${ theme.colors.main };
    color: ${ theme.colors.main };
  }
`);

export default Landing;
