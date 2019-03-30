import React from 'react';
import { TotalSale } from './TotalSale';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px 70px;
  width: 100%;
`;

export const MainPane = () => {
  return (
    <Container>
      <TotalSale />
    </Container>
  );
};
