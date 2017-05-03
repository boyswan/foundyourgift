import React from 'react'
import Moment from 'moment'
import Actions from '../../actions'
import Const from '../../utils/constants'
import { Button } from '../../elements'
import { Cart, Clock, Cross } from '../../svg'
import { formatPrice, mapIndex } from '../../utils'
import { propOr, map, pipe, take, uniq, append, uncurryN } from 'ramda'
import {
  Product,
  ImageList,
  Image,
  Save,
  OldPrice,
  Body,
  Feature,
  FeatureWrap,
  Price,
  Content,
  LastUpdated,
  Description,
  Close,
  ButtonWrap
} from './styles'

const SmallImage = (src, key) => <Image src={src} key={key} />
const getGallery = uncurryN(2, image => pipe(append(image), uniq, mapIndex(SmallImage)))

const Gallery = ({ image, images = { values: [] } }) => {
  return (
    <ImageList>
      {getGallery(image, images.values)}
    </ImageList>
  )
}

export default ({ currentProduct }) => {
  const {
    title = '',
    price = 0,
    features = {},
    images = {},
    image = '',
    publisher,
    date,
    salePrice,
    description,
    timestamp,
    url
  } = currentProduct

  return (
    <Product>
      <Gallery image={image} images={images} />
      <Description>
        <Content secondary={Const.color.secondary} primary={Const.color.primary}>
          <Close onClick={() => Actions.setCurrent({ value: {} })}>
            <Cross color={'#a9a9a9'} />
          </Close>
          <Body>
            <Price primary={Const.color.primary}>
              {formatPrice(salePrice < price && salePrice > 0 ? salePrice : price)}
            </Price>
            {salePrice < price && salePrice > 0 ? <OldPrice>{formatPrice(price)}</OldPrice> : ''}
            <LastUpdated>Last updated {Moment(date).fromNow()}</LastUpdated>
            <h1>{title}</h1>
            <ButtonWrap>
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
            </ButtonWrap>
            {publisher && <h2>{publisher}</h2>}
            <p>{description}</p>
            <FeatureWrap>
              {features.values && features.values.map((x, i) => <Feature key={i}>{x}</Feature>)}
            </FeatureWrap>
            <p>{Const.text.warning}</p>
          </Body>
        </Content>
      </Description>
    </Product>
  )
}
