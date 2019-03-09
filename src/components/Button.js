import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledButton = styled.button`
  ${tw`font-mono text-black px-20 py-4 bg-yellow`};
  font-size: 20px;
  font-weight: bold;
  border: none;
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
