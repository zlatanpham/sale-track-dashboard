import React from 'react';

const initContext = {
  activeInventory: null,
  setActiveInventory: inventory => {},
};
export const AppContext = React.createContext(initContext);
