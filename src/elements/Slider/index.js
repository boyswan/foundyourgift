import React, { Component } from "react";
import styled from "styled-components";
import Actions from "actions";
import { Container, Label } from "styles";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Const from "utils/constants";
import { curry, prop } from "ramda";

const primary = styled.div`
  position: relative;
  .rc-slider-track {
    background: ${prop("color")} !important;
    height: 0.7rem;
  }
  .rc-slider-rail {
    height: 0.7rem;
  }
`;
const light = styled(primary)`
  width: 50%;
  margin: 0 auto;
  .rc-slider-track {
    background: white !important;
    height: 1.7rem;
    border-radius: 50px;
  }
  .rc-slider-rail {
    height: 1.7rem;
    border-radius: 50px;

  }
`;
const Value = styled(Label)`
  float: right;
  color: ${prop("color")};
  font-size: 1.8rem;
  font-weight: 600;
`;
const Handle = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  top: 0;
  background: ${prop("primary")};
  border-radius: 10rem;
  position: absolute;
  left: 0%;
  justify-content: space-around;
  padding: 0.3rem;
  align-items: center;
  margin-left: -1rem;
  cursor: pointer;
  left: ${({ offset }) => offset + "%"};
  span {
    width: 0.2rem;
    height: 74%;
    border-radius: 0.5rem;
    background: ${prop("primaryDark")};
  }
`;

const handleSlider = (item, value) => {
  Actions.setSlider({ item, value });
};
class SliderHandle extends Component {
  render() {
    return (
      <Handle
        primary={Const.color.primary}
        primaryDark={Const.color.primaryDark}
        offset={this.props.offset}
      >
        <span /><span /><span />
      </Handle>
    );
  }
}

export default class extends React.Component {
  constructor() {
    super();
    this.state = { val: Const.ui.defaultBudget };
  }

  handleOnChange(val) {
    this.setState({ val });
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      Actions.setDimensions({
        item: "dimensions",
        value: { width: window.innerWidth, height: window.innerHeight }
      });
    });
  }

  render() {
    const { item, value, label, defaultValue = 50, min = 0, max, style = "primary" } = this.props;
    const SliderTheme = ({ primary, light })[style];
    return (
      <Container>
        <SliderTheme color={Const.color.primary}>
          <Label color={Const.color.secondary}>{label}</Label>
          <Value color={Const.color.primary}>£{this.state.val}</Value>
          <Slider
            value={this.state.val}
            tipFormatter={null}
            handle={<SliderHandle />}
            onChange={x => this.handleOnChange(x)}
            onAfterChange={() => handleSlider(item, this.state.val)}
            step={5}
            defaultValue={defaultValue}
            min={min}
            max={max}
          />
        </SliderTheme>
      </Container>
    );
  }
}
