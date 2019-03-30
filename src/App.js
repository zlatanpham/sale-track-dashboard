import React, { Component } from 'react';
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
    font-family: 'Inconsolata', monospace;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme.light}>
        <div className="App">
          <GlobalStyles />
          <Sidebar />
          <Body>
            <MainPane />
            <RightPane />
          </Body>
        </div>
      </ThemeProvider>
    );
  }
}

export default (process.env.NODE_ENV === 'development'
  ? hot(module)(App)
  : App);
