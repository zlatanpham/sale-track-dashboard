import React from 'react';
import { Container } from './shared/Container';
import SvgMap from '../svg/Map';
import { useTrail, animated } from 'react-spring';

const items = [
  {
    top: 49,
    left: 70,
    percent: 30,
  },
  {
    top: 20,
    left: 49,
    percent: 20,
  },
  {
    top: 29,
    left: 19,
    percent: 50,
  },
];

const config = { mass: 5, tension: 2000, friction: 200 };

export const Region = props => {
  const trail = useTrail(
    items.length,
    {
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    },
    config,
  );
  return (
    <Container title="Revenue by region" {...props}>
      <div className="relative">
        <SvgMap
          css={`
            color: ${props => props.theme.map.background};
          `}
        />
        {trail.map(({ x }, index) => {
          const { percent, top, left } = items[index];
          const size = 10 + (percent * 80) / 100;
          return (
            <div
              key={index}
              left={left}
              top={top}
              css={`
                > div {
                  position: absolute;
                  border-radius: 100%;
                  display: flex;
                  align-items: center;
                  width: ${size}px;
                  height: ${size}px;
                  justify-content: center;
                  font-weight: bold;
                  font-size: 13px;
                  ${props => `
                  background-color: ${props.theme.map.markBackground};
                  color: ${props.theme.map.markForeground};
                  top: ${props.top}%;
                  left: ${props.left}%;
                `}
                }
              `}
            >
              <animated.div
                key={index}
                style={{ transform: x.interpolate(x => `scale(${x / 100})`) }}
              >
                {x.interpolate(x => `${((x * size) / 100).toFixed(0)}%`)}
              </animated.div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
