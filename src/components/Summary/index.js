import React from 'react'
import { Link } from 'react-router'
import { connect, mapIndex, formatPrice, getCartAmounts } from '../../utils'
import { Cross } from '../../svg'
import { Button } from '../../elements'
import Const from '../../utils/constants'
import Actions from '../../actions'
import {
  Sidebar,
  Balance,
  OldPrice,
  Image,
  Label,
  ItemContent,
  Content,
  Item,
  Cart,
  Remove,
  ButtonWrap,
  Total,
  ButtonCenter,
  Quantity
} from './styles'

const ItemComponent = ({ image, price, salePrice, title, asin, quantity }, key) => {
  const item = { image, price, salePrice, title, asin, quantity }
  return (
    <Item key={key} color={Const.color.grey}>
      <ItemContent onClick={() => Actions.setCurrent({ value: item })}>
        <Image color={Const.color.grey} alt={title} src={image} />
        <Content secondary={Const.color.secondary} primary={Const.color.primary}>
          <span>{formatPrice(salePrice < price && salePrice > 0 ? salePrice : price)}</span>
          <Quantity><span>x</span> {quantity}</Quantity>
          <div>{title}</div>
        </Content>
      </ItemContent>
      <Remove onClick={() => Actions.removeItem({ value: asin })}>
        <Cross color={'#a9a9a9'} />
      </Remove>
    </Item>
  )
}

export default connect(({ cart, remainingBudget, total }) => (
  <Sidebar width={Const.ui.sidebarWidth}>
    <Balance color={Const.color.primary}>
      <div>
        <h1>{formatPrice(remainingBudget)}</h1>
        <span>Remaining</span>
      </div>
    </Balance>
    <Label color={Const.color.secondary} grey={Const.color.grey}>Your Cart</Label>
    <Cart>
      {mapIndex(ItemComponent, cart)}
    </Cart>
    <ButtonWrap>
      <ButtonCenter>
        <Total color={Const.color.primary}>Total: {formatPrice(total)}</Total>
        <Button
          disabled={!cart.length}
          style="primaryLight"
          onClick={() => Actions.checkout({ cart })}
          label="Buy from Amazon"
        />
      </ButtonCenter>
    </ButtonWrap>
  </Sidebar>
))
