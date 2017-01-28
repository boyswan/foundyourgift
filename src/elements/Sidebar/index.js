import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.aside`
  width: 350px;
  min-width: 350px;
  padding: 6rem 0 0 6rem;
`

export default ({ children }) =>
  <Sidebar>
    {children}
  </Sidebar>
