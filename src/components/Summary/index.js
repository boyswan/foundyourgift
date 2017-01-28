import React from 'react';
import styled from 'styled-components';
import { connect, mapIndex } from 'utils'
import { reduce, add, prop } from 'ramda';
import { Cross } from 'svg';
import { Button } from 'elements';
import Const from 'utils/constants';
import Actions from 'actions';

const Sidebar = styled.aside`
  width: 300px;
  min-width: 300px;
  background: white;
  padding: 0 2rem;
  overflow: auto;
`
const Balance = styled.div`
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${prop('color')};
  text-align: right;
  h1 {
    font-weight: 600;
    font-size: 3.2rem;
  }
  span {
    font-size: 1.4rem;
  }
`
const Image = styled.img`
  height: 5rem;
  border: 1px solid ${prop('color')};
  background: ${prop('color')};
  width: 5rem;
  border-radius: 10rem;
  margin-right: 2rem;
`
const Label = styled.h2`
  font-size: 1.6rem;
  color: ${prop('color')};
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  font-weight: 300;
  border-bottom: 1px solid ${prop('grey')};
`
const Content = styled.div`
  color: ${prop('secondary')};
  font-size: 1.6rem;
  span {
    font-weight: 400;
  }
  div {
    opacity: 0.5;
  }
`
const Item = styled.li`
  flex-direction: row;
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${prop('color')};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  align-items: center;
  position: relative;
`
const Cart = styled.ul`
  display: flex;
  flex-direction: column;
`
const Remove = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
`
const ButtonWrap = styled.div`

`
const getBalance = reduce((acc, { price }) => add(acc, price), 0)

const ItemComponent = ({ image, price, title, id  }, key) =>
  <Item key={key} color={Const.color.grey}>
    <Image color={Const.color.grey} alt={title} src={image}/>
    <Content secondary={Const.color.secondary} primary={Const.color.primary}>
        <span>£{price}</span>
        <div>{title}</div>
    </Content>
    <Remove onClick={() => Actions.removeItem({ id })}>
      <Cross color={Const.color.primary}/>
    </Remove>
  </Item>

export default connect(({
  cart,
  budgetInput,
}) =>
  <Sidebar>
    <Balance color={Const.color.primary}>
      <div>
        <h1>£{(budgetInput - getBalance(cart)).toFixed(2)}</h1>
        <span>Remaining</span>
      </div>
    </Balance>
    <Label color={Const.color.secondary} grey={Const.color.grey}>Your Cart</Label>
    <Cart>
      {mapIndex(ItemComponent, cart)}
    </Cart>
    <ButtonWrap>
      <Button style='primaryLight' onClick={() => Actions.checkout({ cart })} label="Checkout"/>
    </ButtonWrap>
  </Sidebar>
)
