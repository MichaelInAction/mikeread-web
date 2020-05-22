import React from 'react';
import styled from 'styled-components';
import image from '../../images/MCUTierList.jpg.png';

function Personal() {
  return (
    <Container>
      <FullBox>
        <Header>
          About <Highlight>Me</Highlight>
        </Header>
        <CenteredBody>
          I have had a passion for computer science since I was in middle school, when I asked my dad for
          my first programming book, on Java. When I was in 11th grade I took my first computer science
          course, and the year after that I became one of the founding members of my high schools computer science club.
        </CenteredBody>
        <CenteredBody>
          I always enjoy having a personal project to work on when I'm not busy with something else,
          especially when that project can help me learn some new skill. I've done things ranging from
          turning a raspberry pi into a retro gaming system, to designing databases for different games or
          things that I'm interested in, and making simple Android applications.
        </CenteredBody>
        <CenteredBody>
          Beyond computer science, I enjoy spending time with my friends, be it hiking through nearby trails,
          having a late night D&D session, hopping online and playing some multiplayer games, or
          just sitting around and hanging out.
        </CenteredBody>
      </FullBox>
      <RightBox>
        <Header><Highlight>Marvel</Highlight></Header>
        <Body>
          I have what some might call an obsession with the Marvel MCU. My mother took me to see The Avengers in theaters,
          and ever since I have seen every new movie in theaters as well. If you're interested, here is my current ranking of the films!
        </Body>
        <Image src={ image } alt='tier list'/>
      </RightBox>
      <LeftBox>
        <Header><Highlight>Gaming</Highlight></Header>
        <Body>
          When I'm not busy with work or watching movies, I can usually be found on the couch or at my desk gaming. While gaming with friends
          is 
        </Body>
      </LeftBox>
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`);

const FullBox = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin-top: 30vh;
  margin-bottom: 50px;
  padding: ${ theme.spacings[1] };
  background-color: ${ theme.colors.gray };
  border-top: 1px solid ${ theme.colors.blue };
  border-bottom: 1px solid ${ theme.colors.blue };
  z-index: 1;
  box-shadow: 5px 5px 5px ${ theme.colors.shadow };
`);

const RightBox = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin: 50px 0;
  max-width: 60%;
  padding: ${ theme.spacings[1] };
  background-color: ${ theme.colors.gray };
  z-index: 1;
  box-shadow: 5px 5px 5px ${ theme.colors.shadow };
`);

const LeftBox = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  margin: 50px 0;
  max-width: 60%;
  padding: ${ theme.spacings[1] };
  background-color: ${ theme.colors.gray };
  z-index: 1;
  box-shadow: 5px 5px 5px ${ theme.colors.shadow };
`);

const Header = styled.div(({ theme }) => `
  font-size: ${ theme.fontSizes[4] };
  color: ${ theme.colors.main };
`);

const Highlight = styled.span(({ theme }) => `
  color: ${ theme.colors.blue };
`);

const CenteredBody = styled.p(({ theme }) => `
  font-size: ${ theme.fontSizes[0] };
  color: ${ theme.colors.main };
  text-align: center;
`);

const Body = styled.p(({ theme }) => `
  font-size: ${ theme.fontSizes[0] };
  color: ${ theme.colors.main };
`);

const Image = styled.img(({ theme }) => `
  margin-top: ${ theme.spacings[1] };
  box-shadow: 5px 5px 5px ${ theme.colors.shadow };
  max-width: 700px;
  height: auto;
  transition: all .2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`);

export default Personal;
