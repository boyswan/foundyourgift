import React from 'react';
import styled from 'styled-components';
import { svg } from 'svg';
import { connect } from 'utils/helpers'
import Text from 'utils/i18n';
import { Input, Slider, Dropdown, Tag } from 'elements'

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

const relationOptions = [
  { value: 1, label: 'Brother' },
  { value: 2, label: 'Sister' },
  { value: 3, label: 'Mum' },
  { value: 4, label: 'Dad' },
  { value: 5, label: 'Grandma' },
  { value: 6, label: 'Grandad' },
  { value: 7, label: 'Husband' },
  { value: 8, label: 'Wife' }
];

const ageOptions = [
  { value: 1, label: '0-10' },
  { value: 2, label: '12-20' },
  { value: 3, label: '21-30' },
  { value: 4, label: '31-40' },
  { value: 5, label: '41-50' },
  { value: 6, label: '51-60' },
  { value: 7, label: '61+' },
];

const interestsOptions = [
  { value: 1, label: 'Brother' },
  { value: 2, label: 'Sister' },
  { value: 3, label: 'Mum' },
  { value: 4, label: 'Dad' },
  { value: 5, label: 'Grandma' },
  { value: 6, label: 'Grandad' },
  { value: 7, label: 'Husband' },
  { value: 8, label: 'Wife' }
]

const Component = ({ searchInput, budgetInput, relationInput, ageInput, interestsInput }) =>
  <Filter>
    <LogoWrap>{svg('Logo')}</LogoWrap>
    <Intro>{Text.intro}</Intro>
    <Divider/>
    <Input type='searchInput' icon="Search" value={searchInput} label='Search'/>
    <Divider/>
    <Slider type='budgetInput' value={budgetInput} label='Budget'/>
    <Dropdown type='relationInput' options={relationOptions} icon="Dropdown" value={relationInput} label='Who for?'/>
    <Dropdown type='ageInput' options={ageOptions} icon="Dropdown" value={ageInput} label='How old?'/>
    <Tag type='interestsInput' options={interestsOptions} icon="Dropdown" value={interestsInput} label='Interests?'/>
  </Filter>

export default connect(Component)
