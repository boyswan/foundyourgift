import 'app.css';
import 'utils/ramda';
import React from 'react';
import Render from 'utils/render';
import styled from 'styled-components';
import { Summary, Filter, Body, Footer } from 'components';

const Background = styled.div`
  display: flex;
`
const App = () =>
  <Background>
    <Filter/>
    <Body/>
    <Summary/>
  </Background>


Render(App);
