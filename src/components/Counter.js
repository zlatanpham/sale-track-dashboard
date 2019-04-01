import React from 'react';
import { Spring, config } from 'react-spring/renderprops';

export const Counter = ({ children, fixed = 2 }) => {
  return (
    <Spring from={{ number: 0 }} to={{ number: children }} config={config.slow}>
      {props => <span>{props.number.toFixed(fixed)}</span>}
    </Spring>
  );
};
