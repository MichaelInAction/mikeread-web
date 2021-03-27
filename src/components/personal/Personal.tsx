import React from 'react';
import styled from 'styled-components';

import AutoType from '../auto-type/AutoType';
import image from '../../images/MCUTierList.jpg.png';
import Hero from '../../images/banner5.png';


function Personal() {
  return (
    <Container>
      <HeroWrapper>
        <HeroImage/>
      </HeroWrapper>
      <FullBox>
        <Header>
          <Highlight>Who is</Highlight> Michael Read?
        </Header>
        <CenteredBody>
          I have had a passion for computer science since I was in middle school, when I asked my dad for
          my first programming book, on Java. When I was in 11th grade I took my first computer science
          course, and the year after that I became one of the founding members of my high school's computer science club.
        </CenteredBody>
        <CenteredBody>
          I always enjoy having a personal project to work on when I'm not busy with something else,
          especially when that project can help me learn some new skill. I've done things ranging from
          turning a raspberry pi into a retro gaming system, to designing databases for different games or
          things that I'm interested in, and making simple Android applications.
        </CenteredBody>
        <CenteredBody>
          Beyond computer science, I enjoy spending time with my friends, be it hiking through nearby trails back in college,
          having a late night D&D session, hopping online and playing some multiplayer games, or
          just sitting around and hanging out.
        </CenteredBody>
      </FullBox>
      <AutoTypeContainer>
        <AutoType
          before='I love '
          typedWords={ ['comics', 'games', 'programming', 'machine learning', 'music'] }
          after=''
        />
      </AutoTypeContainer>
      <RightBox>
        <Header><Highlight>Marvel</Highlight></Header>
        <Body>
          I have what some might call an obsession with the Marvel Cinematic Universe. My mother took me to see The Avengers in theaters,
          and ever since I have seen every new movie in theaters as well. If you're interested, here is my current ranking of the films!
        </Body>
        <Image src={ image } alt='tier list'/>
      </RightBox>
      <LeftBox>
        <Header><Highlight>Gaming</Highlight></Header>
        <Body>
          When I'm not busy with work or watching movies, I can usually be found on the couch or at my desk gaming.
          I play a variety of games, from Rogue-Lites to RPGs to Platformers and the occasional MOBA. Some top picks for me at the moment would
          be <Highlight>Enter the Gungeon</Highlight> and <Highlight>Hades</Highlight>.
          When I'm playing with friends, Jackbox games are always fun, and an occasional League of Legends session wouldn't be out of the question.
        </Body>
        <Body>
          Outside of video gaming, I've been on and off with <Highlight>Dungeons & Dragons</Highlight> for a few years now. While most of the time
          I've been a player, I am currently trying my hand on a longer campaign with my friends as Dungeon Master.
        </Body>
      </LeftBox>
      <RightBox>
        <Header><Highlight>Music</Highlight></Header>
        <Body>
          From an early age I have been involved with music in one form or another. I sang in my church's childrens choir,
          and in fourth grade I began playing the trombone. I did both choir and band in middle school, and while I didn't
          continue with choir in high school, I did continue with the trombone. I was first chair trombone in both my high
          schools concert band and jazz band for three years, and continued playing through college as well. For a few months
          after graduating college, helped out my local church by joining the choir. While I am currently not in any community band,
          I do try to continue my playing.
        </Body>
      </RightBox>
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`);

const HeroWrapper = styled.div(({ theme }) => `
  z-index: 40;
  position: absolute;
  top: 0;
  left: 0;
  filter: drop-shadow(5px 5px 5px ${ theme.colors.shadow });
`)

const HeroImage = styled.div(({ theme }) => `
  background-image: linear-gradient(black, black), url(${ Hero });
  background-position: center;
  background-size: cover;
  background-blend-mode: saturation;
  z-index: 40;
  position: absolute;
  top: 0;
  left: 0;
  width: 20vw;
  height: 100vh;
  -webkit-clip-path: polygon(calc(100vw - 250px) 0, 100% 0, 150% 100%, 150% 100%);
  clip-path: polygon(0 0, 20vw 0, 0 100%, 0 100%);
  transition: all 50ms linear;
  :hover {
    background-image: linear-gradient(white, white), url(${ Hero });
  }
`);

const AutoTypeContainer = styled.div(({ theme }) => `
  padding-top: ${ theme.spacings[2] };
`);

const FullBox = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin-top: 25vh;
  margin-bottom: 50px;
  padding: ${ theme.spacings[3] };
  padding-left: 13vw;
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
  padding: ${ theme.spacings[3] };
  background-color: ${ theme.colors.gray };
  border-top: 1px solid ${ theme.colors.blue };
  border-bottom: 1px solid ${ theme.colors.blue };
  border-left: 1px solid ${ theme.colors.blue };
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
  padding: ${ theme.spacings[3] };
  background-color: ${ theme.colors.gray };
  border-top: 1px solid ${ theme.colors.blue };
  border-bottom: 1px solid ${ theme.colors.blue };
  border-right: 1px solid ${ theme.colors.blue };
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
  margin-top: ${ theme.spacings[3] };
  box-shadow: 5px 5px 5px ${ theme.colors.shadow };
  max-width: 700px;
  @media only screen and (max-width: 1100px) {
    max-width: 400px;
  }
  height: auto;
`);

export default Personal;
