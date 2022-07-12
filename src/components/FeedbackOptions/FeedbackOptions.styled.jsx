import styled from '@emotion/styled';

export const Button = styled.button`
    display: inline-flex;
  align-items: center;
  justify-content: start;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.backgroundFirst};
  border-color: transparent;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  border-radius: ${p => p.theme.radii.normal};
  margin-right: ${p => p.theme.space[4]}px;
  cursor: pointer; 
  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;