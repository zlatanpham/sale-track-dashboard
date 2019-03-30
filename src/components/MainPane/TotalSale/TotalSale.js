import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { MdArrowUpward } from 'react-icons/md';
import ColumnChart from './ColumnChart';
const Heading = styled.h3`
    ${tw`uppercase text-sm font-semibold my-0 tracking-wide`}
    color: ${props => props.theme.main.secondaryForeground}
`;

const SumNum = styled.div`
  ${tw`uppercase text-xl font-semibold my-1 tracking-wide`}
`;

const GrowNum = styled.div`
  ${tw`uppercase flex items-center text-sm font-semibold my-1 tracking-wide`}
  color: ${props => props.theme.main.primary};
  svg {
    margin-top: -3px;
    margin-right: 3px;
    font-size: 13px;
  }
`;

export const TotalSale = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Heading>Total sale</Heading>
          <SumNum>$234,076.00</SumNum>
          <GrowNum>
            <MdArrowUpward /> $2,184.00
          </GrowNum>
        </div>
      </div>

      <div>
        <ColumnChart />
      </div>
    </div>
  );
};
