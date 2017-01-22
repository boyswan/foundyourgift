import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import { Card } from 'components'
import { connect } from 'utils';
import { mapIndex } from 'utils'
import { pipe, filter, isNil, gt, prop, ifElse, reduce, add  } from 'ramda';

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
const noItems = () => <div> no items </div>

const getBalance = reduce((acc, { price }) => add(acc, price), 0)

const filterResults = (searchResults, budgetInput, cart) => pipe(
  filter(pipe(prop('price'), gt(budgetInput - getBalance(cart)))),
  ifElse(
    pipe(prop('length'), isNil),
    noItems,
    mapIndex(Card)
  )
)(searchResults)

export default connect(({
  searchResults,
  budgetInput,
  cart
}) =>
  <Grid>
    {searchResults ? filterResults(searchResults, budgetInput, cart) : <Loader/>}
  </Grid>
)
