import React, { useRef } from 'react';
import { useSpring, animated, config, useChain } from 'react-spring';
import { withTheme } from 'styled-components';

const loadingBackground = ({ theme }) => {
  const bgRef = useRef();
  const { x } = useSpring({
    ref: bgRef,
    from: { x: 0 },
    to: { x: 100 },
    duration: 2000,
    config: config.slow,
  });

  const percentRef = useRef();
  const { y } = useSpring({
    ref: percentRef,
    from: { y: 0 },
    to: { y: 100 },
    config: config.slow,
  });

  const outRef = useRef();
  const { z } = useSpring({
    ref: outRef,
    from: { z: 0 },
    to: { z: 100 },
    config: config.slow,
  });

  useChain([bgRef, percentRef, outRef], [0, 0.7, 1.2]);

  return (
    <animated.div
      style={{
        opacity: z.interpolate(z => (100 - z).toFixed(2) / 100),
        pointerEvents: 'none',
      }}
    >
      <animated.div
        style={{
          backgroundColor: theme.main.secondaryBackground,
          position: 'absolute',
          zIndex: 999,
          top: 0,
          bottom: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          letterSpacing: '1px',
          opacity: x.interpolate(x => (x / 100).toFixed(2)),
          width: x.interpolate(x => `${x}%`),
        }}
      >
        <animated.div>{y.interpolate(y => `${y.toFixed(0)}%`)}</animated.div>
      </animated.div>
    </animated.div>
  );
};

const LoadingBackground = withTheme(loadingBackground);
export default LoadingBackground;
