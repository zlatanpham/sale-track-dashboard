import React from 'react';
import { useSpring, animated } from 'react-spring';

export const Counter = ({ children, fixed = 2 }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: parseFloat(children) },
  });
  return (
    <animated.span>{number.interpolate(x => x.toFixed(fixed))}</animated.span>
  );
};
