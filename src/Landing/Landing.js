import bg1 from '../images/banner.jpg';
import bg2 from '../images/banner2.png';
import Button from 'react-bootstrap/Button';
import { ContentContainer } from '../StyledConstants';
import marist from '../images/marist.png';
import React from 'react';
import resume from '../MichaelReadResume.pdf';
import styled from 'styled-components';

function Landing(props) {
  props.setPage('landing');

  return (
    <ContentContainer id="head" className="content-wrap">
      <AccentBar/>
      <MainHeading>Michael Read</MainHeading>
    </ContentContainer>
  );
}

const MainHeading = styled.div`
  font-size: ${ props => props.theme.sizes.font[8] };
  position: absolute;
  left: 48%;
  top: 40%;
`;

const AccentBar = styled.div`
  background: ${ props => props.theme.colors.blue };
  height: 100vh;
  -webkit-clip-path: polygon(25% 0, 60% 0, 95% 100%, 60% 100%);
  clip-path: polygon(25% 0, 60% 0, 95% 100%, 60% 100%);
`;

export default Landing;
