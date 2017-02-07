import styled from 'styled-components';
import { pipe, reduce, merge, toPairs } from 'ramda';
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

const sizes = { giant: 1170, desktop: 992, tablet: 768, phone: 376 };

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  const emSize = sizes[label] / 10;
  acc[label] = (...args) => css`
    @media (max-width: ${emSize}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
