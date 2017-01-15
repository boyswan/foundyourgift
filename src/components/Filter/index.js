import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Logo from 'svg/Logo';
import { Input } from 'elements'

const Filter = styled.div`
  width: 300px;
  min-width: 300px;
  padding: 2rem;
  ${''/* position: fixed;
  height: 100%;
  top: 0;*/}
`

const Component = ({ value }) => console.log(value) ||
  <Filter>
    <Logo/>
    <p> Brief intro copy goes here. talk about something not sure what to say but we have 3 lines worth of space. </p>
    <Input type='searchInput' value={value} label='Search'/>

  </Filter>

export default connect(({ searchInput }) => {
  value: searchInput
}, ({ value }) => console.log(value) ||
  <Filter>
    <Logo/>
    <p> Brief intro copy goes here. talk about something not sure what to say but we have 3 lines worth of space. </p>
    <Input type='searchInput' value={value} label='Search'/>

  </Filter>)
