import React from 'react';
import styled from 'styled-components';
import Grid from '../Grid';

const Body = styled.div`
  flex: 1;
  height: 100%;
`
const Center = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export default () =>
  <Body>
    {/* <Center> */}
      <Grid/>
    {/* </Center> */}
  </Body>
