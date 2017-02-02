import React from 'react';
import styled from 'styled-components';
import { Logo } from 'svg';
import { Input, Slider, Button } from 'elements';
import { Link } from 'react-router';
import { connect, interestToQuery, mapIndex } from 'utils';
import Actions from 'actions';
import Const from 'utils/constants';

const Filter = styled.aside`
  width: 300px;
  min-width: 300px;
  padding: 3rem;
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
  margin-bottom: 2rem;
  border-bottom: 0.2rem solid #EBEBEB;
`;
const Interests = styled.ul`
  margin-bottom: 2rem;
`;
const Terms = styled.span`
  font-size: 1.6rem;
  color: #b9b9b9;
  position: absolute;
  align-self: flex-end;
  bottom: 3rem;
`;

const Interest = (router, interests) =>
  ({ label, active }, index) => (
    <Button
      key={index}
      style={active ? 'selectedSmallLight' : 'primarySmallLight'}
      onClick={() => Actions.toggleInterest({ index, active: !active, router })}
      label={label}
    />
  );

const Component = ({ router, interests, searchInput, budgetInput, filterInput }) => (
  <Filter>
    <LogoWrap>
      <Link to={{ pathname: '/', query: interestToQuery(interests) }}>
        <Logo color={Const.color.primary} />
      </Link>
    </LogoWrap>
    <Intro>{Const.text.search.intro}</Intro>
    <Divider />
    {}
    <Slider max={250} item="budgetInput" value={budgetInput} label="Budget" />
    {}
    <Interests>
      {mapIndex(Interest(router, interests), interests)}
    </Interests>
    <Link to="terms">
      <Terms>Terms & Conditions</Terms>
    </Link>
  </Filter>
);

export default connect(Component);
