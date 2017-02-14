import React from "react";
import styled from "styled-components";
import Const from "utils/constants";
import Actions from "actions";
import { prop } from "ramda";

const active = () => `
  pointer-events: all;
  opacity: 1;
  transition: all 0.2s ease-in-out;
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  background: rgba(0,0,0,0.15);
  ${x => x.active && active};
`;
const Child = styled.div`
  z-index: 5;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export default ({ active, children }) => {
  console.log("active", active);
  return (
    <Modal active={active}>
      <Child>{children}</Child>
      <Background onClick={() => Actions.removeCurrent({ item: "currentProduct", value: {} })} />
    </Modal>
  );
};
