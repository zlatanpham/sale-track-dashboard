import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSpring, animated } from 'react-spring';
import {
  MdTimeline,
  MdFormatLineSpacing,
  MdFilterDrama,
  MdSupervisorAccount,
  MdMoreHoriz,
} from 'react-icons/md';
import { AppContext } from '@/context';

const Container = styled.div`
  > div{
    ${tw`text-center text-center flex flex-col justify-between fixed pin-y pin-l`}
    background-color: ${props => props.theme.main.secondaryBackground};
    willChange: transform;
    width: 120px;
    height:100vh;
  }
`;

const Sidebar = () => {
  const { loaded } = useContext(AppContext);
  const { move } = useSpring({ move: loaded ? 0 : -102 });
  return (
    <Container>
      <animated.div
        style={{ transform: move.interpolate(x => `translate3d(${x}%, 0, 0)`) }}
      >
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
      </animated.div>
    </Container>
  );
};

export default Sidebar;
