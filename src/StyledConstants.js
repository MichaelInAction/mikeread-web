import styled from 'styled-components';

export const ContentContainer = styled.div`
  background: ${props => props.theme.colors.black};
  min-height: 100vh;
  color: ${props => props.theme.colors.white};
  ${props => props.theme.fonts.main}
`;
