import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Footer>
      <div>
        <p className=""><b>Like what you see?</b> <br /><br /> Check out my work on GitHub, or see what I've got going on on my LinkedIn! If you'd like to talk, feel free to send me an email!</p>
        <Icon>
          <IconLink href="https://github.com/MichaelInAction" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconLink>
        </Icon>
        <Icon>
          <IconLink href="https://www.linkedin.com/in/mread15/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </IconLink>
        </Icon>
        <Icon>
          <IconLink href="mailto:michael.read.75@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdMailOutline />
          </IconLink>
        </Icon>
      </div>
    </Footer>
  );
}

const Footer = styled.footer`
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  ${props => props.theme.footer}
  ${props => props.theme.fonts.secondary}
  padding-left: ${props => props.theme.spacings.margin};
  padding-right: ${props => props.theme.spacings.margin};
`;

const Icon = styled.span`
  ${props => props.theme.fonts.large}
  margin-right: ${props => props.theme.spacings.medium};
  color: ${props => props.theme.colors.lightBlue} !important;
`;

const IconLink = styled.a`
  &:link {
  color: ${props => props.theme.colors.lightBlue};
  }
  &:visited {
  color: ${props => props.theme.colors.lightBlue};
  }
  &:hover {
  color: ${props => props.theme.colors.darkBlue};
  }
  &:active {
  color: ${props => props.theme.colors.purple};
  }
`;

export default Header;
