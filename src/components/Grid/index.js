import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin:0 auto;
  justify-content: center;
  max-width: 1000px;
`

export default () =>
  <Grid>
    {addIndex(map)(Card, range(1, 100))}
  </Grid>
