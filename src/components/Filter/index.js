import React from 'react';
import styled from 'styled-components';
import Logo from 'svg/Logo';
import { connect } from 'utils/helpers'
import { Input } from 'elements'

const Filter = styled.div`
  width: 300px;
  min-width: 300px;
  padding: 2rem;
  ${''/* position: fixed;
  height: 100%;
  top: 0;*/}
`

const Component = ({ searchInput }) => console.log(searchInput) ||
  <Filter>
    <Logo/>
    <p> Brief intro copy goes here. talk about something not sure what to say but we have 3 lines worth of space. </p>
    <Input type='searchInput' value={searchInput} label='Search'/>

  </Filter>

export default connect('searchInput', Component)
