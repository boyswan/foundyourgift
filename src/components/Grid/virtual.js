import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import Const from 'utils/constants';
import { Card } from 'components'
import { connect } from 'utils';
import { MascotSad } from 'svg';
import { List } from 'react-virtualized';
import { mapIndex, totalPrice, last } from 'utils'
import { pipe, filter, isNil, gt, prop, anyPass, splitEvery,
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
const CardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: flex-row;
  justify-content: center;
`

const noItems = () =>
<NoResults color={Const.color.primary}>
  <MascotSad color={Const.color.primary}/>
  <h1>{Const.text.search.noResultsTitle}</h1>
  <p>{Const.text.search.noResultsBody}</p>
</NoResults>

const rowRenderer = ({ key, index, isScrolling, isVisible, style }, item) =>
  <div key={key} style={style}>
    <CardWrap>
      <Card item={item[index][0]}/>
      <Card item={item[index][1]}/>
      <Card item={item[index][2]}/>
    </CardWrap>
  </div>

export default connect(({
  searchResults,
  budgetInput,
  remainingBudget,
  availableProducts,
  cart
}) => console.log(availableProducts.length) ||
  <Grid>
    <List
      width={window.innerWidth - 600}
      height={window.innerHeight}
      rowCount={Math.floor(availableProducts.length)}
      rowHeight={380}
      rowRenderer={x => rowRenderer(x, availableProducts)}
    />
  </Grid>
)
