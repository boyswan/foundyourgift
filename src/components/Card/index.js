import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import Const from 'utils/constants';
import { Heart } from 'svg';
import { prop } from 'ramda';

const Card = styled.li`
  ${''/* background: red;*/}
  flex: 0 0 25rem;
  height: 33rem;
  position: relative;
  margin: 1rem;
`
const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`
const Save = styled.div`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 10rem;
  background: white;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  svg {
    position: absolute;
    left: 11px;
    top: 13px;
  }
`
const Content = styled.div`
  padding: 1.5rem 1rem;
  color: ${prop('secondary')};

  span {
    font-size: 2.3rem;
    font-weight: 400;
    letter-spacing: 1.1px;
    margin-bottom: 0.6rem;
    display: block;
    color: ${prop('primary')};
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 0.2rem;
  }
  p {
    opacity: 0.75;
    font-weight: 300;
    font-size: 1.4rem;
  }
`

export default (item, key) => {
  const { title = '', price = '', description = '', image = '' } = item;
  return (
    <Card key={key}>
      <Save onClick={() => Actions.selectItem({ item })}>
        <Heart color={Const.color.primary}/>
      </Save>
      <Image src={image}/>
      <Content secondary={Const.color.secondary} primary={Const.color.primary}>
        <span>£{price}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </Content>
    </Card>
  )
}
