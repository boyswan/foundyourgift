import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';

const Container = styled.div`
`
const Input = styled.input`
  transition: all 0.2s ease-in-out;
  display: inline-block;
  padding: 1rem;
  border: none;
  width: 100%;
  border-radius: 0.3rem;
`

const Label = styled.label`
  color: #4674AB;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  display: block;
`

const handleInput = (type, value) => Actions.setInput({ type, value })

export default ({ type, label, onClick }) =>
  <Container>
    <Label>{label}</Label>
    <Input onClick={onClick} value="" onChange={e => handleInput(type, e.target.value)}/>
  </Container>
