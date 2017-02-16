import React from "react";
import styled from "styled-components";
import Const from "utils/constants";
import { prop } from "ramda";
import { media } from "styles";

const Sidebar = styled.aside`
  width: ${prop("width")}px;
  min-width: ${prop("width")}px;
`;

const Left = styled(Sidebar)`
  padding: 3rem;
  background: #F6F6F6;
  ${media.tablet`
    position: fixed;
    z-index: 44;
    height: 100vh;
    transform: translateX(-100%);
    transition: all 0.2s ease-in-out;
    `}
`;

const Right = styled(Sidebar)`
  padding:3rem 0 3rem 3rem;
  background: white;
  ${media.tablet`
    position: fixed;
    z-index: 44;
    height: 100vh;
    transform: translateX(100%);
    right: 0;
    transition: all 0.2s ease-in-out;
    `}
`;

export default ({ side, children }) => {
  const Side = ({ left: Left, right: Right })[side];
  return (
    <Side width={Const.ui.sidebarWidth}>
      {children}
    </Side>
  );
};
