import React from "react";
import styled, { keyframes } from "styled-components";
import Const from "../../utils/constants";
import { Card } from "../../components";
import { MascotSad, MascotNoSelection, MascotLoading } from "../../svg";
import { List } from "react-virtualized";
import { activeInterests, connect } from "../../utils";
import { prop, cond, T, identity, clamp, range } from "ramda";

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1}
`;
const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  justify-content: center;
  max-width: 1280px;
  height: 100vh;
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
  svg {
    margin-bottom: 3rem;
    ${"" /* opacity: 0;
    animation: 0.5s ease 0s normal forwards 1 ${fadeIn}; */}
  }
  h1 {
    margin-bottom: 1rem;
    opacity: 0;
    animation: 0.5s ease 0.1s normal forwards 1 ${fadeIn};
  }
  p {
    font-size: 2.2rem;
    opacity: 0;
    animation: 0.5s ease 0.1s normal forwards 1 ${fadeIn};
  }
`;
const CardWrap = styled.div`
  display: flex;
  flex-direction: flex-row;
  justify-content: center;
  height: 90%;
  width: 90%;
  margin: 0 auto;
`;
const Dot = styled.span`
  animation: 1s ease-in-out 0s normal infinite ${fadeIn};
  animation-delay: ${({ index }) => index * 0.1 + "s"};
`;

const rowRenderer = ({ key, index, isScrolling, isVisible, style }, item, breakpoint) => {
  const bp1 = (
    <CardWrap index={index}>
      <Card breakpoint={breakpoint} item={item[index][0]} />
    </CardWrap>
  );

  const bp2 = (
    <CardWrap index={index}>
      <Card breakpoint={breakpoint} item={item[index][0]} />
      <Card breakpoint={breakpoint} item={item[index][1]} />
    </CardWrap>
  );

  const bp3 = (
    <CardWrap index={index}>
      <Card breakpoint={breakpoint} item={item[index][0]} />
      <Card breakpoint={breakpoint} item={item[index][1]} />
      <Card breakpoint={breakpoint} item={item[index][2]} />
    </CardWrap>
  );
  return (
    <div key={key} style={style}>
      {breakpoint === 1 ? bp1 : breakpoint === 2 ? bp2 : breakpoint === 3 ? bp3 : ""}
    </div>
  );
};

const Products = ({ width, breakpoint, availableProducts }) => (
  <List
    width={width}
    height={window.innerHeight}
    rowCount={availableProducts.length}
    rowHeight={480}
    rowRenderer={x => rowRenderer(x, availableProducts, breakpoint)}
  />
);

const NoItems = ({ title, body, icon }) => (
  <NoResults color={Const.color.primary}>
    {icon}
    <h1>{title}</h1>
    <p>{body}</p>
  </NoResults>
);

export default connect((
  {
    status: { loading: isLoading },
    interests,
    breakpoint,
    currentProduct,
    availableProducts,
    dimensions: { width }
  }
) =>
  {
    const loading = [
      () => isLoading,
      () => (
        <NoItems
          icon={<MascotLoading color={Const.color.primary} />}
          title={<div>Loading {range(0, 3).map(x => <Dot key={x} index={x}>.</Dot>)} </div>}
          body="Just one second"
        />
      )
    ];

    const pass = [
      () => availableProducts.length,
      () => <Products {...{ breakpoint, width, availableProducts }} />
    ];

    const noInterests = [
      () => !interests.filter(x => x.active).length,
      () => (
        <NoItems
          icon={<MascotNoSelection color={Const.color.primary} />}
          title="What are you looking for?"
          body="Choose some interests from the left to see some gifts"
        />
      )
    ];
    const noResults = [
      () => identity,
      () => (
        <NoItems
          icon={<MascotSad color={Const.color.primary} />}
          title="You're over budget!"
          body="Increase your budget too see more items!"
        />
      )
    ];

    return (
      <Grid>
        {cond([ loading, pass, noInterests, noResults ])(T)}
      </Grid>
    );
  });
