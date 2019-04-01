import React from 'react';
import styled from 'styled-components';
import { Toggle } from '../Toggle';
import tw from 'tailwind.macro';

const Container = styled.div`
  padding: 40px;
  ${tw`flex items-center justify-end`}
`;

export const ThemeToggle = ({ themeToggled, onThemeToggle }) => (
  <Container>
    <span
      className={
        'mr-2 mb-1 font-semibold text-sm' +
        (themeToggled ? '' : ' opacity-50 line-through')
      }
    >
      Dark mode
    </span>
    <Toggle toggled={themeToggled} onToggle={onThemeToggle} />
  </Container>
);
