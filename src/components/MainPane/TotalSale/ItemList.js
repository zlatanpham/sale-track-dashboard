import React from 'react';
import styled, { withTheme } from 'styled-components';
import tw from 'tailwind.macro';
import { MdArrowUpward } from 'react-icons/md';

import { BarChart, Bar } from 'recharts';

const StackChart = withTheme(({ theme, data }) => (
  <BarChart width={110} height={60} barSize={4} data={data}>
    <Bar dataKey="current" stackId="a" fill={theme.chart.primary} />
    <Bar dataKey="previous" stackId="a" fill={theme.chart.tertiary} />
  </BarChart>
));

const items = [
  {
    name: 'Classic white denim skirt',
    inventory: 293,
    price: 134.99,
    sale: 133,
    trend: Array.from({ length: 7 }, () => {
      const number = Math.random() * 80 + 10;
      return { previous: 100 - number, current: number };
    }),
  },
  {
    name: 'Open cabel-knit sweater',
    inventory: 478,
    price: 234.34,
    sale: 85,
    trend: Array.from({ length: 7 }, () => {
      const number = Math.random() * 80 + 10;
      return { previous: 100 - number, current: number };
    }),
  },
  {
    name: 'Bandanna shirt with a lapel collar',
    inventory: 120,
    price: 154.99,
    sale: 218,
    trend: Array.from({ length: 7 }, () => {
      const number = Math.random() * 80 + 10;
      return { previous: 100 - number, current: number };
    }),
  },
];

const Info = styled.div`
  ${tw`flex items-center`}
  padding-right: 50px;
`;

const Image = styled.div`
  width: 70px;
  height: 100px;
  flex: 70px 0 0;
  background-color: ${props => props.theme.chart.secondary};
  margin-right: 30px;
`;

const Name = styled.h6`
  ${tw`font-semibold text-base`}
`;

const LabelColumn = styled.div`
  h6 {
    ${tw`uppercase text-sm tracking-wide mt-0 mb-2`}
    color: ${props => props.theme.main.secondaryForeground};
}
padding-right: 20px;
div{
    ${tw`font-semibold text-xl tracking-wide`}
  }
`;

const Item = ({ name, inventory, price, sale, trend }) => (
  <div
    css={`
      ${tw`flex items-center`}
      padding: 15px 0;
      border-bottom: 1px solid ${props => props.theme.main.border};
    `}
  >
    <Info css="width: 45%">
      <Image />
      <Name>{name}</Name>
    </Info>
    <LabelColumn css="width: 15%">
      <h6>Inventory</h6>
      <div>{inventory}</div>
    </LabelColumn>
    <LabelColumn css="width: 15%">
      <h6>Price</h6>
      <div>${price}</div>
    </LabelColumn>
    <LabelColumn css="width: 15%">
      <h6>Sales</h6>
      <div
        css={`
          ${tw`flex`}
          svg {
            font-size: 16px;
            color: ${props => props.theme.main.primary};
          }
        `}
      >
        <MdArrowUpward /> ${sale}
      </div>
    </LabelColumn>
    <StackChart data={trend} />
  </div>
);

const ItemList = () => {
  return (
    <div
      css={`
        margin-top: 90px;
      `}
    >
      {items.map((item, index) => (
        <Item {...item} key={index} />
      ))}
    </div>
  );
};

export default ItemList;
