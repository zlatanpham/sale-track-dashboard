import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-left: 1px solid #ddd;
  width: 450px;
  flex: 450px 0 0;
`;

export const RightPane = () => {
  return <Container>Right Pane</Container>;
};
