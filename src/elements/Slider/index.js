import React, { Component } from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import { Container, Label } from 'styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderContainer = styled.div`
  position: relative;
  .rc-slider-track {
    background: #FF7373 !important;
    height: 7px;
  }
  .rc-slider-rail {
    height: 7px;
  }
`

const Value = styled(Label)`
  float: right;
  color: #FF7373;
  font-size: 1.8rem;
  font-weight: 600;
`

const Handle = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  top: 0;
  background: #FF7373;
  border-radius: 10rem;
  position: absolute;
  left: 0%;
  justify-content: space-around;
  padding: 3px;
  align-items: center;
  margin-left: -1rem;
  cursor: pointer;
  left: ${({ offset }) => offset + '%'};
  span {
    width: 0.2rem;
    height: 74%;
    border-radius: 0.5rem;
    background: #DC6363;
  }
`

const handleSlider = curry((item, value) =>
  Actions.setSlider({ item, value }));

class SliderHandle extends Component {
  render() {
    return (
      <Handle offset={this.props.offset}>
        <span/><span/><span/>
      </Handle>
    )
  }
}

export default ({ item, value, label, defaultValue = 50, min = 0, max = 100 }) =>
  <Container>
    <Label>{label}</Label>
    <Value>£{value}</Value>
    <SliderContainer>
      <Slider
        value={value}
        tipFormatter={null}
        handle={<SliderHandle/>}
        onChange={handleSlider(item)}
        // step={5}
        defaultValue={defaultValue}
        min={min}
        max={max}/>
    </SliderContainer>
  </Container>
