import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
  title: string;
  description: string;
  img: string;
  githubLink?: string;
  liveLink?: string;
  moreLink?: string;
}

function ProjectCard(props: IProps) {
  return (
    <Container className='card'>
      <Image src={ props.img } alt='test'/>
      <Horizontal/>
      <Title>
        { props.title }
      </Title>
      <Horizontal/>
      <Description>
        { props.description }
      </Description>
      <Buttons>
        <Button href={ props.githubLink } target='_blank' className={ props.githubLink ? '' : 'no' }>Github</Button>
        <Button href={ props.liveLink } target='_blank' className={ props.liveLink ? '' : 'no' }>Live</Button>
        <ButtonLink to={ 'projects/' + props.moreLink } className={ props.moreLink ? '' : 'no' }>More</ButtonLink>
      </Buttons>
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${ theme.colors.gray };
  border-radius: 10px;
  box-shadow: 5px 5px 5px ${ theme.colors.shadow };
  width: 280px;
  padding: ${ theme.spacings[1] };
  transition: all 40ms ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`);

const Image = styled.img(({ theme }) => `
  max-height: 120px;
  padding: ${ theme.spacings[3] };
`);

const Horizontal = styled.hr(({ theme }) => `
  border-color: ${ theme.colors.blue };
  width: 75%;
`);

const Title = styled.div(({ theme }) => `
  color: ${ theme.colors.main };
  font-size: ${ theme.fontSizes[3] };
  text-align: center;
`);

const Description = styled.p(({ theme }) => `
  padding: 0 ${ theme.spacings[2] };
  color: ${ theme.colors.main };
  font-size: ${ theme.fontSizes[0] };
  text-align: center;
`);

const Buttons = styled.div(({ theme }) => `
  padding: ${ theme.spacings[1] };
  width: 100%;
  display: flex;
  justify-content: space-around;
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

const ButtonLink = styled(Link)(({ theme }) => `
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

export default ProjectCard;
