import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Item } from './RightPane/SaleFunnel';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import { TrendChart } from './TrendChart';

const Container = styled.div`
  width: 420px;
  ${tw`absolute pin-y pin-r`};
  background-color: ${props => props.theme.main.background};
  border-left: 1px solid ${props => props.theme.main.border};
`;

const Image = () => (
  <div
    css={`
      padding-bottom: 60%;
      background-color: ${props => props.theme.main.secondaryBackground};
    `}
  />
);

const Tag = styled.h6`
  ${tw`uppercase text-base`};
  color: ${props => props.theme.main.secondaryForeground};
`;

const Name = styled.h3`
  font-size: 32px;
`;

const Price = styled.div`
  color: ${props => props.theme.main.secondaryForeground};
  font-size: 20px;
  margin: 15px 0;
`;

const Description = styled.div`
  ${tw`text-sm`}
  color: ${props => props.theme.main.secondaryForeground}
`;

const Trend = styled.div`
  ${tw`text-sm mt-8`}
  > h4 {
    font-size: 24px;
    margin-bottom: 2px;
  }

  > p {
    color: ${props => props.theme.main.success};
    font-weight: 600;
    font-size: 16px;
  }
`;

const data = [
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
];

export const ItemDetail = () => {
  return (
    <Container>
      <Image />
      <div
        css={`
          padding: 40px;
        `}
      >
        <Tag>#45397</Tag>
        <Name>Open cable-knit sweater</Name>
        <Price>${'234, 54'}</Price>
        <Description>
          Women's high neck sweater shirt with a soft fevenish. Available in
          different colors and prints.
        </Description>
        <Trend>
          <h4>$3,324.00</h4>
          <p>
            <MdArrowUpward />
            $345.00
          </p>
          <TrendChart />
        </Trend>
        <div className="mt-10">
          {data.map((item, index) => (
            <Item {...item} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};
