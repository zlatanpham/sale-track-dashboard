import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { MdMoreHoriz } from 'react-icons/md';

const Wrapper = styled.div`
  padding: 40px;
`;

const Heading = styled.h4`
  ${tw`uppercase text-base tracking-wide mb-6 flex justify-between items-center`};
  span {
    width: 20px;
    height: 20px;
    display: block;
    ${tw`flex justify-center items-center`};
    border: 1px solid ${props => props.theme.main.border};
    color: ${props => props.theme.main.secondaryForeground};
    border-radius: 999px;s
  }
  svg {
    font-size: 16px;
  }
  color: ${props => props.theme.main.secondaryForeground};
`;

export const Container = ({ children, title, ...rest }) => (
  <Wrapper {...rest}>
    <Heading>
      {title}{' '}
      <span>
        <MdMoreHoriz />
      </span>
    </Heading>
    {children}
  </Wrapper>
);
