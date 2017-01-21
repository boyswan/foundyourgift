import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import { Container, Label } from 'styles';
import { Dropdown } from 'svg';

const InputContainer = styled.div`
  position: relative;
  border-radius: 0.3rem;
  background: white;
  &:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  }
`
const Input = styled.input`
  transition: all 0.2s ease-in-out;
  display: inline-block;
  padding: 1rem;
  border: none;
  width: 100%;
  border-radius: 0.3rem 0 0 0.3rem ;
  font-weight: 300;
  font-size: 1.4rem;
  color: #4875A9;
  width: ${({ icon }) => icon ? '100%' : '85%'};
`

const Icon = styled.div`
  display: inline-block;
  position: absolute;
  cursor: pointer;
  right: 1rem;
  transform: translatey(-50%);
  top: 50%;
`

const handleInput = (input, value) => Actions.setInput({ input, value });

export default ({ input, value, label, icon, onClick = identity }) =>
  <Container>
    <Label>{label}</Label>
    <InputContainer>
      <Input value={value} onChange={e => handleInput(input, e.target.value)}/>
      {icon ? <Icon onClick={onClick}>{icon}</Icon> : ''}
    </InputContainer>
  </Container>
