import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';
import Python from '../../images/Python.png';
import SeniorThesis from './SeniorThesis';

const projects = [
  { title: 'Undergrad Senior Thesis', description: 'Deployment and Hyper-Parameter Optimization of Chatbots', img: Python, githubLink: 'https://github.com/MichaelInAction/Senior_Thesis_LSTM_Chatbot', liveLink: '', moreLink: 'senior-thesis', },
];

function Projects() {
  return (
    <Switch>
      <Route exact path='/projects'>
        <Container>
          <FullBox>
            <Header>Projects</Header>
          </FullBox>
          <CardContainer>
            {projects.map(({title, description, img, githubLink, liveLink, moreLink}) => (
              <ProjectCard
                key={ title }
                title={ title }
                description={ description }
                img={ img }
                githubLink={ githubLink }
                liveLink={ liveLink }
                moreLink={ moreLink }
              />
            ))}
          </CardContainer>
        </Container>
      </Route>
      <Route path='/projects/senior-thesis'>
        <SeniorThesis/>
      </Route>
    </Switch>
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
  margin-top: 100px;
  margin-bottom: 50px;
  padding: ${ theme.spacings[3] };
  background-color: ${ theme.colors.gray };
  border-top: 1px solid ${ theme.colors.blue };
  border-bottom: 1px solid ${ theme.colors.blue };
  z-index: 1;
  box-shadow: 5px 5px 5px ${ theme.colors.shadow };
`);

const Header = styled.div(({ theme }) => `
  font-size: ${ theme.fontSizes[4] };
  color: ${ theme.colors.blue };
`);

const CardContainer = styled.div(({ theme }) => `
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: auto;
  grid-gap: ${ theme.spacings[3] };
  align-items: stretch;
  margin: ${ theme.spacings[3] } ${ theme.spacings[5] };
  @media only screen and (max-width: 760px) {
    margin: 0, ${ theme.spacings[3] };
    align-self: center;
  }
`);

export default Projects;
