import React from 'react';
import styled from 'styled-components';

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

const styles = {
  primary: styled(Button)`
    background: transparent;
    color: white;
    &:hover {
      background: white;
      color: #59a9ff;
    }
  `,
  selected: styled(Button)`
    background: white;
    color: red;
  `
}

export default ({ style = 'primary', onClick, label }) => {
  console.log('style', style)
  const Button = styles[style];
  return <Button {...{ onClick }}>{label}</Button>
}
