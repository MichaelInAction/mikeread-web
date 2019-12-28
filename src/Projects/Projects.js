import { BodySection, SectionBody, SectionHeading, ContentContainer } from '../StyledConstants';
import carousel1 from '../images/ICAI1.jpg';
import carousel2 from '../images/ICAI2.jpg';
import carousel3 from '../images/ICAI3.jpg';
import MyCarousel from '../MyCarousel/MyCarousel';
import React from 'react';
import styled from 'styled-components';

function Projects() {
  return (
    <ContentContainer>
      <BodySection>
        <SectionHeading className="centered-title" id="Chatbot-Deployment">Deployment and Hyper-Parameter Optimization of Chatbots</SectionHeading>
        <SectionBody>
          <p>
            In my senior year at Marist College, I got the opportunity to work with Pablo Rivas, a faculty member at Marist, on this project. If you are interested, here is the abstract:
          </p>
          <BlockQuote><i>Chatbots are a specific application of a set of machine learning algorithms belonging to the family of natural language processing (NLP). Recently, NLP algorithms have gained attention as we are closer to passing the Turing test
              when they are applied to human-computer interaction-based systems. In this thesis project we will model chatbots using NLP-based machine learning algorithms based on datasets of people. Based on sentences and text from a specific person, we
              measure how well the chatbot models such person's writing. In theory, NLP algorithms of the Long Short Term Memory (LSTM) type are capable of remembering, summarizing, and learning patterns of speech, style, and forms of any sequences of
              text. Results indicate that an LSTMs is capable of generating novel sentences using as a case study Donald Trump's tweets.</i></BlockQuote>
          <p>
            If you would like to read more about this project, the full text can be found <a href="https://csce.ucmss.com/cr/books/2019/LFS/CSREA2019/ICA2677.pdf" target="_blank" rel="noopener noreferrer">here</a>
          </p>

          <p>
            My project, as well as a few other student projects from Marist, were accepted for presentations at the ICAI'19 in Las Vegas in late July, 2019. Here are a few photos from the event.
          </p>
        </SectionBody>
        <MyCarousel slides={[
          {image: carousel1, label: 'Presenting'},
          {image: carousel2, label: 'At the event'},
          {image: carousel3, label: 'With the Marist group'}]
        } />
      </BodySection>
    </ContentContainer>
  );
}

const BlockQuote = styled.blockquote`
  ${props => props.theme.spacings.quote}
`;

export default Projects;
