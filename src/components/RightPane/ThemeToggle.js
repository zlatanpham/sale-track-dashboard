import React from 'react';
import styled from 'styled-components';
import { Toggle } from '../Toggle';

const Container = styled.div`
  padding: 40px;
`;

export const ThemeToggle = ({ themeToggled, onThemeToggle }) => {
  return (
    <Container>
      <Toggle toggled={themeToggled} onToggle={onThemeToggle} />
    </Container>
  );
};
