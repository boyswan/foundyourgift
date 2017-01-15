import 'app.css';
import 'utils/ramda';
import React from 'react';
import Render from 'utils/render';
import styled from 'styled-components';
import { Sidebar, Filter, Body } from 'components';

const Background = styled.div`
  background: #F6F6F6;
  display: flex;
  height: 100%;
`
const App = () =>
  <Background>
    <Filter/>
    <Body/>
    <Sidebar/>
  </Background>


Render(App);
