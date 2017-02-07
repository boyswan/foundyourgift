import React from 'react';
import styled from 'styled-components';
import Const from 'utils/constants';
import Actions from 'actions';
import { prop } from 'ramda';

const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
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

export default ({ children }) => {
  return (
    <Modal>
      <Child>{children}</Child>
      <Background onClick={() => Actions.removeCurrent({ item: 'currentProduct', value: {} })} />
    </Modal>
  );
};
