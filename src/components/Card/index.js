import React from "react";
import styled from "styled-components";
import Actions from "actions";
import Const from "utils/constants";
import { Heart, Cart, ShowMore } from "svg";
import { prop, tail, map } from "ramda";
import { Button } from "elements";
import Moment from "moment";
import { formatPrice } from "utils";

const Card = styled.li`
  background: white;
  ${"" /* flex: 0 0 30rem;*/}
  height: 100%;
  width: ${({ breakpoint }) => breakpoint == 1 ? "100%" : breakpoint == 2 ? "50%" : "33.3%"};
  min-width: ${({ breakpoint }) => breakpoint == 1 ? "100%" : breakpoint == 2 ? "50%" : "33.3%"};
  margin: 1rem;
  position: relative;
  border-radius: 0.5rem;

  .card_dim {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(158, 154, 154, 0.1);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    .card_dim {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4rem;
`;
const Type = styled.div`
  color: #a29d9d;
  position: absolute;
  top: 2.2rem;
  left: 2rem;
  font-weight: 100;
  font-size: 1.4rem;
`;
const Save = styled.div`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 10rem;
  background: white;
  position: absolute;
  z-index: 1;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const More = styled(Save)`
  top: 0.8rem;
  right: 0.9rem;
`;
const Content = styled.div`
  padding: 1.8rem;
  color: ${prop("secondary")};
  position: relative;

  span {
    font-size: 2.3rem;
    font-weight: 400;
    letter-spacing: 1.1px;
    margin-bottom: 0.6rem;
    display: block;
    color: ${prop("primary")};
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 0.2rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 5rem;
    letter-spacing: 0.4px;
    line-height: 2.4rem;
  }
  p {
    margin-top: 0.8rem;
    color: #a29d9d;
    font-weight: 300;
    font-size: 1.4rem;
  }
`;
const ImageWrap = styled.div`
  height: 64%;
`;

export default ({ item = {}, breakpoint }) => {
  const {
    title = "",
    salePrice = 0,
    price = 0,
    searchType,
    image = "",
    currentTimestamp
  } = item;
  return (
    <Card breakpoint={breakpoint}>
      <Type secondary={Const.color.greyDark}>{searchType}</Type>
      <Save
        color={Const.color.grey}
        onClick={() => Actions.setCurrent({ item: "currentProduct", value: item })}
      >
        <ShowMore color={Const.color.primary} />
      </Save>
      <ImageWrap>
        <div className="card_dim">
          <Button
            style="primaryLight"
            label="Add to cart"
            onClick={() => Actions.selectItem({ item })}
          />
        </div>
        <Image src={image} />
      </ImageWrap>
      <Content secondary={Const.color.secondary} primary={Const.color.primary}>
        <span>{formatPrice(salePrice > 1 ? salePrice : price)}</span>
        <h1>{title}</h1>
        <p> Last updated {Moment(currentTimestamp).fromNow()}</p>
      </Content>
    </Card>
  );
};
