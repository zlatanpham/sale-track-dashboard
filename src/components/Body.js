import React from 'react';
import styled from 'styled-components';
import { useSpring, config, animated } from 'react-spring';
const Container = styled.div`
  padding-left: 120px;
  min-height: 100vh;
  display: flex;
`;

const Body = ({ children }) => {
  const { opacity } = useSpring({
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
    config: config.slow,
  });

  return (
    <animated.div style={{ opacity }}>
      <Container>{children}</Container>
    </animated.div>
  );
};

export default Body;
