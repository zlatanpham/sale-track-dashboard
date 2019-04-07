import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { MdArrowUpward, MdKeyboardArrowDown } from 'react-icons/md';
import ColumnChart from './ColumnChart';
import { Counter } from '@/components/Counter';

const Heading = styled.h3`
    ${tw`uppercase text-sm font-semibold my-0 tracking-wide`}
    color: ${props => props.theme.main.secondaryForeground}
`;

const SumNum = styled.div`
  ${tw`uppercase text-2xl font-semibold my-1 tracking-wide`}
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
      <div className="flex items-start justify-between">
        <div>
          <Heading>Total sale</Heading>
          <SumNum>
            $<Counter>234076</Counter>
          </SumNum>
          <GrowNum>
            <MdArrowUpward /> $<Counter>2184</Counter>
          </GrowNum>
        </div>

        <div
          css={`
            ${tw`flex pb-2 uppercase font-bold justify-between tracking-wide`}
            width: 160px;
            border-bottom: 2px solid ${props => props.theme.main.border};
          `}
        >
          Last Year
          <MdKeyboardArrowDown />
        </div>
      </div>

      <div>
        <ColumnChart />
      </div>
    </div>
  );
};
