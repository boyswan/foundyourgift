import React from 'react';
import styled from 'styled-components';
import Const from 'utils/constants';
import { Summary, Filter, Body, Footer } from '../components';

const Background = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: ${({ row }) => row ? 'row' : 'column'};
  justify-content: space-between;
  background: ${({ color }) => color};
`

export default () =>
  <Background color={Const.color.grey} row >
    <Filter/>
    <Body/>
    <Summary/>
  </Background>
