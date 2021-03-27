import React from 'react';
import styled from 'styled-components';

function MobileAbout() {
  return (
    <Container>
      <FullBox>
        <Header>
          About <Highlight>Me</Highlight>
        </Header>
        <Body>
        Hey! I'm a software engineer currently working for <Highlight>Bazaarvoice</Highlight> in Philadelphia, PA.
        I've been passionate about computer science for as long as I can remember.
        I always have a side project to work on to try and learn new things, be that a language,
        framework, technology, or other skill.
        </Body>
      </FullBox>
      <FullBox>
        <Header>My <Highlight>Skills</Highlight></Header>
        <Body>
          As a computer Scientist, I have hands-on experience with a multitude of
          different languages and technologies. Some languages I've spent some time with are:
        </Body>
        <List>
          <li>JavaScript/HTML/CSS</li>
          <li>Python</li>
          <li>Java</li>
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
      </FullBox>
      <FullBox>
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
      </FullBox>
      <FullBox>
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

const List = styled.ul(({ theme }) => `
  font-size: 5vw;
  color: ${ theme.colors.main };
  align-self: flex-start;
`);

const Link = styled.a(({ theme }) => `
  &:focus, &:hover, &:visited, &:link, &:active {
    color: ${ theme.colors.blue };
  }
`);

const Background = styled.div(({ theme }) => `
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${ theme.colors.blue };
  -webkit-clip-path: polygon(50vw 0, 70vw 0, 130vw 100%, 110vw 100%);
  clip-path: polygon(50vw 0, 70vw 0, 130vw 100%, 110vw 100%);
  z-index: -2;
`);

export default MobileAbout;
