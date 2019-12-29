import { BodySection, SectionBody, SectionHeading, ContentContainer } from '../StyledConstants';
import Banner from '../Banner/Banner';
import bg1 from '../images/banner.jpg';
import bg2 from '../images/banner2.png';
import Button from 'react-bootstrap/Button';
import marist from '../images/marist.png';
import React from 'react';
import resume from '../MichaelReadResume.pdf';
import styled from 'styled-components';

function Landing(props) {
  props.setPage('landing');
  const headingContent = (
    <div>
      <UpperHeader>Hello, my name is</UpperHeader>
      <NameHeader>Michael Read</NameHeader>
      <LowerHeader>Welcome!</LowerHeader>
      <br />
      <SocialLink variant="outline-primary" href="https://twitter.com/RealRainbowMike" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></SocialLink>
      <SocialLink variant="outline-primary" href="https://github.com/MichaelInAction" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></SocialLink>
      <SocialLink variant="outline-primary" href="https://www.linkedin.com/in/mread15/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></SocialLink>
      <SocialLink variant="outline-primary" href={resume} download="MichaelReadResume.pdf" target="_blank" rel="noopener noreferrer">Résumé</SocialLink>
    </div>);

  return (
    <ContentContainer id="head" className="content-wrap">
      <Banner content={headingContent} img={bg1} dark='true' top='true' align='right' />
      <BodySection>
        <SectionHeading id="whoami">Who am I?</SectionHeading>
        <div className="vertical-centered">
          <SectionBody>
            I am a software engineer with a B.S. in Computer Science from Marist College. I enjoy nature, movies, games, and music.
            When I'm not at work or working on a project, I can usually be found jamming out with my headphones on or watching through
            the Marvel movies for the 30th time.
          </SectionBody>
          <br className="break" />
        </div>
      </BodySection>

      <hr />

      <BodySection>
        <SectionHeading id="skills">Skills</SectionHeading>
        <SectionBody>
          <h4>Technical</h4>
          <p>As a computer scientist, I have hands on experience with a multitude of
            different languages and technologies. The main languages that I have had experience
            with are:</p>
          <ul>
            <li>Python</li>
            <li>JavaScript/HTML/CSS</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
          <p>I also have done some work with PHP and R.</p>
          <p>Some technologies of note that I have worked with are:</p>
          <ul>
            <li>MySQL/PostgreSQL</li>
            <li>Tensorflow/Keras</li>
            <li>ReactJS</li>
            <li>Angular</li>
            <li>NodeJS</li>
          </ul>
          <p>I have also done a little bit of Android development using Java.</p>
          <br/>
          <br/>
          <h4>Other</h4>
          <p>From my experience working with my software development team at IBM, I
            developed a strong team-based mindset, and strong collaborative skills.
            I also, from my time working with Kappa Kappa Psi, have gained a lot of leadership
            experience. I worked as secretary to update our attendance system from paper
            to an automated spreadsheet system. As president, I gained a lot of experience in
            managing people, delegating tasks, and working through problems.
          </p>
        </SectionBody>
      </BodySection>
      <hr/>
      <BodySection>
        <SectionHeading id="experience">Experience</SectionHeading>
        <SectionBody>
          <p>I spent the summer of 2018, as well as the 2018-2019 academic year,
            interning at IBM in Southbury, CT working on Corporate Applications. I learned a lot of valuable skills from this internship, as well
            as many new technologies that I would not have otherwise come into contact with.
          <br/>
          <br/>
            Outside of academics, I have experience in leadership through Kappa Kappa Psi, an
            honorary band service fraternity. I was elected Secretary of our chapter for the 2017-2018 academic year,
            and I was also elected president of our chapter for the 2018-2019 academic year. This organization
            has given me a lot of good experience in the field of leadership, learning how to effectively
            work in a group setting.</p>
        </SectionBody>
      </BodySection>

      <Banner img={bg2} align='left' />

      <BodySection>
        <SectionHeading id="education">Education</SectionHeading>
        <SectionBody>
          <MaristLogo src={marist} className="inline-image-right" alt="marist" />
          <p>I am a graduate of Marist College, where I earned my bachelor's in
            Computer Science with a concentration in Software Development. I also minored in
            Data Science, Mathematics, and Information Systems.</p>
          <p>As a part of the Honors Program at Marist, I also got the opportunity to work one-on-one with
            faculty members on some interesting projects. The first project was a Java-based C4.5 decision tree
            algorithm, my work for which can be found <a href="https://github.com/MichaelInAction/HonorsByContract-C4.5DecisionTree" target="_blank"  rel="noopener noreferrer">here</a>.</p>
          <p>For my Honors Senior Thesis, I worked with the same faculty
            member on a project titled "Deployment and Hyperparameter Optimization of Chatbots". My work can be found <a href="https://github.com/MichaelInAction/Senior_Thesis_LSTM_Chatbot" target="_blank"  rel="noopener noreferrer">here</a>.
            The work I did on this project was accepted for a presentation at the 21st International Conference on Artificial Intelligence in July-August 2019.</p>
        </SectionBody>
        <br className="break" />
      </BodySection>
    </ContentContainer>
  );
}

const UpperHeader = styled.p`
  ${props => props.theme.fonts.secondary}
  ${props => props.theme.fonts.large}
  margin: -${props => props.theme.spacings.small};
`;

const LowerHeader = styled.p`
  ${props => props.theme.fonts.secondary}
  ${props => props.theme.fonts.large}
`;

const NameHeader = styled.h1`
  ${props => props.theme.fonts.main}
  ${props => props.theme.fonts.huge}
  ${props => props.theme.fonts.heavy}
  color: ${props => props.theme.text.highlight};
  text-shadow: 2px 2px ${props => props.theme.colors.black};
`;

const SocialLink = styled(Button)`
  border-radius: 24px;
  margin-right: ${props => props.theme.spacings.small};
  border-color: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.lightBlue};
  &:hover {
    background: ${props => props.theme.colors.darkBlue};
    border-color: ${props => props.theme.colors.darkBlue};
    color: ${props => props.theme.colors.white};
  }
`;

const MaristLogo = styled.img`
  ${props => props.theme.image.inline}
  ${props => props.theme.image.inlineRight}
  ${props => props.theme.image.medium}
`;

export default Landing;
