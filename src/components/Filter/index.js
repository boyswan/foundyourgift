import React from 'react';
import styled from 'styled-components';
import Logo from 'svg/Logo';

const Filter = styled.div`
  min-width: 300px;
  background: purple;
`

export default () =>
  <Filter>
    <Logo/>
    <p> Brief intro copy goes here. talk about something not sure what to say but we have 3 lines worth of space. </p>

  </Filter>
