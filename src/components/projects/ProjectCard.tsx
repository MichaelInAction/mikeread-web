import React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  description: string;
  img: string;
}

function ProjectCard(props: IProps) {
  return (
    <Container>
      { props.title }
    </Container>
  );
}

const Container = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  background: ${ theme.colors.gray };

`);

export default ProjectCard;
