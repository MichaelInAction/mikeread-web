import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';
import Python from '../../images/Python.svg';
import SeniorThesis from './SeniorThesis';

const projects = [
  {
    title: 'Deployment and Hyper-Parameter Optimization of Chatbots',
    subtitle: 'Undergrad Senior Thesis',
    description: `Chatbots are a specific application of a set of machine learning algorithms
      belonging to the family of natural language processing (NLP). Recently, NLP algorithms have
      gained attention as we are closer to passing the Turing test when they are applied to
      human-computer interaction-based systems. In this thesis project we will model chatbots using
      NLP-based machine learning algorithms based on datasets of people. Based on sentences and text
      from a specific person, we measure how well the chatbot models such person's writing. In theory,
      NLP algorithms of the Long Short Term Memory (LSTM) type are capable of remembering, summarizing,
      and learning patterns of speech, style, and forms of any sequences of text. Results indicate
      that an LSTMs is capable of generating novel sentences using as a case study Donald Trump's tweets.`,
    category: 'Python',
    img: Python,
    githubLink: 'https://github.com/MichaelInAction/Senior_Thesis_LSTM_Chatbot',
    liveLink: '',
    moreLink: 'senior-thesis',
  }
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
            {projects.map(({title, subtitle, description, category, img, githubLink, liveLink, moreLink}) => (
              <ProjectCard
                key={ title }
                title={ title }
                subtitle={ subtitle }
                description={ description }
                category={ category }
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
