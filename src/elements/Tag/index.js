import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import { Container, Label, SelectContainer } from 'styles';
import { svg } from 'svg';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const handleInput = curry((type, value) => Actions.setInterests({ type, value }));
const renderValues = values => <div>{values.label}</div>
const renderOption = values => <div>{values.label}sdfsdf</div>

export default ({ type, value, label, options, icon }) =>
  <Container>
    <Label>{label}</Label>
    <SelectContainer>
      <Select
        value={value}
        options={options}
        arrowRenderer={() => svg(icon)}
        onChange={handleInput(type)}
        autosize={false}
        clearable={false}
        multi={true}
        placeholder=""
        // optionRenderer={renderOption}
        // valueRenderer={renderValues}
      />
    </SelectContainer>
  </Container>
