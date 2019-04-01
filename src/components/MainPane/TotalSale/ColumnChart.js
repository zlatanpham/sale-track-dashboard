import React from 'react';
import { withTheme } from 'styled-components';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'jan',
    current: 4000,
    previous: 2400,
  },
  {
    name: 'feb',
    current: 3000,
    previous: 1398,
  },
  {
    name: 'mar',
    current: 9800,
    previous: 2000,
  },
  {
    name: 'apr',
    current: 2780,
    previous: 3908,
  },
  {
    name: 'may',
    current: 1890,
    previous: 4800,
  },
  {
    name: 'jun',
    current: 2390,
    previous: 3800,
  },
  {
    name: 'jul',
    current: 2390,
    previous: 3800,
  },
  {
    name: 'aug',
    current: 3490,
    previous: 4300,
  },
  {
    name: 'sep',
    current: 3490,
    previous: 4300,
  },
  {
    name: 'oct',
    current: 3490,
    previous: 4300,
  },
  {
    name: 'nov',
    current: 5300,
    previous: 3200,
  },
  {
    name: 'dec',
    current: 6400,
    previous: 2490,
  },
];

const columnChart = ({ theme }) => (
  <div
    css={`
      height: 280px;
      margin-top: 50px;
    `}
  >
    <ResponsiveContainer>
      <BarChart
        height={300}
        barSize={10}
        barGap={3}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid
          stroke={theme.chart.secondary}
          strokeDasharray="3 3"
          horizontal
          vertical={false}
        />
        <XAxis
          dataKey="name"
          axisLine={true}
          tickLine={false}
          tickMargin={15}
        />
        <Bar dataKey="current" fill={theme.chart.primary} />
        <Bar dataKey="previous" fill={theme.chart.secondary} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const ColumnChart = withTheme(columnChart);

export default ColumnChart;
