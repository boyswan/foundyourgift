import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import { Card } from 'components'
import { connect } from 'utils';
import { mapIndex, totalPrice, last } from 'utils'
import { pipe, filter, isNil, gt, prop, anyPass,
  ifElse, reject  } from 'ramda';

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
const NoResults = styled.div`

`

const isOverBudget = (budgetInput, cart) => pipe(
  prop('price'),
  gt(budgetInput - totalPrice(cart))
)

const filterResults = last((budgetInput, cart) => pipe(
  // filter(anyPass([
  //   isOverBudget(budgetInput, cart),
  //   // isInCart()
  // ])),
  filter(isOverBudget(budgetInput, cart)),
  ifElse(
    pipe(prop('length'), isNil),
    noItems,
    mapIndex(Card)
  )
))

const noItems = () =>
<NoResults> no items </NoResults>

export default connect(({
  searchResults,
  budgetInput,
  cart
}) =>
  <Grid>
    {searchResults ? filterResults(budgetInput, cart, searchResults) : <Loader/>}
  </Grid>
)
