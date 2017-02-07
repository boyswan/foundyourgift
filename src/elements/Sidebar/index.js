import React from 'react';
import styled from 'styled-components';
import Const from 'utils/constants';
import { prop } from 'ramda';

const Sidebar = styled.aside`
  width: ${prop('width')}px;
  min-width: ${prop('width')}px;
  padding: ${prop('padding')};
  background: ${prop('background')};
`;

export default ({ children, background, padding = '3rem' }) => (
  <Sidebar background={background} padding={padding} width={Const.ui.sidebarWidth}>
    {children}
  </Sidebar>
);
