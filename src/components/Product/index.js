import React from "react";
import styled from "styled-components";
import Actions from "actions";
import Const from "utils/constants";
import { Button } from "elements";
import { Cart, Clock, Cross } from "svg";
import { formatPrice, mapIndex } from "utils";
import { prop, propOr, map, pipe, take, uniq, append, uncurryN } from "ramda";
import { media } from "styles";
import Moment from "moment";

const Product = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  display: flex;
  width: 60%;
  z-index: 2;
  ${media.tablet`
    flex-direction: column-reverse;
    width: 100%;
    margin-top: 9rem;
    padding: 0;
  `}
`;

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
const Image = styled.img`
  padding: 1rem;
  height: 25rem;
  width: 25rem;
  object-fit: contain;
  ${media.tablet`
    width: 100%;
    height: 100%;
  `}
`;
const Save = styled.div`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 10rem;
  background: white;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  svg {
    position: absolute;
    left: 11px;
    top: 13px;
  }
`;
const OldPrice = styled.span`
  opacity: 0.75;
  color: #d8d8d8 !important;
  text-decoration: line-through;
  font-weight: 200 !important;
  font-size: 3.6rem;
`;
const Body = styled.div`
  width: 80%;
  ${media.tablet`
    width: 100%;
  `}
  button {
    margin-left: 0;
  }
`;
const Feature = styled.li`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;
const FeatureWrap = styled.ul`
  font-weight: 300;
  margin-bottom: 4rem;
`;
const Price = styled.span`
  font-size: 5.2rem;
  font-weight: 400;
  letter-spacing: 1.1px;
  display: inline-block;
  margin-right: 1rem;
  color: ${prop("primary")};
`;
const Content = styled.div`
  color: ${prop("secondary")};
  position: relative;
  h2 {
    font-size: 2.8rem;
    ${"" /* color: #ff7270; */}
    font-weight: 300;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 2.6rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }
  p {
    color: #b9b9b9;
    font-weight: 300;
    font-size: 1.4rem;
    margin-bottom: 4rem;
  }
`;
const LastUpdated = styled.p`
  margin-bottom: 2rem;
`;
const Description = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
`;
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  svg {
    width: 3rem;
    cursor: pointer;
    height: 3rem;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  ${media.tablet`
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}

  button {
    margin-bottom: 4rem;
    ${media.tablet`
      width: 100%;
      svg {
        margin-right: 1rem;
      }
    `}
  }
`;

const SmallImage = (src, key) => <Image src={src} key={key} />;

const getGallery = uncurryN(2, image => pipe(append(image), uniq, mapIndex(SmallImage)));

const Gallery = ({ image, images = { values: [] } }) => {
  return (
    <ImageList>
      {getGallery(image, images.values)}
    </ImageList>
  );
};

const warning = "Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on [relevant Amazon Site(s), as applicable] at the time of purchase will apply to the purchase of this product.";
export default ({ currentProduct }) => {
  const {
    title = "",
    price = 0,
    features = {},
    images = {},
    image = "",
    publisher,
    date,
    salePrice,
    description,
    timestamp,
    url
  } = currentProduct;

  return (
    <Product>
      <Gallery image={image} images={images} />
      <Description>
        <Content secondary={Const.color.secondary} primary={Const.color.primary}>
          <Close onClick={() => Actions.setCurrent({ value: {} })}>
            <Cross color={"#a9a9a9"} />
          </Close>
          <Body>
            <Price primary={Const.color.primary}>
              {formatPrice(salePrice < price && salePrice > 0 ? salePrice : price)}
            </Price>
            {salePrice < price && salePrice > 0 ? <OldPrice>{formatPrice(price)}</OldPrice> : ""}
            <LastUpdated>Last updated {Moment(date).fromNow()}</LastUpdated>
            <h1>{title}</h1>
            <ButtonWrap>
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
            </ButtonWrap>
            {publisher && <h2>{publisher}</h2>}
            <p>{description}</p>
            <FeatureWrap>
              {features.values && features.values.map((x, i) => <Feature key={i}>{x}</Feature>)}
            </FeatureWrap>
            <p>{warning}</p>
          </Body>
        </Content>
      </Description>
    </Product>
  );
};
