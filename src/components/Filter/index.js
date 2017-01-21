import React from 'react';
import styled from 'styled-components';
// import Logo from 'svg/Logo'
import { connect } from 'utils/helpers'
import { Text } from 'utils/constants';
import { Input, Slider, Dropdown, Tag } from 'elements'
import { Link } from 'react-router'

const Filter = styled.aside`
  width: 300px;
  min-width: 300px;
  padding: 6rem 0 0 6rem;
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

const Component = ({ searchInput, budgetInput, relationInput, ageInput, interestsInput }) =>
  <Filter>
    <LogoWrap><Logo colour="red" /></LogoWrap>
    <Intro>{Text.search.intro}</Intro>
    <Link to="search" >test link here</Link>
    <Divider/>
    <Input type='searchInput' icon="Search" value={searchInput} label='Search'/>
    <Divider/>
    <Slider type='budgetInput' value={budgetInput} label='Budget'/>
  </Filter>

export default connect(Component)
