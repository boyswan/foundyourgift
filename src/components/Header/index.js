import React from "react";
import styled from "styled-components";
import Const from "../../utils/constants";
import Actions from "../../actions";
import { prop } from "ramda";
import { Logo, Cart, Menu } from "../../svg";
import { interestToQuery, connect } from "../../utils";
import { Link } from "react-router";
import { media } from "../../styles";

const Header = styled.header`
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 8rem;
  width: 100%;
  background: ${prop("primary")};
  z-index: 1000;
  display: none;
  ${media.tablet`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    transition: all 0.2s ease-in-out;
    `}
`;
const Button = styled.div`
  cursor: pointer;
`;

const HeaderComponent = ({ interests }) => (
  <Header primary={Const.color.primary}>
    <Button onClick={() => Actions.toggleFilter()}>
      <Menu color={"white"} />
    </Button>
    <Link to={{ pathname: "/", query: interestToQuery(interests) }}>
      <Logo color={"white"} />
    </Link>
    <Button onClick={() => Actions.toggleSummary()}>
      <Cart color={"white"} />
    </Button>
  </Header>
);

export default connect(HeaderComponent);
