import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Grid = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default () =>
  <Grid>
    {map(Card, range(1, 100))}
  </Grid>
