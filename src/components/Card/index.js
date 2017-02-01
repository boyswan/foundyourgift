import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import Const from 'utils/constants';
import { Heart } from 'svg';
import { prop, tail, map } from 'ramda';
import Moment from 'moment';

const Card = styled.li`
  flex: 0 0 50%;
  height: 33rem;
  position: relative;
  margin: 1rem;
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  height: 58%;
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
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 5rem;
  }
  p {
    color: #b9b9b9;
    font-weight: 300;
    font-size: 1.4rem;
  }
`

export default ({ item }) => {
  const { title = '', price = 0, features = {}, image = '', timestamp } = item;
  return (
    <Card>
      <Save color={Const.color.grey} onClick={() => Actions.selectItem({ item })}>
        <Heart color={Const.color.primary}/>
      </Save>
      <Image src={image}/>
      <Content secondary={Const.color.secondary} primary={Const.color.primary}>
        <span>£{price}</span>
        <h1>{title}</h1>
        <p>Last updated {Moment(timestamp).fromNow()}</p>
      </Content>
    </Card>
  )
}
