import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import { Card } from 'components'
import { connect } from 'utils/helpers';
import { mapIndex } from 'utils'

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  justify-content: center;
  max-width: 1280px;
  height: 100%;

  li {
    background: white;
    flex: 0 0 25rem;
    height: 30rem;
    margin: 1rem;
    position: relative;

  }
`
const Loader = styled.div`
  width: 50px;
  height: 50px;
  background: red;
  align-self: center;
`

export default connect(({
  searchResults
}) =>
  <Grid>
    {searchResults ? mapIndex(Card, searchResults) : <Loader/>}
  </Grid>
)
