import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Item } from './RightPane/SaleFunnel';
import { MdClose, MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import { TrendChart } from './TrendChart';
import { useSpring, animated } from 'react-spring';
import { AppContext } from '@/context';

const Container = styled.div`
  ${tw`absolute pin`};
  background-color: ${props => props.theme.main.background};
  border-left: 1px solid ${props => props.theme.main.border};
`;

const Image = () => (
  <div
    css={`
      padding-bottom: 60%;
      background-color: ${props => props.theme.main.secondaryBackground};
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
    color: ${props => props.theme.main.success};
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
  const { activeInventory, setActiveInventory } = useContext(AppContext);
  if (!activeInventory) {
    return null;
  }
  const { transform } = useSpring({ transform: activeInventory ? 0 : 102 });
  const { data, totalSale, price, id, name, detail } = activeInventory;
  console.log(activeInventory);
  return (
    <animated.div
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '420px',
        zIndex: 999,
        transform: transform.interpolate(x => `translate3d(${x}%, 0, 0)`),
      }}
    >
      <Container>
        <CloseButton onClick={() => setActiveInventory(null)}>
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
          <Price>${price}</Price>
          <Description>
            Women's high neck sweater shirt with a soft fevenish. Available in
            different colors and prints.
          </Description>
          <Trend>
            <h4>${totalSale}</h4>
            <p>
              <MdArrowUpward />
              $345.00
            </p>
            <TrendChart data={data} />
          </Trend>
          <div className="mt-10">
            {detail.map((item, index) => (
              <Item {...item} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </animated.div>
  );
};
