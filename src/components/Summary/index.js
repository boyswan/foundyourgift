import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  width: 300px;
  min-width: 300px;
  background: white;
  ${''/* position: fixed;
  top: 0;
  right: 0;
  height: 100%;*/}
}
`

export default () =>
  <Sidebar>hi</Sidebar>
