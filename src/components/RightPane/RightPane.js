import React from 'react';
import styled from 'styled-components';
import { ThemeToggle } from './ThemeToggle';
import { SaleFunnel } from './SaleFunnel';
import Revenue from './Revenue';
import { Region } from './Region';

const Container = styled.div`
  border-left: 1px solid ${props => props.theme.main.border};
  width: 480px;
  flex: 480px 0 0;
`;

export const RightPane = ({ themeToggled, onThemeToggle }) => {
  return (
    <Container>
      <ThemeToggle themeToggled={themeToggled} onThemeToggle={onThemeToggle} />
      <SaleFunnel />
      <Revenue />
      <Region
        css={`
          border-top: 1px solid ${props => props.theme.main.border};
          padding-top: 50px;
          margin-top: 20px;
        `}
      />
    </Container>
  );
};
