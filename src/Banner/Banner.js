import React from 'react';
import styled from 'styled-components';

function Banner(props) {
  return (
    <BannerDiv>
      <BannerImage dark={props.dark} src={props.img} alt=''/>
      <CenteredDiv>
        {props.content}
      </CenteredDiv>
    </BannerDiv>
  );
}

const BannerDiv = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  color: ${props => props.theme.colors.white};
  overflow: hidden;
`;

const BannerImage = styled.img`
  ${props => props.theme.sizes.full}
  ${props => props.theme.banner}
  ${props => props.dark && 'filter: grayscale(1) brightness(0.40);'}
`;

const CenteredDiv = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Banner;
