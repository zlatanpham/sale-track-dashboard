import React from 'react';
import { TotalSale } from './TotalSale';
import styled from 'styled-components';
import ItemList from './TotalSale/ItemList';

const Container = styled.div`
  padding: 40px 70px;
  width: calc(100% - 480px);
`;

export const MainPane = () => {
  return (
    <Container>
      <TotalSale />
      <ItemList />
    </Container>
  );
};
