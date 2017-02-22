import React from "react";
import styled from "styled-components";
import Const from "utils/constants";
import { Card, Product } from "components";
import { connect } from "utils";
import { MascotSad } from "svg";
import { Modal } from "elements";
import { List } from "react-virtualized";
import { activeInterests } from "utils";
import { prop, cond, T, identity } from "ramda";

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  justify-content: center;
  max-width: 1280px;
  height: 100vh;
  position: relative;
  overflow: auto;
`;
const NoResults = styled.figure`
  align-self: center;
  flex-direction: column;
  display: flex;
  text-align: center;
  font-size: 3.2rem;
  align-items: center;
  color: ${prop("color")};
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
  ${""}/* width: 100%; */
  display: flex;
  flex-direction: flex-row;
  justify-content: center;
  height: 90%;
  width: 90%;
  margin: 0 auto;
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

const rowRenderer = ({ key, index, isScrolling, isVisible, style }, item, breakpoint) => (
  <div key={key} style={style}>
    {breakpoint === 1
      ? <CardWrap>
          <Card breakpoint={breakpoint} item={item[index][0]} />
        </CardWrap>
      : breakpoint === 2
          ? <CardWrap>
              <Card breakpoint={breakpoint} item={item[index][0]} />
              <Card breakpoint={breakpoint} item={item[index][1]} />
            </CardWrap>
          : breakpoint === 3
              ? <CardWrap>
                  <Card breakpoint={breakpoint} item={item[index][0]} />
                  <Card breakpoint={breakpoint} item={item[index][1]} />
                  <Card breakpoint={breakpoint} item={item[index][2]} />
                </CardWrap>
              : ""}
  </div>
);

const Products = ({ width, breakpoint, availableProducts }) => (
  <List
    width={width}
    height={window.innerHeight}
    rowCount={availableProducts.length}
    rowHeight={480}
    rowRenderer={x => rowRenderer(x, availableProducts, breakpoint)}
  />
);

export default connect((
  {
    status: { loading },
    interests,
    breakpoint,
    currentProduct,
    availableProducts,
    dimensions: { width }
  }
) => (
  <Grid>
    <Modal active={currentProduct.title}><Product currentProduct={currentProduct} /></Modal>
    <Modal active={loading}>loading .....</Modal>
    {cond([
      [
        () => availableProducts.length,
        () => <Products {...{ breakpoint, width, availableProducts }} />
      ],
      [
        () => !activeInterests(interests),
        () => (
          <NoItems
            title="What are you looking for ..."
            body="Select some search times to find stuff!"
          />
        )
      ],
      [
        identity,
        () => (
          <NoItems
            title={Const.text.search.noResultsTitle}
            body={Const.text.search.noResultsBody}
          />
        )
      ]
    ])(T)}
  </Grid>
));
