import React from 'react';
import styled from 'styled-components';

const Body = styled.article`
  flex: 1;
  height: 100%;
  overflow: auto;
  background: #f1f1f1;
`;

export default ({ children }) => (
  <Body>
    {children}
  </Body>
);
