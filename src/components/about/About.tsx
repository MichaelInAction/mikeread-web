import React from 'react';
import styled from 'styled-components';

import Hero from '../../images/banner2.png';

function About() {
  return (
    <Container>
      <HeroWrapper>
        <HeroImage/>
      </HeroWrapper>
      <FullBox>
        <Header>
          About <Highlight>Me</Highlight>
        </Header>
        <CenteredBody>
        Hey! I'm a software engineer currently working for <Highlight>Bazaarvoice</Highlight> in Philadelphia, PA.
        I've been passionate about computer science for as long as I can remember.
        I always have a side project to work on to try and learn new things, be that a language,
        framework, technology, or other skill.
        </CenteredBody>
      </FullBox>
      <RightBox>
        <Header>My <Highlight>Skills</Highlight></Header>
        <Body>
          As a computer Scientist, I have hands-on experience with a multitude of
          different languages and technologies. Some languages I've spent some time with are:
        </Body>
        <List>
          <li>JavaScript/Typescript/HTML/CSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>Scala</li>
          <li>SQL</li>
        </List>
        <Body>
          While some of the technologies of note that I have worked with are:
        </Body>
        <List>
          <li>React</li>
          <li>Angular</li>
          <li>MySQL/PostgreSQL</li>
          <li>Tensorflow/Keras (Python)</li>
          <li>OpenCV</li>
          <li>NodeJS</li>
        </List>
      </RightBox>
      <LeftBox>
        <Header>My <Highlight>Experience</Highlight></Header>
        <Body>
          I spent my senior year of college interning at IBM in Southbury,
          CT working with frontend technologies on Corporate Applications.
        </Body>
        <Body>
          For my first job out of college in October 2019, I was hired as a software engineer
          at Curalate in Philadelphia, PA. While most of my time was spent as a frontend
          engineer, I had a few opportunities to work in a more full-stack capacity, which
          was very helpful in furthering my expertise in those areas. In September 2020, Curalate
          was acquired by Bazaarvoice, and I was kept onboard as a software engineer there.
        </Body>
      </LeftBox>
      <CenterBox>
        <Header>My <Highlight>Education</Highlight></Header>
        <Body>
          I am a graduate of <Highlight>Marist College</Highlight>, where I earned my bachelor's
          in <Highlight>Computer Science</Highlight> with a concentration in Software Development.
        </Body>
        <Body>
          As part of the Honors Program at Marist, I also got the opportunity to work
          one-on-one with faculty members on some interesting projects. For my Honors Senior Thesis,
          I worked on a project titled "<Highlight>Deployment and Hyperparameter Optimization of Chatbots</Highlight>".
          My work can be found <Link href='https://github.com/MichaelInAction/Senior_Thesis_LSTM_Chatbot' rel='noopener noreferrer' target='_blank'>here</Link>.
          I also got the opportunity to present my findings from this project at the 21st ICAI in late July, 2019.
        </Body>
      </CenterBox>
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
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
`);

const FullBox = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin-top: 25vh;
  margin-bottom: 50px;
  padding: ${ theme.spacings[4] };
  padding-left: 12vw;
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

const CenterBox = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin: 50px 0;
  max-width: 60%;
  padding: ${ theme.spacings[3] };
  background-color: ${ theme.colors.gray };
  border: 1px solid ${ theme.colors.blue };
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
  align-self: flex-start;
`);

const List = styled.ul(({ theme }) => `
  font-size: ${ theme.fontSizes[0] };
  color: ${ theme.colors.main };
  align-self: flex-start;
`);

const Link = styled.a(({ theme }) => `
  &:focus, &:hover, &:visited, &:link, &:active {
    color: ${ theme.colors.blue };
  }
`);

export default About;
