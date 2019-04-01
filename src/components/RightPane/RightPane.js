import React from 'react';
import styled from 'styled-components';
import { ThemeToggle } from './ThemeToggle';
import { SaleFunnel } from './SaleFunnel';

const Container = styled.div`
  border-left: 1px solid #ddd;
  width: 450px;
  flex: 450px 0 0;
`;

export const RightPane = () => {
  return (
    <Container>
      <ThemeToggle />
      <SaleFunnel />
    </Container>
  );
};
