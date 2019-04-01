import React from 'react';
import { Container } from './shared/Container';
import { ProgressBar } from '@/components/ProgressBar';
import { Counter } from '../Counter';

const data = [
  { name: 'Direct', revenue: 67800, percent: 45.8, progress: 70 },
  { name: 'Search', revenue: 320000, percent: 29.3, progress: 60 },
  { name: 'Refferal', revenue: 12000, percent: 12.3, progress: 52 },
];

const Item = ({ name, revenue, percent, progress }) => (
  <div
    css={`
      + * {
        margin-top: 20px;
      }
    `}
  >
    <div className="flex justify-between font-semibold tracking-wide mb-2">
      <span className="w-2/5">{name}</span>
      <span className="w-2/5">${revenue.toLocaleString('currency')}</span>
      <span className="w-1/5 text-right">
        <Counter>{percent}</Counter>%
      </span>
    </div>
    <ProgressBar percent={progress} />
  </div>
);

const Revenue = () => {
  return (
    <Container title="Revenue by Channel">
      {data.map((item, index) => (
        <Item {...item} key={index} />
      ))}
    </Container>
  );
};

export default Revenue;
