import { prop } from "ramda";
import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1}
`;
export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  justify-content: center;
  max-width: 1280px;
  height: 100vh;
  overflow: auto;
`;
export const NoResults = styled.figure`
  align-self: center;
  flex-direction: column;
  display: flex;
  text-align: center;
  font-size: 3.2rem;
  align-items: center;
  color: ${prop("color")};
  svg {
    margin-bottom: 3rem;
    ${/* opacity: 0;
    animation: 0.5s ease 0s normal forwards 1 ${fadeIn}; */ ""}
  }
  h1 {
    margin-bottom: 1rem;
    opacity: 0;
    animation: 0.5s ease 0.1s normal forwards 1 ${fadeIn};
  }
  p {
    font-size: 2.2rem;
    opacity: 0;
    animation: 0.5s ease 0.1s normal forwards 1 ${fadeIn};
  }
`;
export const CardWrap = styled.div`
  display: flex;
  flex-direction: flex-row;
  justify-content: center;
  height: 90%;
  width: 90%;
  margin: 0 auto;
`;
export const Dot = styled.span`
  animation: 1s ease-in-out 0s normal infinite ${fadeIn};
  animation-delay: ${({ index }) => index * 0.1 + "s"};
`;
