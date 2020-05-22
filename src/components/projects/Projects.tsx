import React from 'react';
import styled from 'styled-components';

function Projects() {
  return (
    <Container>
      <FullBox>
        <Header>Projects</Header>
      </FullBox>
      <CardContainer>
      </CardContainer>
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
  flex-direction: column;
  align-items: center;
  height: auto;
  margin-top: 100px;
  margin-bottom: 50px;
  padding: ${ theme.spacings[1] };
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
  grid-gap: 1rem;
  align-items: stretch;
`);

export default Projects;
