import React from 'react';
import { Container } from './shared/Container';
import SvgMap from '../svg/Map';

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

export const Region = props => {
  return (
    <Container title="Revenue by region" {...props}>
      <div className="relative">
        <SvgMap
          css={`
            color: ${props => props.theme.map.background};
          `}
        />
        {items.map(({ top, left, percent }, index) => {
          const size = 10 + (percent * 80) / 100;
          return (
            <div
              key={index}
              css={`
                position: absolute;
                border-radius: 100%;
                width: ${size}px;
                display: flex;
                align-items: center;
                height: ${size}px;
                justify-content: center;
                font-weight: bold;
                font-size: 14px;
                ${props => `
                  background-color: ${props.theme.map.markBackground};
                  color: ${props.theme.map.markForeground};
                `}
              `}
              style={{ top: `${top}%`, left: `${left}%` }}
            >
              {percent}
            </div>
          );
        })}
      </div>
    </Container>
  );
};
