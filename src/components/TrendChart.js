import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { withTheme } from 'styled-components';

const trendChart = ({ data, isGrow = false, theme }) => {
  const transformedData = data.map(sale => ({
    sale,
  }));
  const color = isGrow ? theme.chart.primary : theme.main.danger;
  return (
    <div
      css={`
        width: 100%;
        height: 100px;
        margin-top: 20px;
      `}
    >
      <ResponsiveContainer>
        <AreaChart width={730} height={250} data={transformedData}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor={color} stopOpacity={0.1} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="linear"
            dataKey="sale"
            stroke={color}
            fillOpacity={1}
            strokeWidth={3}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const TrendChart = withTheme(trendChart);
