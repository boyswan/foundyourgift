import React from 'react';
import styled from 'styled-components';
import { connect, mapIndex } from 'utils';
import { reduce, add, prop, clamp } from 'ramda';
import { Cross } from 'svg';
import { Button } from 'elements';
import Const from 'utils/constants';
import Actions from 'actions';

const Sidebar = styled.aside`
  width: 100%;
  background: white;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
const Balance = styled.div`
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${prop('color')};
  text-align: right;
  padding-right: 3rem;
  h1 {
    font-weight: 600;
    font-size: 4.2rem;
  }
  span {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    display: block;
  }
`;
const Image = styled.img`
  height: 5rem;
  border: 1px solid ${prop('color')};
  background: ${prop('color')};
  width: 5rem;
  border-radius: 10rem;
  margin-right: 2rem;
`;
const Label = styled.h2`
  font-size: 1.6rem;
  color: ${prop('color')};
  border-bottom: 1px solid ${prop('grey')};
  padding-bottom: 2rem;
  font-weight: 300;
  width: 100%;
  text-align: left;
`;
const ItemContent = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  &:hover{
    opacity: 0.75;
  }
`;
const Content = styled.div`
  color: ${prop('secondary')};
  span {
    color: ${prop('primary')};
    font-weight: 400;
    font-size: 1.8rem;
  }
  div {
    font-size: 1.6rem;
    padding-right: 4rem;
    opacity: 0.5;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
const Item = styled.li`
  flex-direction: row;
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${prop('color')};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  align-items: center;
  position: relative;
  min-height: 7.5rem;
`;
const Cart = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  height: calc(100vh - 34rem);
  padding-right: 3rem;
`;
const Remove = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
`;
const ButtonWrap = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  padding-right: 3rem;
  button {
    width: 20rem;
  }
`;
const Total = styled.span`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${prop('color')};
`;

const ItemComponent = (item, key) => {
  const { image, price, title, productId } = item;
  return (
    <Item key={key} color={Const.color.grey}>
      <ItemContent onClick={() => Actions.setCurrent({ item: 'currentProduct', value: item })}>
        <Image color={Const.color.grey} alt={title} src={image} />
        <Content secondary={Const.color.secondary} primary={Const.color.primary}>
          <span>£{price}</span>
          <div>{title}</div>
        </Content>
      </ItemContent>
      <Remove onClick={() => Actions.removeItem({ productId })}>
        <Cross color={'#a9a9a9'} />
      </Remove>
    </Item>
  );
};

export default connect(({ cart, budgetInput, remainingBudget, total }) => (
  <Sidebar width={Const.ui.sidebarWidth}>
    <Balance color={Const.color.primary}>
      <div>
        <h1>£{remainingBudget}</h1>
        <span>Remaining</span>
      </div>
      <Label color={Const.color.secondary} grey={Const.color.grey}>Your Cart</Label>
    </Balance>
    <Cart>
      {mapIndex(ItemComponent, cart)}
    </Cart>
    <ButtonWrap>
      <Total color={Const.color.primary}>Total: £{total.toFixed(2)}</Total>
      <Button style="primaryLight" onClick={() => Actions.checkout({ cart })} label="Checkout" />
    </ButtonWrap>
  </Sidebar>
));
