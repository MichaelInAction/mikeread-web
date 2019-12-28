import styled from 'styled-components';

export const BodySection = styled.div`
  padding-top: ${props => props.theme.spacings.medium};
  padding-bottom: ${props => props.theme.spacings.medium};
  margin-left: ${props => props.theme.spacings.margin};
  margin-right: ${props => props.theme.spacings.margin};
`;

export const ContentContainer = styled.div`
  background: ${props => props.theme.colors.white};
`;

export const SectionHeading = styled.h1`
  ${props => props.theme.fonts.heavy}
  ${props => props.theme.fonts.large}
`;

export const SectionBody = styled.div`
  ${props => props.theme.fonts.secondary}
`;
