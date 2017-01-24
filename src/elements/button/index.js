import React from 'react';
import styled from 'styled-components';
import Const from 'utils/constants';
import { prop } from 'ramda';

const Button = styled.button`
  transition: all 0.2s ease-in-out;
  display: inline-block;
  padding: 1.5rem 2rem;
  border: 1px solid white;
  font-size: 1.8rem;
  cursor: pointer;
  border-radius: 10rem;
  font-weight: 100;
  margin: 0 1rem 2rem 1rem;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`

const small = () => `
  padding: 1rem 1rem;
  font-size: 1.4rem;
  margin: 0 1rem 1rem 0rem;
`

const primary = styled(Button)`
  background: transparent;
  color: white;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
    color: white;
  }
`
const selected = styled(Button)`
  background: white;
  color: red;
`
const primaryLight = styled(primary)`
  color: white;
  background: ${prop('primary')};
  /*&:hover {
    color: ${prop('primary')};
    background: rgba(255,255,255, 0.5);
  }*/
`
const selectedSmall = styled(selected)`
  ${small()}
`
const primarySmall = styled(primary)`
  ${small()}
`
const selectedSmallLight = styled(selected)`
  ${small()}
  color: white;
  background: ${prop('primary')}
`
const primarySmallLight = styled(primary)`
  ${small()}
  color: ${prop('secondary')};
  background: white;
  &:hover {
    color: ${prop('primary')};
    background: rgba(255,255,255, 0.5);
  }
`

export default ({ style = 'primary', onClick, label }) => {

  const Button = ({
    primary,
    selected,
    primaryLight,
    selectedSmall,
    primarySmall,
    selectedSmallLight,
    primarySmallLight
  })[style];

  return <Button
    primary={Const.color.primary}
    secondary={Const.color.secondary}
    onClick={onClick}>
      {label}
    </Button>
}
