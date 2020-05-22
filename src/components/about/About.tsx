import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <Container>
      <FullBox>
        <Header>
          <Highlight>Who is</Highlight> Michael Read?
        </Header>
        <CenteredBody>
        Hey! I'm a software engineer currently working for <Highlight>Curalate</Highlight> in Philadelphia, PA.
        I've been passionate about computer science for as long as I can remember.
        I always have a side project to work on to try and learn new things, be that a language,
        framework, technology, or other skill.
        </CenteredBody>
      </FullBox>
      <RightBox>
        <Header><Highlight>My</Highlight> Skills</Header>
        <Body>
          As a computer Scientist, I have hands-on experience with a multitude of
          different languages and technologies. Some languages I've spent some time with are:
          <ul>
            <li>JavaScript/HTML/CSS</li>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
          While some of the technologies of note that I have worked with are:
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>MySQL/PostgreSQL</li>
            <li>Tensorflow/Keras (Python)</li>
            <li>OpenCV</li>
            <li>NodeJS</li>
          </ul>
        </Body>
      </RightBox>
      <LeftBox>
        <Header><Highlight>My</Highlight> Experience</Header>
        <Body>
          I spent my senior year of college interning at IBM in Southbury,
          CT working with frontend technologies on Corporate Applications.
        </Body>
        <Body>
          For my first job out of college, I am working as a software engineer
          at Curalate in Philadelphia, PA. While most of my time is spent as a frontend
          engineer, I do have full stack experience and hope to continue to develop both
          my frontend and backend expertise.
        </Body>
      </LeftBox>
      <CenterBox>
        <Header><Highlight>My</Highlight> Education</Header>
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

const FullBox = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin-top: 35vh;
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

const CenterBox = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
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

const Link = styled.a(({ theme }) => `
  &:focus, &:hover, &:visited, &:link, &:active {
    color: ${ theme.colors.blue };
  }
`);

export default About;
