import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  padding: 40px;
`;

const Heading = styled.h4`
  ${tw`uppercase text-base tracking-wide mb-6`};
  color: ${props => props.theme.main.secondaryForeground};
`;

export const Container = ({ children, title, ...rest }) => (
  <Wrapper {...rest}>
    <Heading>{title}</Heading>
    {children}
  </Wrapper>
);
