import React from 'react';
import styled from 'styled-components';
import Const from 'utils/constants';
import { Heart } from 'svg';

const Card = styled.li`
  background: red;
  flex: 0 0 25rem;
  height: 30rem;
  position: relative;
  margin: 1rem;
`

const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`
const Save = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 10rem;
  background: white;
  position: absolute;
  top: 1rem;
  right: 1rem;
  svg {
    position: absolute;
    left: 11px;
    top: 13px;
  }
`
//
// const Title = styled.h3`
//
// `
// const Price = styled.span`
//
// `

export default ({ title = '', price = '', image = '' }, key) =>
  <Card key={key}>
    <Save>
      <Heart color={Const.color.primary}/>
    </Save>
    <Image src={image}/>
    {/* <Title>{title}</Title>
    <Price>{price}</Price> */}
  </Card>
