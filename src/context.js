import React from 'react';

const initContext = {
  loaded: false,
  setLoaded: () => {},
  activeInventory: null,
  showInventoryPane: false,
  setShowInventoryPane: show => {},
  setActiveInventory: inventory => {},
};
export const AppContext = React.createContext(initContext);
