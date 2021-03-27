import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  img: string;
  githubLink?: string;
  liveLink?: string;
  moreLink?: string;
}

function ProjectCard(props: IProps) {
  return (
    <Container className='card'>
      <HeaderContainer>
        <CategoryContainer>
          <Image src={ props.img } alt='test'/>
          <Category>{ props.category }</Category>
        </CategoryContainer>
        <HeaderHorizontal/>
        <Title>
          { props.title }
        </Title>
        <Subtitle>
          { props.subtitle }
        </Subtitle>
      </HeaderContainer>
      <DescriptionContainer>
        <Description>
          { props.description }
        </Description>
      </DescriptionContainer>
      <Buttons>
        <Button href={ props.githubLink } target='_blank' className={ props.githubLink ? props.liveLink ? '' : 'rightBorder' : 'no' }>Github</Button>
        <Button href={ props.liveLink } target='_blank' className={ props.liveLink ? 'bothBorders' : 'bothBorders no' }>{ props.liveLink ? 'Live' : '' }</Button>
        <ButtonLink to={ 'projects/' + props.moreLink } className={ props.moreLink ? props.liveLink ? '' : 'leftBorder' : 'no' }>More</ButtonLink>
      </Buttons>
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${ theme.colors.gray };
  box-shadow: 5px 5px 5px ${ theme.colors.shadow };
  border-top: 4px solid ${ theme.colors.main };
  width: 300px;
  height: 422px;
  transition: all 100ms ease-in-out;
  :hover {
    transform: scale(1.05);
    border-top: 4px solid ${ theme.colors.blue };
  }
`);

const HeaderContainer = styled.div(({ theme }) => `
  height: 202px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${ theme.spacings[2] };
  box-sizing: border-box;
`)

const CategoryContainer = styled.div(({ theme }) => `
  width: 100%;
  padding: ${ theme.spacings[0] };
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  box-sizing: border-box;
`)

const Image = styled.img(({ theme }) => `
  max-height: ${ theme.spacings[3] };
  padding-right: ${ theme.spacings[2] };
  color: ${ theme.colors.main };
`);

const Category = styled.span(({ theme }) => `
  color: ${ theme.colors.blue };
  font-size: ${ theme.fontSizes[0] };
`);

const HeaderHorizontal = styled.hr(({ theme }) => `
  border-color: ${ theme.colors.main };
  width: 50%;
  text-align: left;
  margin-left: 0;
  margin-bottom: ${ theme.spacings[2] };
`);

const Title = styled.div(({ theme }) => `
  height: 74px;
  color: ${ theme.colors.blue };
  font-size: ${ theme.fontSizes[2] };
  text-align: center;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`);

const Subtitle = styled.div(({ theme }) => `
  height: 30px;
  color: ${ theme.colors.secondary };
  font-size: ${ theme.fontSizes[1] };
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`);

const DescriptionContainer = styled.div(({ theme }) => `
  width: 100%;
  height: 180px;
  max-height: 190px;
  box-sizing: border-box;
  padding: ${ theme.spacings[2] };
  color: ${ theme.colors.main };
  background-color: ${ theme.colors.background };
  font-size: ${ theme.fontSizes[0] };
  text-align: left;
  border-top: 1px solid ${ theme.colors.main };
  border-bottom: 1px solid ${ theme.colors.main };
`);

const Description = styled.span(({ theme }) => `
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`);

const Buttons = styled.div(({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`);

const Button = styled.a(({ theme }) => `
  width: 100px;
  height: 100%;
  box-sizing: border-box;
  padding-top: ${ theme.spacings[1] };
  color: ${ theme.colors.main };
  font-size: ${ theme.fontSizes[0] };
  cursor: pointer;
  text-shadow: 2px 2px 2px ${ theme.colors.shadow };
  border-bottom: 4px solid ${ theme.colors.blue };
  transition: all 100ms ease-in-out;
  text-decoration: none;
  text-align: center;
  :hover {
    color: ${ theme.colors.background };
    border-bottom: 4px solid ${ theme.colors.main };
    background: ${ theme.colors.blue };
  }
  &.no {
    color: ${ theme.colors.gray };
    border-bottom: 0px solid ${ theme.colors.lightBackground };
    text-shadow: none;
    disabled: true;
    pointer-events: none;
  }
  &.bothBorders {
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
`);

const ButtonLink = styled(Link)(({ theme }) => `
  width: 100px;
  height: 100%;
  box-sizing: border-box;
  padding-top: ${ theme.spacings[1] };
  color: ${ theme.colors.main };
  font-size: ${ theme.fontSizes[0] };
  cursor: pointer;
  text-shadow: 2px 2px 2px ${ theme.colors.shadow };
  border-bottom: 4px solid ${ theme.colors.blue };
  transition: all 100ms ease-in-out;
  text-decoration: none;
  text-align: center;
  :hover {
    color: ${ theme.colors.background };
    border-bottom: 4px solid ${ theme.colors.main };
    background: ${ theme.colors.blue };
  }
  &.no {
    visibility: hidden;
  }
`);

export default ProjectCard;
