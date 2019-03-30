import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-left: 120px;
  min-height: 100vh;
  display: flex;
`;

const Body = ({ children }) => <Container>{children}</Container>;

export default Body;
