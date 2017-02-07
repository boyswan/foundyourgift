import React from 'react';
import styled from 'styled-components';
import Actions from 'actions';
import Const from 'utils/constants';
import { Card, Product } from 'components';
import { connect } from 'utils';
import { MascotSad } from 'svg';
import { Modal } from 'elements';
import { List } from 'react-virtualized';
import { mapIndex, totalPrice, last, activeInterests } from 'utils';
import {
  pipe,
  filter,
  isNil,
  gt,
  prop,
  anyPass,
  splitEvery,
  ifElse,
  reject,
  cond,
  T,
  identity
} from 'ramda';

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  justify-content: center;
  max-width: 1280px;
  height: 100vh;
`;
const Loader = styled.div`
  width: 50px;
  height: 50px;
  background: red;
  align-self: center;
`;
const NoResults = styled.figure`
  align-self: center;
  flex-direction: column;
  display: flex;
  text-align: center;
  font-size: 3.2rem;
  align-items: center;
  color: ${prop('color')};
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
`;
const CardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: flex-row;
  justify-content: center;
  height: 90%;
`;

const Loading = () => (
  <NoResults color={Const.color.primary}>
    Loading ...
  </NoResults>
);

const NoItems = () => (
  <NoResults color={Const.color.primary}>
    <MascotSad color={Const.color.primary} />
    <h1>{Const.text.search.noResultsTitle}</h1>
    <p>{Const.text.search.noResultsBody}</p>
  </NoResults>
);

const NoInterestsSelected = () => (
  <NoResults color={Const.color.primary}>
    <MascotSad color={Const.color.primary} />
    <h1>What are you looking for ...</h1>
    <p>Select some search times to find stuff!</p>
  </NoResults>
);

const rowRenderer = ({ key, index, isScrolling, isVisible, style }, item) => (
  <div key={key} style={style}>
    <CardWrap>
      <Card item={item[index][0]} />
      <Card item={item[index][1]} />
      <Card item={item[index][2]} />
    </CardWrap>
  </div>
);

const Products = ({ availableProducts }) => (
  <List
    width={window.innerWidth - Const.ui.sidebarWidth * 2}
    height={window.innerHeight}
    rowCount={availableProducts.length}
    rowHeight={480}
    rowRenderer={x => rowRenderer(x, availableProducts)}
  />
);

export default connect(
  (
    {
      searchResults,
      interests,
      budgetInput,
      remainingBudget,
      availableProducts,
      cart,
      currentProduct
    }
  ) => console.log(interests) ||
    <Grid>
      {currentProduct.title ? <Modal><Product currentProduct={currentProduct} /></Modal> : ''}
      {cond([
        [() => availableProducts.length, () => <Products availableProducts={availableProducts} />],
        // [ !budgetInput, () => <NoBudget /> ],
        [() => !activeInterests(interests), () => <NoInterestsSelected />],
        [identity, () => <NoItems />]
      ])(T)}
    </Grid>
);
