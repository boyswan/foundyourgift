import React from 'react';
import styled from 'styled-components';


const Sidebar = styled.aside`
  width: 300px;
  min-width: 300px;
  padding: 6rem 0 0 6rem;
`

export default ({ children }) =>
  <Sidebar>
    {children}
  </Sidebar>
