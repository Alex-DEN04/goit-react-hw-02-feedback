import styled from '@emotion/styled';

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[4]}px; ;
`;
