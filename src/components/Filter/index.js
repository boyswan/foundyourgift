import React from "react";
import styled, { keyframes } from "styled-components";
import { Logo } from "svg";
import { Input, Slider, Button } from "elements";
import { Link } from "react-router";
import { connect, interestToQuery, mapIndex } from "utils";
import { prop } from "ramda";
import Actions from "actions";
import Const from "utils/constants";

const Filter = styled.aside`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LogoWrap = styled.div`
  margin-bottom: 2rem;
`;
const Intro = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
  color: #4875A9;
  line-height: 2.4rem;
  margin-bottom: 2rem;
`;
const Divider = styled.div`
  margin-bottom: 4rem;
  border-bottom: 0.2rem solid #EBEBEB;
`;

const Interests = styled.ul`
  margin-bottom: 2rem;
`;
const Terms = styled.span`
  font-size: 1.6rem;
  color: #b9b9b9;
  align-self: flex-end;
  bottom: 3rem;
`;

const Interest = router =>
  ({ label, active }, index) => (
    <Button
      inline
      key={index}
      style={active ? "selectedSmallLight" : "primarySmallLight"}
      onClick={() => Actions.toggleInterest({ index, active: !active, router })}
      label={label}
    />
  );

const Component = ({ router, availableProducts, interests, budgetInput }) =>
  console.log("selected", interests.filter(x => x.active).length) ||
    console.log("vailable", availableProducts.length) ||
    (
      <Filter width={Const.ui.sidebarWidth}>
        <div>
          <LogoWrap>
            <Link to={{ pathname: "/", query: interestToQuery(interests) }}>
              <Logo color={Const.color.primary} />
            </Link>
          </LogoWrap>
          <Intro>{Const.text.search.intro}</Intro>
          <Divider />
          <Slider
            hasBudget={!availableProducts.length && interests.filter(x => x.active).length > 0}
            max={10000}
            item="budgetInput"
            value={budgetInput}
            label="Budget"
          />
          <Interests interests={interests.filter(x => x.active).length}>
            {mapIndex(Interest(router, interests), interests)}
          </Interests>
        </div>
        <Link to="terms">
          <Terms>Terms & Conditions</Terms>
        </Link>
      </Filter>
    );

export default connect(Component);
