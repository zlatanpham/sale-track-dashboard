import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Container = styled.div`
  width: 120px;
  background-color: ${props => props.theme.main.secondaryBackground};
  text-align: center;
  ${tw`text-center absolute pin-y pin-l`}
`;

const Sidebar = () => {
  return (
    <Container>
      <div
        css={`
          ${tw`font-bold text-2xl flex items-center justify-center`}
          padding: 40px 0;
        `}
      >
        AA
      </div>
    </Container>
  );
};

export default Sidebar;
