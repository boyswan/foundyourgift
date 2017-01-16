import React from 'react';
import styled from 'styled-components';
import Grid from '../Grid';

const Body = styled.article`
  flex: 1;
  overflow: auto;
  height: 100%;
`

const Wrap = styled.article`
  flex: 1;
  overflow: auto;
  height: 100vh;
`

export default () =>
  <Wrap>
    <Body>
      <Grid/>
    </Body>
  </Wrap>
