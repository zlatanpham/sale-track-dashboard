import React from 'react';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';

export const Toggle = ({ toggled, onToggle }) => (
  <button
    onClick={onToggle}
    css={`
      color: ${props => props.theme.main.foreground};
      font-size: 22px;
      line-height: 1em;
    `}
  >
    {toggled ? <FaToggleOn /> : <FaToggleOff />}
  </button>
);
