import React from 'react';
// import { useSpring, config } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

export const Counter = ({ children, fixed = 2 }) => {
  return (
    <Spring from={{ number: 0 }} to={{ number: children }}>
      {props => <span>{props.number.toFixed(fixed)}</span>}
    </Spring>
  );
};
