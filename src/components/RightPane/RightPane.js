import React from 'react';
import styled from 'styled-components';
import { ThemeToggle } from './ThemeToggle';
import { SaleFunnel } from './SaleFunnel';
import Revenue from './Revenue';

const Container = styled.div`
  border-left: 1px solid ${props => props.theme.main.border};
  width: 450px;
  flex: 450px 0 0;
`;

export const RightPane = ({ themeToggled, onThemeToggle }) => {
  return (
    <Container>
      <ThemeToggle themeToggled={themeToggled} onThemeToggle={onThemeToggle} />
      <SaleFunnel />
      <Revenue />
    </Container>
  );
};
