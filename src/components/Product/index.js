import React from "react";
import styled from "styled-components";
import Actions from "actions";
import Const from "utils/constants";
import { Button } from "elements";
import { Cart } from "svg";
import { formatPrice } from "utils";
import { prop, tail, map, identity, pipe, addIndex, take } from "ramda";
import Moment from "moment";

const Product = styled.div`
  flex: 0 0 50%;
  position: relative;
  margin: 1rem;
  background: white;
  width: 50vw;
  height: 80vh;
  padding: 2rem;
`;
const ImageWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50%;
`;
const Image = styled.img`
  ${"" /* width: 50rem;
  width: 50rem;*/}
  padding: 2rem;
  object-fit: contain;
`;
const ImageList = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageSmall = styled.img`
  width: 10rem;
  height: 10rem;
  padding: 1rem;
  object-fit: contain;
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
const Body = styled.div`
`;
const Feature = styled.li`
  font-size: 1.6rem;
  margin-bottom: 4rem;
`;
const FeatureWrap = styled.div`
  height: 10%;
  overflow: scroll;
`;
const Content = styled.div`
  padding: 1.5rem 1rem;
  color: ${prop("secondary")};
  position: relative;

  span {
    font-size: 4.3rem;
    font-weight: 400;
    letter-spacing: 1.1px;
    margin-bottom: 1.6rem;
    display: block;
    color: ${prop("primary")};
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  p {
    color: #b9b9b9;
    font-weight: 300;
    font-size: 1.4rem;
  }
`;

const SmallImage = (src, key) => <ImageSmall src={src} key={key} />;

const Gallery = ({ image, imageSet }) => (
  <ImageWrap>
    <Image src={image} />
    <ImageList>
      {pipe(addIndex(map)(SmallImage), take(4))(imageSet)}
    </ImageList>
  </ImageWrap>
);
export default ({ currentProduct }) => {
  const {
    title = "",
    price = 0,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image = "",
    publisher,
    description,
    timestamp,
    url
  } = currentProduct;

  const features = [feature1, feature2, feature3, feature4, feature5];
  const imageSet = [image1, image2, image3, image4, image5];
  return (
    <Product>
      <Gallery image={image} imageSet={imageSet} />
      <Content secondary={Const.color.secondary} primary={Const.color.primary}>
        <Save color={Const.color.grey} onClick={() => Actions.selectItem({ item: currentProduct })}>
          <Cart color={Const.color.primary} />
        </Save>
        <span>{formatPrice(price)}</span>
        <h2>{publisher}</h2> : ""}
        <h1>{title}</h1>
        <p>
          Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on [relevant Amazon Site(s), as applicable] at the time of purchase will apply to the purchase of this product."
        </p>
        <Body>
          <p>{description}</p>
          <FeatureWrap>{features.map((x, i) => <Feature key={i}>{x}</Feature>)}</FeatureWrap>
        </Body>
        <p>Last updated {Moment(timestamp).fromNow()}</p>
        <a target="_blank" href={url}>
          <Button style="primaryLight" label="Quick buy on Amazon" />
        </a>
      </Content>
    </Product>
  );
};
