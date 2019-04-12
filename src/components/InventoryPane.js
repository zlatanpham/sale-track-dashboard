import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Item } from './RightPane/SaleFunnel';
import { MdClose, MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import { TrendChart } from './TrendChart';
import { useSpring, animated } from 'react-spring';
import { AppContext } from '@/context';
import { Counter } from './Counter';

const Container = styled.div`
  ${tw`absolute pin`};
  background-color: ${props => props.theme.main.secondaryBackground};
  border-left: 1px solid ${props => props.theme.main.border};
`;

const Image = () => (
  <div
    css={`
      padding-bottom: 60%;
      background-color: ${props => props.theme.main.tertiaryBackground};
    `}
  />
);

const Tag = styled.h6`
  ${tw`uppercase text-base`};
  color: ${props => props.theme.main.secondaryForeground};
`;

const Name = styled.h3`
  font-size: 32px;
`;

const Price = styled.div`
  color: ${props => props.theme.main.secondaryForeground};
  font-size: 20px;
  margin: 15px 0;
`;

const Description = styled.div`
  ${tw`text-sm`}
  color: ${props => props.theme.main.secondaryForeground}
`;

const Trend = styled.div`
  ${tw`text-sm mt-8`}
  > h4 {
    font-size: 24px;
    margin-bottom: 2px;
  }

  > p {
    color: ${props =>
      props.isGrow ? props.theme.main.success : props.theme.main.danger};
    font-weight: 600;
    font-size: 16px;
  }
`;

const CloseButton = styled.button`
  ${tw`absolute rounded-full flex items-center justify-center`}
  color: ${props => props.theme.main.foreground};
  top: 10px;
  left: 10px;
  background-color: ${props => props.theme.main.background};
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const InventoryPane = () => {
  const {
    showInventoryPane,
    setShowInventoryPane,
    activeInventory,
  } = useContext(AppContext);

  const { transform } = useSpring({ transform: showInventoryPane ? 0 : 102 });
  const { data, totalSale, price, id, name, detail, sale } =
    activeInventory || {};
  const isGrow = sale > 0;
  return (
    <animated.div
      style={{
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        width: '480px',
        zIndex: 999,
        willChange: 'transform',
        transform: transform.interpolate(x => `translate3d(${x}%, 0, 0)`),
      }}
    >
      {activeInventory ? (
        <Container>
          <CloseButton onClick={() => setShowInventoryPane(false)}>
            <MdClose />
          </CloseButton>
          <Image />
          <div
            css={`
              padding: 40px;
            `}
          >
            <Tag>#{id}</Tag>
            <Name>{name}</Name>
            <Price>
              $<Counter>{price}</Counter>
            </Price>
            <Description>
              Women's high neck sweater shirt with a soft fevenish. Available in
              different colors and prints.
            </Description>
            <Trend isGrow={isGrow}>
              <h4>
                $<Counter>{totalSale}</Counter>
              </h4>
              <p>
                {isGrow ? <MdArrowUpward /> : <MdArrowDownward />}$
                <Counter>{sale}</Counter>
              </p>
              <TrendChart data={data} isGrow={isGrow} />
            </Trend>
            <div className="mt-10">
              {detail.map((item, index) => (
                <Item {...item} key={index} />
              ))}
            </div>
          </div>
        </Container>
      ) : null}
    </animated.div>
  );
};
