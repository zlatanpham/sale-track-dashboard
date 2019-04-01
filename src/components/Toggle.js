import React from 'react';

export const Toggle = ({ toggled, onToggle }) => (
  <button onClick={onToggle}>{toggled ? 'toggled' : 'untoggled'}</button>
);
