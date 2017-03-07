import React from "react";
import styled from "styled-components";
import { Link } from "react-router";
import { connect } from "../utils";
import { mapIndex, interestToQuery } from "../utils";
import { Logo, Mascot } from "../svg";
import Actions from "../actions";
import { Summary, Filter } from "../components";
import { H1, H2 } from "../styles";
import { Sidebar, Button, Slider } from "../elements";
import Const, { text } from "../utils/constants";
const isClient = typeof window !== "undefined";

const Background = styled.div`
  display: flex;
  flex-direction: ${({ row }) => row ? "row" : "column"};
  justify-content: space-between;
  background: ${({ color }) => color};
  width: 100%;
`;
const HeaderLogo = styled.header`
  width: 100%;
  padding: 3rem 3rem;
`;
const MascotLogo = styled.div`
  margin-bottom: 3rem;
`;
const Content = styled.section`
  width: 100%;
  padding: 0 2rem;
  text-align: center;
  display: inline-block;

`;
const Divider = styled.hr`
  border: none;
  margin: 0 auto;
  max-width: 50%;
  opacity: 0.25;
  margin-bottom: 6rem;
  border-bottom: 0.2rem solid ${({ color }) => color};
`;
const Interests = styled.ul`
  max-width: 50%;
  margin: 0 auto;
  margin-bottom: 2rem;
`;
const Footer = styled.footer`
  width: 100%;
  padding: 3rem 2rem;
  text-align: center;
`;
const Amazon = styled.p`
  ${"" /* max-width: 60rem;*/}
  margin: 0 auto;
  font-size: 1.2rem;
  color: ${({ color }) => color};
`;
const FooterLinks = styled.div`
  margin-bottom: 1rem;
  color: ${({ color }) => color};
  a {
    font-size: 1.6rem;
    margin: 0 0.5rem;
    color: inherit;
    ${"" /* transition: all 0.2s ease-in-out;*/}
    &:hover {
      color: white;
    }
  }
`;

const Interest = router =>
  ({ label, active }, index) => (
    <Button
      inline
      active={active}
      key={index}
      style={active ? "selected" : "primary"}
      onClick={() => Actions.toggleInterest({ router, index, active: !active })}
      label={label}
    />
  );

if (isClient) document.body.style.backgroundColor = Const.color.primary;

export default connect(({ interests, router, budgetInput }) => (
  <Background color={Const.color.primary}>
    <HeaderLogo>
      <Logo color="white" />
    </HeaderLogo>
    <Content>
      <MascotLogo>
        <Mascot color="white" />
      </MascotLogo>
      <H1>{Const.text.home.title}</H1>
      <H2>{Const.text.home.intro}</H2>
      <Divider color={Const.color.primaryDark} />
      <Interests>
        {mapIndex(Interest(router), interests)}
      </Interests>
      <Divider color={Const.color.primaryDark} />
      <Link to={{ pathname: "search", query: interestToQuery(interests) }}>
        <Button inline style="primary" label={Const.text.home.cta} />
      </Link>
    </Content>
    <Footer>
      <FooterLinks color={Const.color.primaryDark}>
        <Link to="terms">Terms</Link>
      </FooterLinks>
      <Amazon color={Const.color.primaryDark}>
        {Const.text.home.amazon}
        <br />
        {Const.text.home.amazon2}
      </Amazon>
    </Footer>
  </Background>
));
