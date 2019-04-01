import React from 'react';
import { keyframes } from 'styled-components';

const slide = keyframes`
    from {
        width: 0;
    }
`;

export const ProgressBar = ({ percent }) => (
  <div
    css={`
      height: 4px;
      position: relative;
      background-color: ${props => props.theme.chart.secondary};
    `}
  >
    <div
      css={`
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: ${percent}%;
        animation: ${slide} 0.4s ease;
        background-color: ${props => props.theme.chart.primary};
      `}
    />
  </div>
);
