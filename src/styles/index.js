import styled from "styled-components";
import { css } from "styled-components";
import { pipe, reduce, merge, toPairs } from "ramda";
import Const from "utils/constants";

export const H1 = styled.h1`
  font-size: 6.4rem;
  font-weight: 600;
  color: white;
  margin-bottom: 2rem;
`;
export const H2 = styled.h1`
  font-size: 2.8rem;
  font-weight: 100;
  color: white;
  margin-bottom: 4rem;
`;
export const Label = styled.label`
  color: #4674AB;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  display: inline-block;
`;
export const Container = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

// iterate through the sizes and create a media template
export const media = Object.keys(Const.ui.breakpoints).reduce((acc, label) => {
  const emSize = Const.ui.breakpoints[label] / 10;
  acc[label] = (...args) => css`
    @media (max-width: ${emSize}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
