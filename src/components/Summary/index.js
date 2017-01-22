import React from 'react';
import styled from 'styled-components';
import { connect, mapIndex } from 'utils'
import { reduce, add } from 'ramda';
import { Cross } from 'svg';
import Const from 'utils/constants';
import Actions from 'actions';

const Sidebar = styled.aside`
  width: 300px;
  min-width: 300px;
  background: white;
  ${''/* position: fixed;
  top: 0;
  right: 0;
  height: 100%;*/}
`
const Balance = styled.div`
`
const Image = styled.image`

`
const Content = styled.div`

`
const Item = styled.li`

`
const Cart = styled.ul`

`
const Remove = styled.div`

`

const getBalance = reduce((acc, { price }) => add(acc, price), 0)

const ItemComponent = ({ image, price, title, id  }, key) =>
  <Item key={key}>
    <Image alt={title} src={image}/>
    <Content secondary={Const.color.secondary} primary={Const.color.primary}>
      <span>£{price}</span>
      <h1>{title}</h1>
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
    <Balance>
      <h1>£{(budgetInput - getBalance(cart)).toFixed(2)}</h1>
      <span>Remaining</span>
    </Balance>
    <Cart>
      Your Cart
      {mapIndex(ItemComponent, cart)}
    </Cart>

  </Sidebar>
)
