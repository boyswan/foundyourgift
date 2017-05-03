import React from 'react'
import styled from 'styled-components'
import Moment from 'moment'
import Actions from '../../actions'
import Const from '../../utils/constants'
import { Button } from '../../elements'
import { formatPrice } from '../../utils'
import { Heart, Cart, ShowMore, Clock } from '../../svg'
import { Card, Image, Type, Save, More, Content, ImageWrap, OldPrice } from './styles'

export default ({ item = {}, breakpoint }) => {
  const {
    title = '',
    salePrice = 0,
    price = 0,
    searchType,
    image = '',
    url,
    currentTimestamp
  } = item
  return (
    <Card breakpoint={breakpoint}>
      <Save color={Const.color.grey} onClick={() => Actions.setCurrent({ value: item })}>
        <ShowMore color={Const.color.primary} />
      </Save>
      <ImageWrap>
        <Image src={image} />
      </ImageWrap>
      <div className="card_dim">
        <Button
          icon={<Cart color="white" />}
          style="primaryLight"
          label="Add to cart"
          onClick={() => Actions.addItem({ value: item })}
        />
        <Button
          icon={<Clock color="white" />}
          style="primaryLight"
          label="Quick buy"
          onClick={() => window.open(url, '_blank')}
        />
      </div>
      <Content secondary={Const.color.secondary} primary={Const.color.primary}>
        <span>{formatPrice(salePrice < price && salePrice > 0 ? salePrice : price)}</span>
        {salePrice < price && salePrice > 0 ? <OldPrice>{formatPrice(price)}</OldPrice> : ''}
        <h1>{title}</h1>
        <p> Last updated {Moment(currentTimestamp).fromNow()}</p>
      </Content>
    </Card>
  )
}
