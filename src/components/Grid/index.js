import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import Const from 'utils/constants';
import { Card } from 'components'
import { connect } from 'utils';
import { MascotSad } from 'svg';
import { InfiniteLoader, List } from 'react-virtualized'
import { mapIndex, totalPrice, last } from 'utils'
import { pipe, filter, isNil, gt, prop, anyPass,
  ifElse, reject, cond, T, identity  } from 'ramda';

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  justify-content: center;
  max-width: 1280px;
  height: 100vh;

  li {
    background: white;
    flex: 0 0 25rem;
    height: 33rem;
    margin: 1rem;
    position: relative;
    border-radius: 0.5rem;
  }
`
const Loader = styled.div`
  width: 50px;
  height: 50px;
  background: red;
  align-self: center;
`
const NoResults = styled.figure`
  align-self: center;
  flex-direction: column;
  display: flex;
  text-align: center;
  font-size: 3.2rem;
  align-items: center;
  color: ${prop('color')};
  margin-bottom: 30rem;
  max-width: 60%;
  svg {
    margin-bottom: 3rem;
  }
  h1 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 2.2rem;
  }
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

const InfinteList = ({
  /** Are there more items to load? (This information comes from the most recent API request.) */
  hasNextPage,
  /** Are we currently loading a page of items? (This may be an in-flight flag in your Redux store for example.) */
  isNextPageLoading,
  /** List of items loaded so far */
  list,
  /** Callback function (eg. Redux action-creator) responsible for loading the next page of items */
  loadNextPage
}) => {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const rowCount = hasNextPage
    ? list.size + 1
    : list.size

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreRows = isNextPageLoading
    ? () => {}
    : loadNextPage

  // Every row is loaded except for our loading indicator row.
  const isRowLoaded = ({ index }) => !hasNextPage || index < list.size

  // Render a list item or a loading indicator.
  const rowRenderer = ({ index, key, style }) => {

    const content = !isRowLoaded({ index })
      ? 'Loading...'
      : list.getIn([index, 'name'])

    return (
      <div key={key} style={style} >
        {content}
      </div>
    )
  }

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={rowCount}
    >
      {({ onRowsRendered, registerChild }) => (
        <List
          ref={registerChild}
          onRowsRendered={onRowsRendered}
          rowRenderer={rowRenderer}
          {...otherProps}
        />
      )}
    </InfiniteLoader>
  )
}

const noItems = () =>
<NoResults color={Const.color.primary}>
  <MascotSad color={Const.color.primary}/>
  <h1>{Const.text.search.noResultsTitle}</h1>
  <p>{Const.text.search.noResultsBody}</p>
</NoResults>

export default connect(({
  searchResults,
  budgetInput,
  remainingBudget,
  cart
}) =>
  <Grid>
    <InfinteList
      hasNextPage={false}
      isNextPageLoading={false}
      list={searchResults}
      loadNextPage={()=>{}}/>
    {/* {cond([
      [() => searchResults.length && Number(remainingBudget), () => filterResults(budgetInput, cart, searchResults)],
      [T, () => noItems()]
    ])(T)} */}
  </Grid>
)
