import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import Const from 'utils/constants';
import { Heart } from 'svg';
import { prop, tail, map } from 'ramda';

const Card = styled.li`
  flex: 0 0 50%;
  height: 60rem;
  position: relative;
  margin: 1rem;
`
const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: contain;
  padding: 2rem;
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
  border: 1px solid ${prop('color')};

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

const feature = x => <p>{x}</p>

export default (item, key) => {
  const { title = '', price = 0, features = {}, image = '' } = item;
  return (
    <Card key={key}>
      <Save color={Const.color.grey} onClick={() => Actions.selectItem({ item })}>
        <Heart color={Const.color.primary}/>
      </Save>
      <Image src={image}/>
      <Content secondary={Const.color.secondary} primary={Const.color.primary}>
        <span>£{price}</span>
        <h1>{title}</h1>
        {/* {map(feature, features)} */}
      </Content>
    </Card>
  )
}
