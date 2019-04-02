import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from './shared/Container';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import { Counter } from '../Counter';

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

const DashedLine = styled.span`
  border-top: 1px dashed ${props => props.theme.main.border};
  ${tw`block w-full mb-1 mx-2`}
`;

const Status = ({ num }) => (
  <span
    css={`
      ${tw`flex font-semibold`};
      svg {
        font-size: 14px;
        margin-right: 2px;
      }
    `}
  >
    {num > 0 ? (
      <MdArrowUpward
        css={`
          color: ${props => props.theme.main.success};
        `}
      />
    ) : (
      <MdArrowDownward
        css={`
          color: ${props => props.theme.main.danger};
        `}
      />
    )}
    <Counter fixed={0}>{Math.abs(num)}</Counter>%
  </span>
);

export const Item = ({ name, status }) => (
  <div
    css={`
      ${tw`flex items-end`}
      + * {
        margin-top: 20px;
      }
    `}
  >
    <span
      css={`
        ${tw`font-semibold`}
      `}
    >
      {name}
    </span>
    <DashedLine />
    <Status num={status} />
  </div>
);

export const SaleFunnel = () => {
  return (
    <Container title="Sale Funnel">
      {data.map((item, index) => (
        <Item {...item} key={index} />
      ))}
    </Container>
  );
};
