import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

export const TrendChart = ({ data }) => {
  const transformedData = data.map(sale => ({
    sale,
  }));
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
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="linear"
            dataKey="sale"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
