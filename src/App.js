import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '@/styled/theme';
import Sidebar from '@/components/Sidebar';
import Body from './components/Body';
import { MainPane } from './components/MainPane';
import { RightPane } from './components/RightPane';

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${props => props.theme.main.background};
    color: ${props => props.theme.main.foreground};
    font-family: 'Inconsolata', monospace;
  }
`;

const App = () => {
  const [themeToggled, toggleTheme] = useState(
    localStorage.getItem('darkTheme'),
  );
  return (
    <ThemeProvider theme={themeToggled ? theme.dark : theme.light}>
      <div className="App">
        <GlobalStyles />
        <Sidebar />
        <Body>
          <MainPane />
          <RightPane
            themeToggled={themeToggled}
            onThemeToggle={() => {
              localStorage.setItem('darkTheme', !themeToggled);
              toggleTheme(!themeToggled);
            }}
          />
        </Body>
      </div>
    </ThemeProvider>
  );
};

export default (process.env.NODE_ENV === 'development'
  ? hot(module)(App)
  : App);
