import React from 'react';
import styled from 'styled-components';
import Grid from '../Grid';

const Body = styled.article`
  flex: 1;
  height: 100%;
  overflow: auto;
`

export default ({ children }) =>
  <Body>
    {children}
  </Body>
