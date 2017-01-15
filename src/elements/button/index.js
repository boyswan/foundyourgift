import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  transition: all 0.2s ease-in-out;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid white;
  border-radius: 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0 0.5rem 2rem 0.5rem;
  &:hover {
    transition: all 0.2s ease-in-out;
  }
`

const primary = styled(Button)`
  background: transparent;
  color: white;
  &:hover {
    background: white;
    color: #59a9ff;
  }
`

const fn = { primary }
export default ({ style = 'primary', onClick, label }) => {
  const Button = fn[style];
  return <Button {...{ onClick, key: label + 1 }}>{label}</Button>
}
