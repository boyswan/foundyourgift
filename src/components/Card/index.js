import React from "react";
import styled from "styled-components";
import Actions from "../../actions";
import Const from "../../utils/constants";
import { Heart, Cart, ShowMore, Clock } from "../../svg";
import { prop, tail, map } from "ramda";
import { Button } from "../../elements";
import Moment from "moment";
import { formatPrice } from "../../utils";
import { media } from "../../styles";

const Card = styled.li`
  background: white;
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
    flex-direction: column;
    ${media.tablet`
      position: relative;
      opacity: 1;
      background: white;
      flex-direction: row;
    `}

    button {
      min-width: 65%;
      ${media.tablet`
        min-width: 30%;
        span {
          display: none;
        }
        svg {
          margin: 0
        }
      `}
    }
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
  padding: 5rem;
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
    display: inline-block;
    margin-right: 1rem;
    color: ${prop("primary")};
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 0.9rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    height: 2.4rem;
    letter-spacing: 0.4px;
    line-height: 2.4rem;
  }
  p {
    margin-top: 0.8rem;
    color: #a29d9d;
    opacity: 0.5;
    font-weight: 100;
    font-size: 1.4rem;
  }
`;
const ImageWrap = styled.div`
  height: 69%;
  ${media.tablet`
    height: 61%;
  `}
`;
const OldPrice = styled.span`
  opacity: 0.75;
  color: #d8d8d8 !important;
  text-decoration: line-through;
  font-weight: 200 !important;
`;

export default ({ item = {}, breakpoint }) => {
  const {
    title = "",
    salePrice = 0,
    price = 0,
    searchType,
    image = "",
    url,
    currentTimestamp
  } = item;
  return (
    <Card breakpoint={breakpoint}>
      <Save color={Const.color.grey} onClick={() => Actions.setCurrent({ value: item })}>
        <ShowMore color={Const.color.primary} />
      </Save>
      <ImageWrap>
        <Image src={image} />
      </ImageWrap>
      <div className="card_dim">
        <Button
          icon={<Cart color="white" />}
          style="primaryLight"
          label="Add to cart"
          onClick={() => Actions.addItem({ value: item })}
        />
        <Button
          icon={<Clock color="white" />}
          style="primaryLight"
          label="Quick buy"
          onClick={() => window.open(url, "_blank")}
        />
      </div>
      <Content secondary={Const.color.secondary} primary={Const.color.primary}>
        <span>{formatPrice(salePrice < price && salePrice > 0 ? salePrice : price)}</span>
        {salePrice < price && salePrice > 0 ? <OldPrice>{formatPrice(price)}</OldPrice> : ""}
        <h1>{title}</h1>
        <p> Last updated {Moment(currentTimestamp).fromNow()}</p>
      </Content>
    </Card>
  );
};
