import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import { Container, Label, SelectContainer } from 'styles';
import { svg } from 'svg';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const handleInput = (type, value) => Actions.setInput({ type, value });

export default ({ type, value, label, options, icon, onClick = identity }) => console.log(value) ||
  <Container>
    <Label>{label}</Label>
    <SelectContainer>
      <Select
        value={value}
        options={options}
        arrowRenderer={() => svg(icon)}
        onChange={e => handleInput(type, e)}
        autosize={false}
        clearable={false}
        placeholder=""
      />
    </SelectContainer>
  </Container>
