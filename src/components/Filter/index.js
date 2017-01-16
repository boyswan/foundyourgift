import React from 'react';
import styled from 'styled-components';
import Logo from 'svg/Logo';
import { connect } from 'utils/helpers'
import Text from 'utils/i18n';
import { Input, Slider, Dropdown } from 'elements'

const Filter = styled.div`
  width: 300px;
  min-width: 300px;
  padding: 4rem;
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
const Component = ({ searchInput, budgetInput, relationInput }) =>
  <Filter>
    <LogoWrap><Logo/></LogoWrap>
    <Intro>{Text.intro}</Intro>
    <Divider/>
    <Input type='searchInput' icon="Search" value={searchInput} label='Search'/>
    <Divider/>
    <Slider type='budgetInput' value={budgetInput} label='Budget'/>
    <Dropdown type='relationInput' icon="Dropdown" value={relationInput} label='Who for?'/>
    <Dropdown type='relationInput' icon="Dropdown" value={relationInput} label='How old?'/>
  </Filter>

export default connect(Component)
