import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

import img1 from '../../images/ICAI1.jpg';
import img2 from '../../images/ICAI2.jpg';
import img3 from '../../images/ICAI3.jpg';

function SeniorThesis() {
  return (
    <Container>
      <FullBox>
        <ButtonLink to='/projects'>&lt; Back</ButtonLink>
        <Header>Deployment and Hyper-Parameter Optimization of Chatbots</Header>
        <Spacer/>
      </FullBox>
      <ButtonContainer>
        <Button href='https://github.com/MichaelInAction/Senior_Thesis_LSTM_Chatbot' rel='noopener noreferrer' target='_blank'>Github</Button>
      </ButtonContainer>
      <Body>
        In my senior year at Marist College, I got the opportunity to work with Pablo Rivas,
        a faculty member at Marist, on this project. If you are interested, here is the abstract:
      </Body>
      <Quote>
        Chatbots are a specific application of a set of machine learning algorithms belonging to the family
        of natural language processing (NLP). Recently, NLP algorithms have gained attention as we are closer
        to passing the Turing test when they are applied to human-computer interaction-based systems.
        In this thesis project we will model chatbots using NLP-based machine learning algorithms based on
        datasets of people. Based on sentences and text from a specific person, we measure how well the chatbot
        models such person's writing. In theory, NLP algorithms of the Long Short Term Memory (LSTM) type are
        capable of remembering, summarizing, and learning patterns of speech, style, and forms of any sequences of text.
        Results indicate that an LSTMs is capable of generating novel sentences using as a case study Donald Trump's tweets.
      </Quote>
      <Body>
        If you would like to read more about this project, the full text can be
        found <OutLink href='https://csce.ucmss.com/cr/books/2019/LFS/CSREA2019/ICA2677.pdf' rel='noopener noreferrer' target='_blank'>here</OutLink>
      </Body>
      <Body>
        My project, as well as a few other student projects from Marist, were accepted for presentations at the ICAI'19
        in Las Vegas in late July, 2019. Here are a few photos from the event.
      </Body>
      <Carousel>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={3}
          visibleSlides={1}
          infinite
          lockOnWindowScroll
          isPlaying
          dragEnabled={ false }
          touchEnabled={ false }
        > 
          <CarouselContainer>
            <CarouselSlider>
              <Slide index={0}>
                <CarouselSlide>
                  <Image alt='test' src={ img1 }/>
                  <Caption>Presenting</Caption>
                </CarouselSlide>
              </Slide>
              <Slide index={1}>
                <CarouselSlide>
                  <Image alt='test' src={ img2 }/>
                  <Caption>At the event</Caption>
                </CarouselSlide>
              </Slide>
              <Slide index={2}>
                <CarouselSlide>
                  <Image alt='test' src={ img3 }/>
                  <Caption>With the Marist group</Caption>
                </CarouselSlide>
              </Slide>
            </CarouselSlider>
            <Back>&lt;</Back>
            <Next>&gt;</Next>
          </CarouselContainer>
        </CarouselProvider>
      </Carousel>
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
  justify-content: space-between;
  align-items: center;
  height: auto;
  margin-top: 100px;
  margin-bottom: ${ theme.spacings[2] };
  padding: ${ theme.spacings[3] };
  background-color: ${ theme.colors.gray };
  border-top: 1px solid ${ theme.colors.blue };
  border-bottom: 1px solid ${ theme.colors.blue };
  z-index: 1;
  box-shadow: 5px 5px 5px ${ theme.colors.shadow };
  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
`);

const ButtonContainer = styled.div(({ theme }) => `
  display: flex;
  padding: ${ theme.spacings[2] };
  justify-content: space-between;
  align-items: space-between;
  align-self: center;
`);

const ButtonLink = styled(Link)(({ theme }) => `
  background-color: ${ theme.colors.blue };
  border: 3px solid ${ theme.colors.blue };
  color: ${ theme.colors.main };
  padding: ${ theme.spacings[0] } ${ theme.spacings[2] };
  margin: 0 ${ theme.spacings[2] };
  min-width: 44px !important;
  font-size: ${ theme.fontSizes[0] };
  cursor: pointer;
  border-radius: 200px;
  text-shadow: 2px 2px 2px ${ theme.colors.shadow };
  transition: all 100ms ease-in-out;
  text-decoration: none;
  :hover {
    color: ${ theme.colors.blue };
    background-color: ${ theme.colors.main };
    border: 3px solid ${ theme.colors.main };
  }
  @media only screen and (max-width: 760px) {
    margin-bottom: ${ theme.spacings[2] };
  }
`);

const Button = styled.a(({ theme }) => `
  background-color: ${ theme.colors.blue };
  border: 3px solid ${ theme.colors.blue };
  color: ${ theme.colors.main };
  padding: ${ theme.spacings[0] } ${ theme.spacings[2] };
  font-size: ${ theme.fontSizes[0] };
  cursor: pointer;
  border-radius: 200px;
  text-shadow: 2px 2px 2px ${ theme.colors.shadow };
  transition: all 100ms ease-in-out;
  text-decoration: none;
  :hover {
    color: ${ theme.colors.blue };
    background-color: ${ theme.colors.main };
    border: 3px solid ${ theme.colors.main };
  }
  &.no {
    visibility: hidden;
  }
`);

const Header = styled.div(({ theme }) => `
  font-size: ${ theme.fontSizes[4] };
  color: ${ theme.colors.blue };
  width: auto;
  text-align: center;
`);

const Spacer = styled.div(({ theme }) => `
  visibility: hidden;
  width: 100px;
`);

const Body = styled.p(({ theme }) => `
  color: ${ theme.colors.main };
  font-size: ${ theme.fontSizes[0] };
  padding: ${ theme.spacings[1] } ${ theme.spacings[5] };
`);

const Quote = styled.blockquote(({ theme }) => `
  color: ${ theme.colors.main };
  font-size: ${ theme.fontSizes[0] };
  padding: 0 ${ theme.spacings[5] };
`);

const OutLink = styled.a(({ theme }) => `
  &:focus, &:hover, &:visited, &:link, &:active {
    color: ${ theme.colors.blue };
  }
`);

const Carousel = styled.div(({ theme }) => `
  padding-bottom: ${ theme.spacings[3] };
`);

const CarouselContainer = styled.div(({ theme }) => `
  height: 300px;
  width: 80vw;
  position: relative;
  margin: auto;
  background-color: ${ theme.colors.gray };
  & {
    height: 500px;
    width: 80vw;
  }
`);

const CarouselSlider = styled(Slider)`
  height: 500px;
  width: 80vw;
`;

const CarouselSlide = styled.div(({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 500px;
  width: 80vw;
`);

const Caption = styled.p(({ theme }) => `
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${ theme.fontSizes[0] };
  color: ${ theme.colors.main };
`);

const Image = styled.img`
  max-height: 500px;
  max-width: 80vw;
  margin: auto;
`;

const Back = styled(ButtonBack)(({ theme }) => `
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0);
  border: 0px solid ${ theme.colors.blue };
  color: ${ theme.colors.blue };
  padding: ${ theme.spacings[1] } ${ theme.spacings[2] };
  font-size: ${ theme.fontSizes[0] };
  cursor: pointer;
  border-radius: 200px;
  :hover {
    color: ${ theme.colors.main }
    border: 0px solid ${ theme.colors.main };
  }
`);

const Next = styled(ButtonNext)(({ theme }) => `
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0);
  border: 0px solid ${ theme.colors.blue };
  color: ${ theme.colors.blue };
  padding: ${ theme.spacings[1] } ${ theme.spacings[2] };
  font-size: ${ theme.fontSizes[0] };
  cursor: pointer;
  border-radius: 200px;
  :hover {
    color: ${ theme.colors.main };
    border: 0px solid ${ theme.colors.main };
  }
`);


export default SeniorThesis;
