import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {
  MdTimeline,
  MdFormatLineSpacing,
  MdFilterDrama,
  MdSupervisorAccount,
  MdMoreHoriz,
} from 'react-icons/md';

const Container = styled.div`
  width: 120px;
  background-color: ${props => props.theme.main.secondaryBackground};
  text-align: center;
  ${tw`text-center flex flex-col justify-between absolute pin-y pin-l`}
`;

const Sidebar = () => {
  return (
    <Container>
      <div>
        <div
          css={`
            ${tw`font-bold text-2xl flex items-center justify-center`}
            padding: 40px 0;
          `}
        >
          AA
        </div>
        <ul
          css={`
        ${tw`list-reset text-xl`}
        padding-top: 30px;
        border-top: 1px solid ${props => props.theme.main.border};
        li {
          height: 70px;
          ${tw`flex items-center justify-center`}
          color: ${props => props.theme.main.foreground};
          &:not(:first-child){
            opacity: 0.5
          }
        }
      `}
        >
          <li>
            <MdTimeline />
          </li>
          <li>
            <MdFilterDrama />
          </li>
          <li>
            <MdSupervisorAccount />
          </li>
          <li>
            <MdFormatLineSpacing />
          </li>
        </ul>
      </div>
      <div
        css={`
          ${tw`flex justify-center items-center text-xl opacity-25`};
          height: 70px;
        `}
      >
        <MdMoreHoriz />
      </div>
    </Container>
  );
};

export default Sidebar;
