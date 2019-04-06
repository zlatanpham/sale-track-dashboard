import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '@/styled/theme';
import Sidebar from '@/components/Sidebar';
import Body from './components/Body';
import { MainPane } from './components/MainPane';
import { RightPane } from './components/RightPane';
import { InventoryPane } from './components/InventoryPane';
import { AppContext } from './context';

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${props => props.theme.main.background};
    color: ${props => props.theme.main.foreground};
    font-family: 'Inconsolata', monospace;
    overflow-x:hidden;
  }
`;

const App = () => {
  const [themeToggled, toggleTheme] = useState(
    localStorage.getItem('darkTheme') === 'true',
  );
  const [activeInventory, setActiveInventory] = useState(null);
  const [showInventoryPane, setShowInventoryPane] = useState(false);
  return (
    <AppContext.Provider
      value={{
        activeInventory,
        setActiveInventory,
        showInventoryPane,
        setShowInventoryPane,
      }}
    >
      <ThemeProvider theme={themeToggled ? theme.dark : theme.light}>
        <div className="app">
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
            <InventoryPane />
          </Body>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default (process.env.NODE_ENV === 'development'
  ? hot(module)(App)
  : App);
