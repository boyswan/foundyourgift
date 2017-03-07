import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Actions from "../../actions";
import { Container, Label, media } from "../../styles";
import Slider from "rc-slider";
import { formatPrice } from "../../utils";
import Const from "../../utils/constants";
import { prop } from "ramda";

const isClient = typeof window !== "undefined";
if (isClient) require("rc-slider/assets/index.css");

const fadeIn = keyframes`
  0% { opacity: 1; transform: scale(1)}
  33% { opacity: 1; transform: scale(1.1, 1.3)}
  100% { opacity: 1; transform: scale(1)}
`;

const primary = styled.div`
  position: relative;
  .rc-slider-track {
    background: #ffcdcc !important;
    border-radius: 10rem;
    height: 1rem;
  }
  .rc-slider-rail {
    border-radius: 10rem;
    height: 1rem;
  }
  ${media.tablet`
    .rc-slider-track,
    .rc-slider-rail {
      height: 3rem;
    }
  `}
`;
const light = styled(primary)`
  width: 50%;
  margin: 0 auto;
  .rc-slider-track {
    background: white !important;
    height: 2.1rem;
    border-radius: 50px;
  }
  .rc-slider-rail {
    height: 2.1rem;
    border-radius: 50px;
  }
  ${media.tablet`
    .rc-slider-track,
    .rc-slider-rail {
      height: 4rem;
    }
  `}
`;
const Value = styled(Label)`
  float: right;
  color: ${prop("color")};
  font-size: 1.8rem;
  font-weight: 600;
`;
const Handle = styled.div`
  width: 3rem;
  height: 2.4rem;
  display: flex;
  top: 0;
  background: ${prop("primary")};
  border-radius: 10rem;
  position: absolute;
  left: 0%;
  justify-content: space-around;
  padding: 0.6rem;
  align-items: center;
  margin-left: -1rem;
  cursor: pointer;
  left: ${({ offset }) => offset + "%"};
  ${media.tablet`
    width: 5.2rem;
    height: 4rem;
  `}
  span {
    width: 0.2rem;
    height: 74%;
    border-radius: 0.5rem;
    background: ${prop("primaryDark")};
    ${media.tablet`
      width: 0.4rem;
    `}
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
    this.state = { val: JSON.parse(localStorage.getItem("budget")) || Const.ui.defaultBudget };
  }

  handleOnChange(val) {
    this.setState({ val });
  }

  render() {
    const {
      item,
      hasBudget,
      label,
      defaultValue = 5000,
      min = 0,
      max,
      style = "primary"
    } = this.props;
    const SliderTheme = ({ primary, light })[style];
    return (
      <Container>
        <SliderTheme color={Const.color.primary}>
          <Label color={Const.color.secondary}>{label}</Label>
          <Value color={Const.color.primary}>
            £{this.state.val / 100}
          </Value>
          <Slider
            value={this.state.val}
            tipFormatter={null}
            handle={<SliderHandle />}
            onMouseDown={x => console.log("on")}
            onChange={x => this.handleOnChange(x)}
            onBeforeCange={() => console.lo("beforechange")}
            onAfterChange={() => handleSlider(item, this.state.val)}
            step={500}
            defaultValue={defaultValue}
            min={min}
            max={max}
          />
        </SliderTheme>
      </Container>
    );
  }
}
