import React from 'react';
import styled from 'styled-components';

import image from '../../images/MCUTierList.jpg.png';

function MobilePersonal() {
  return (
    <Container>
      <FullBox>
        <Header>
          <Highlight>Who is</Highlight> Michael Read?
        </Header>
        <Body>
          I have had a passion for computer science since I was in middle school, when I asked my dad for
          my first programming book, on Java. When I was in 11th grade I took my first computer science
          course, and the year after that I became one of the founding members of my high schools computer science club.
        </Body>
        <Body>
          I always enjoy having a personal project to work on when I'm not busy with something else,
          especially when that project can help me learn some new skill. I've done things ranging from
          turning a raspberry pi into a retro gaming system, to designing databases for different games or
          things that I'm interested in, and making simple Android applications.
        </Body>
        <Body>
          Beyond computer science, I enjoy spending time with my friends, be it hiking through nearby trails,
          having a late night D&D session, hopping online and playing some multiplayer games, or
          just sitting around and hanging out.
        </Body>
      </FullBox>
      <FullBox>
        <Header><Highlight>Marvel</Highlight></Header>
        <Body>
          I have what some might call an obsession with the Marvel Cinematic Universe. My mother took me to see The Avengers in theaters,
          and ever since I have seen every new movie in theaters as well. If you're interested, here is my current ranking of the films!
        </Body>
        <Image src={ image } alt='tier list'/>
      </FullBox>
      <FullBox>
        <Header><Highlight>Gaming</Highlight></Header>
        <Body>
          When I'm not busy with work or watching movies, I can usually be found on the couch or at my desk gaming.
          I play a variety of games, from Rogue-Lites to RPGs to Platformers and the occasional MOBA. Some top picks for me at the moment would
          be <Highlight>The Binding of Isaac: Rebirth</Highlight>, <Highlight>Enter the Gungeon</Highlight>, and <Highlight>Transistor</Highlight>.
          When I'm playing with friends, Jackbox games are always fun, and an occasional League match wouldn't be out of the question.
        </Body>
        <Body>
          Outside of video gaming, I've been on and off with <Highlight>Dungeons & Dragons</Highlight> for a few years now. While most of the time
          I've been a player, I am currently trying my hand on a longer campaign with my friends as Dungeon Master.
        </Body>
      </FullBox>
      <FullBox>
        <Header><Highlight>Music</Highlight></Header>
        <Body>
          From an early age I have been involved with music in one form or another. I sang in my church's childrens choir,
          and in fourth grade I began playing the trombone. I did both choir and band in middle school, and while I didn't
          continue with choir in high school, I did continue with the trombone. I was first chair trombone in both my high
          schools concert band and jazz band for three years, and continued playing through college as well. For a few months
          after graduating college, helped out my local church by joining the choir. While I am currently not in any community band,
          I do try to continue my playing.
        </Body>
      </FullBox>
      <Background/>
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 10vh;
  position: relative;
`);

const FullBox = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: ${ theme.spacings[3] } 0;
  padding: ${ theme.spacings[2] };
  background-color: ${ theme.colors.gray };
  border-top: 1px solid ${ theme.colors.blue };
  border-bottom: 1px solid ${ theme.colors.blue };
  z-index: 1;
  box-shadow: 5px 5px 5px ${ theme.colors.shadow };
`);

const Header = styled.div(({ theme }) => `
  font-size: 12vw;
  color: ${ theme.colors.main };
`);

const Highlight = styled.span(({ theme }) => `
  color: ${ theme.colors.blue };
`);

const Body = styled.p(({ theme }) => `
  font-size: 5vw;
  color: ${ theme.colors.main };
  text-align: center;
`);

const Image = styled.img(({ theme }) => `
  box-shadow: 5px 5px 5px ${ theme.colors.shadow };
  max-width: 100%;
  max: 100vh;
  margin: auto;
`);

const Background = styled.div(({ theme }) => `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${ theme.colors.blue };
  -webkit-clip-path: polygon(60vw 0, 80vw 0, 80vw 100%, 60vw 100%);
  clip-path: polygon(60vw 0, 80vw 0, 80vw 100%, 60vw 100%);
`);

export default MobilePersonal;
