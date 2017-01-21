import React from 'react';
import styled from 'styled-components';
import { Logo } from 'svg'
import { connect } from 'utils/helpers'
import Const from 'utils/constants';
import { Input, Slider, Dropdown, Tag } from 'elements'
import { Link } from 'react-router'

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

const Component = ({ searchInput, budgetInput, relationInput, ageInput, interestsInput }) =>
  <Filter>
    <LogoWrap><Logo color={Const.color.primary}/></LogoWrap>
    <Intro>{Const.text.search.intro}</Intro>
    <Link to="search" >test link here</Link>
    <Divider/>
    <Input input='searchInput' icon="Search" value={searchInput} label='Search'/>
    <Divider/>
    <Slider input='budgetInput' value={budgetInput} label='Budget'/>
  </Filter>

export default connect(Component)
