import styled from 'styled-components'
import { prop } from 'ramda'
import { media } from '../../styles'

export const Header = styled.header`
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 8rem;
  width: 100%;
  background: ${prop('primary')};
  z-index: 1000;
  display: none;
  ${media.tablet`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    transition: all 0.2s ease-in-out;
    `}
`
export const Button = styled.div`
  cursor: pointer;
`
