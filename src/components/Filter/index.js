import React from 'react';
import styled from 'styled-components';
import { Logo } from 'svg'
import Actions from 'actions';
import { connect } from 'utils'
import Const from 'utils/constants';
import { Input, Slider, Button } from 'elements'
import { Link } from 'react-router'
import { addIndex, map } from 'ramda';
import { interestToQuery } from 'utils'

const Filter = styled.aside`
  width: 300px;
  min-width: 300px;
  padding: 3rem 0 0 3rem;
`

const LogoWrap = styled.div`
  margin-bottom: 2rem;
`

const Intro = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
  color: #4875A9;
  line-height: 2.4rem;
  margin-bottom: 2rem;
`
const Divider = styled.div`
  margin-bottom: 2rem;
  border-bottom: 0.2rem solid #EBEBEB;
`
const Interests = styled.ul`
  margin-bottom: 2rem;
`

const Interest = (router, interests) => ({ label, active }, index) =>
  <Button
    key={index}
    style={active ? 'selected' : 'primary' }
    onClick={() => {
      Actions.toggleInterest({ index, active: !active, router })
      // router.push({
      //   ...router.location,
      //   query: interestToQuery(interests)
      // })
    }}
    label={label}/>


const Component = ({ router, interests, searchInput, budgetInput }) =>
  <Filter>
    <LogoWrap><Logo color={Const.color.primary}/></LogoWrap>
    <Intro>{Const.text.search.intro}</Intro>
    <Divider/>
    <Input item='searchInput' icon="Search" value={searchInput} label='Search'/>
    <Divider/>
    <Slider item='budgetInput' value={budgetInput} label='Budget'/>
    <Interests>
      {addIndex(map)(Interest(router, interests), interests)}
    </Interests>
  </Filter>

export default connect(Component)
