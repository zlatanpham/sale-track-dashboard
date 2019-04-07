import React from 'react';
import { useSpring, animated, config } from 'react-spring';

export const ProgressBar = ({ percent }) => {
  const { width } = useSpring({
    from: { width: 0 },
    to: { width: percent },
    config: config.slow,
    delay: 250,
  });
  return (
    <div
      css={`
        height: 4px;
        position: relative;
        background-color: ${props => props.theme.chart.secondary};
        > div {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          background-color: ${props => props.theme.chart.primary};
        }
      `}
    >
      <animated.div style={{ width: width.interpolate(x => `${x}%`) }} />
    </div>
  );
};
