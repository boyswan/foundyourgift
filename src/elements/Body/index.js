import React from "react";
import styled from "styled-components";
import { media } from "../../styles";
const Body = styled.article`
  flex: 1;
  height: 100%;
  overflow: auto;
  background: #f1f1f1;
  ${media.tablet`
    padding-top: 8rem;
    `}
`;

export default ({ children }) => (
  <Body>
    {children}
  </Body>
);
