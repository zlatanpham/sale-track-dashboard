import React, { useContext } from 'react';
import styled, { withTheme } from 'styled-components';
import tw from 'tailwind.macro';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';

import { BarChart, Bar } from 'recharts';
import { Counter } from '@/components/Counter';
import { AppContext } from '@/context';

const StackChart = withTheme(({ theme, data }) => (
  <BarChart width={110} height={60} barSize={4} data={data}>
    <Bar dataKey="current" stackId="a" fill={theme.chart.primary} />
    <Bar dataKey="previous" stackId="a" fill={theme.chart.tertiary} />
  </BarChart>
));

const generateChartData = () =>
  Array.from({ length: 10 }, () => parseInt(Math.random() * 2000 + 500));

const items = [
  {
    id: 43283,
    totalSale: 3213.2,
    sale: 341,
    name: 'Classic white denim skirt',
    inventory: 293,
    price: 134.99,
    trend: Array.from({ length: 7 }, () => {
      const number = Math.random() * 80 + 10;
      return { previous: 100 - number, current: number };
    }),
    detail: [
      {
        name: 'Cart',
        status: 23,
      },
      {
        name: 'Checkout',
        status: 5,
      },
      {
        name: 'Sessions',
        status: -21,
      },
    ],
    data: generateChartData(),
  },
  {
    id: 90882,
    totalSale: 882.21,
    sale: -172,
    name: 'Bandanna shirt with a lapel collar',
    inventory: 120,
    price: 154.99,
    trend: Array.from({ length: 7 }, () => {
      const number = Math.random() * 80 + 10;
      return { previous: 100 - number, current: number };
    }),
    detail: [
      {
        name: 'Cart',
        status: -5,
      },
      {
        name: 'Checkout',
        status: 8,
      },
      {
        name: 'Sessions',
        status: 12,
      },
    ],
    data: generateChartData(),
  },
  {
    id: 21821,
    totalSale: 7212.21,
    sale: 141,
    name: 'Open cabel-knit sweater',
    inventory: 478,
    price: 234.34,
    trend: Array.from({ length: 7 }, () => {
      const number = Math.random() * 80 + 10;
      return { previous: 100 - number, current: number };
    }),
    detail: [
      {
        name: 'Cart',
        status: 2,
      },
      {
        name: 'Checkout',
        status: 3,
      },
      {
        name: 'Sessions',
        status: 13,
      },
    ],
    data: generateChartData(),
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

const Item = ({ data }) => {
  const { setActiveInventory, setShowInventoryPane } = useContext(AppContext);
  const { name, inventory, price, sale, trend } = data;
  const isGrow = sale > 0;
  return (
    <div
      css={`
        ${tw`flex items-center`}
        padding: 15px 0;
        border-bottom: 1px solid ${props => props.theme.main.border};
      `}
      onClick={() => {
        setShowInventoryPane(true);
        setActiveInventory(data);
      }}
    >
      <Info css="width: 45%">
        <Image />
        <Name>{name}</Name>
      </Info>
      <LabelColumn css="width: 15%">
        <h6>Inventory</h6>
        <div>
          <Counter fixed={0}>{inventory}</Counter>
        </div>
      </LabelColumn>
      <LabelColumn css="width: 15%">
        <h6>Price</h6>
        <div>
          $<Counter>{price}</Counter>
        </div>
      </LabelColumn>
      <LabelColumn css="width: 15%">
        <h6>Sales</h6>
        <div
          isGrow={isGrow}
          css={`
            ${tw`flex`}
            svg {
              font-size: 16px;
              color: ${props =>
                props.isGrow
                  ? props.theme.main.success
                  : props.theme.main.danger};
            }
          `}
        >
          {isGrow ? <MdArrowUpward /> : <MdArrowDownward />} $
          <Counter fixed={0}>{Math.abs(sale)}</Counter>
        </div>
      </LabelColumn>
      <StackChart data={trend} />
    </div>
  );
};

const ItemList = () => {
  return (
    <div
      css={`
        margin-top: 90px;
      `}
    >
      {items.map((item, index) => (
        <Item data={item} key={index} />
      ))}
    </div>
  );
};

export default ItemList;
