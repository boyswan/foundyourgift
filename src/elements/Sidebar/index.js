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
    width: 100vw;
    position: fixed;
    z-index: 44;
    height: 100vh;
    padding: 3rem;
    padding-top: 11rem;
    transform: translateX(${x => x.active ? 0 : "-100%"});
    transition: all 0.2s ease-in-out;
    `}
`;

const Right = styled(Sidebar)`
  padding: 0rem 0 3rem 3rem;
  background: white;
  ${media.tablet`
    width: 100vw;
    position: fixed;
    z-index: 44;
    height: 100vh;
    padding: 3rem;
    padding-top: 11rem;
    transform: translateX(${x => x.active ? 0 : "-100%"});
    right: 0;
    transition: all 0.2s ease-in-out;
    `}
`;

export default ({ side, children, filter, summary }) => console.log(filter) ||
({
  left: <Left width={Const.ui.sidebarWidth} active={filter}> {children} </Left>,
  right: <Right width={Const.ui.sidebarWidth} active={summary}> {children} </Right>
})[side];
