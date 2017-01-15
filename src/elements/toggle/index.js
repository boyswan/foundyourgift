import React from 'react';
import styled from 'styled-components';
import * as Toggles from './style';

const Button = styled.div`
  transition: all 0.2s ease-in-out;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid red;
  border-radius: 2rem;
  font-size: 1.2rem;
  cursor: pointer;
`

export const primary = styled(Button)`
  background: transparent;
  color: red;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: red;
    color: white;
  }
`

export default ({ style = 'primary', onClick, label }) => {
  const Toggle = Toggles[style];
  const key = label + 1;
  return <Toggle {...{ onClick, key }}>
    <span>{label}</span>
  </Toggle>
}
